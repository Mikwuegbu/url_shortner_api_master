import { useState, useRef, ChangeEvent, MouseEvent } from "react";
import { advancedStats } from "../../public/data.ts";

const ShortenUrl = () => {
  const [error, setError] = useState<null | string>(null);
  const [input, setInput] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [initialInput, setinitialInput] = useState<string>("");
  const [buttonText, setbuttonText] = useState<string>("Copy");

  //handle input
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  //fetch Logic
  const fetchData = async (url: string): Promise<string | null> => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Failed to shorten URL");
      }
      const data = await res.text();
      return data;
    } catch (error: unknown) {
      setError((error as Error).message);
      return null;
    }
  };

  //Handle the Submit
  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    inputRef.current?.focus();
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    setError(null);
    if (!urlPattern.test(input)) {
      setError("Please enter a valid URL");
      return setInput("");
    }

    //encoding and formating Input
    setinitialInput(input);
    setInput(input.trim().toLowerCase());
    const formattedUrl = input.trim().toLowerCase();
    const encodedUrl = encodeURIComponent(formattedUrl);

    const data = await fetchData(
      `https://tinyurl.com/api-create.php?url=${encodedUrl}`,
    );

    if (data && data) {
      setShortUrl(data);
    } else {
      setError("Failed to retrieve short URL");
    }

    return setInput("");
  };

  //handle the Copy
  const handleCopyLink = async (
    e: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    e.preventDefault();
    try {
      const copyLink = shortUrl as string;
      await navigator.clipboard.writeText(copyLink);
      setbuttonText("Copied");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="bg-gray-200 mt-36 md:mt-6">
      <div className="px-5 md:px-24">
        <div className="relative -top-16 md:-top-10 flex justify-center md:bg-bgFormDesktop bg-bgFormMobile rounded-xl">
          <div className="formContainer">
            <input
              type="url"
              className="bg-white py-2 rounded-lg block w-full px-4"
              onChange={handleInput}
              value={input}
              placeholder="Enter URL"
              ref={inputRef}
            />
            {error && (
              <p className="text-Secondary-red text-justify text-sm">{error}</p>
            )}
            <button
              className="bg-Primary-cyan py-2 rounded-lg w-full md:w-auto text-white font-medium text-nowrap md:px-6"
              onClick={handleSubmit}
            >
              Shorten it!
            </button>
          </div>
        </div>
        <div className="-mt-10 md:-mt-5">
          {shortUrl && (
            <div className="bg-white p-4 md:py-4 rounded-lg shadow-md space-y-2 md:space-y-0 px-4 md:px-10 flex md:flex-row flex-col justify-center md:justify-between">
              <h1 className="text-justify font-medium text-wrap md:self-center">
                {initialInput}
              </h1>
              <hr className="bg-Neutral-Grayish_Violet md:hidden" />
              <div className="text-justify md:space-x-4 space-y-4 md:space-y-0 md:self-center">
                <a href={shortUrl} className="text-blue-500 text-wrap">
                  {shortUrl}
                </a>
                <button
                  className=" bg-Primary-cyan py-2 rounded-lg w-full md:w-auto text-white font-medium text-nowrap md:px-6"
                  onClick={handleCopyLink}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="py-8">
          <div className="text-center space-y-4">
            <h2 className="font-bold text-2xl text-Neutral-Very_Dark_Blue">
              Advanced Statistics
            </h2>
            <p className="font-medium text-Neutral-Grayish_Violet md:px-64">
              Track how your links are performing across the web with our
              advanced statistics dashboard
            </p>
          </div>
          <div className="py-16 space-y-16 md:space-y-0 md:space-x-6 md:flex">
            {advancedStats.map((stats, index) => (
              <div
                key={stats.id}
                className={`relative ${
                  index === 1
                    ? "md:pt-10"
                    : index === 2
                      ? "md:pt-20"
                      : "md:pt-0"
                }`}
              >
                {index > 0 && (
                  <div className="md:hidden border-4 w-0 h-14 -translate-x-1 left-1/2 -top-16 border-Primary-cyan absolute" />
                )}
                {index > 0 && (
                  <div className="md:block hidden border-4 w-6 h-0 top-1/2 -translate-x-6 border-Primary-cyan absolute" />
                )}
                <div className="bg-white flex-col px-5 flex place-items-center text-center md:text-left rounded-2xl">
                  <img
                    src={stats.avatar}
                    alt=""
                    className="bg-Primary-darkViolet px-5 py-5 rounded-full relative -top-8 md:right-20"
                  />
                  <h3 className="font-semibold text-xl md:pr-20 text-nowrap">
                    {stats.title}
                  </h3>
                  <p className="pb-8 pt-6 font-normal text-Neutral-Grayish_Violet">
                    {stats.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortenUrl;
