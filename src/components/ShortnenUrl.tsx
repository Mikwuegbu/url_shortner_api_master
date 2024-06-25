import { advancedStats } from './data';

const ShortnenUrl = () => {
	return (
		<div className="bg-gray-200 my-36 md:my-6">
			<div className="px-5 md:px-24">
				<div className="relative -top-16 md:-top-10 flex justify-center md:bg-bgFormDesktop bg-bgFormMobile rounded-xl">
					<div className="formContainer">
						<input
							type="text"
							className="bg-white py-2 rounded-lg block w-full"
						/>
						<button className="bg-Primary-cyan py-2 rounded-lg w-full md:w-auto text-white font-medium text-nowrap md:px-6">
							shorten it!
						</button>
					</div>
				</div>
				<div>Fetched Request goes in Here!</div>
				<div className="py-6">
					<div className="text-center space-y-4">
						<h2 className="font-bold text-2xl text-Neutral-Very_Dark_Blue">
							Advanced Statistics
						</h2>
						<p className="font-medium text-Neutral-Grayish_Violet">
							Track how your links are performing across the web with our
							advanced statistics dashboard
						</p>
					</div>
					<div className="py-16 space-y-16">
						{advancedStats.map((stats, index) => (
							<div key={stats.id} className="relative">
								{index === 0 ? (
									''
								) : (
									<div className="border-4 w-0 h-14 -translate-x-1 left-1/2 -top-16 border-Primary-cyan absolute"></div>
								)}

								<div className="bg-white flex-col px-5 flex place-items-center text-center rounded-2xl">
									<img
										src={stats.avatar}
										alt=""
										className="bg-Primary-darkViolet px-5 py-5 rounded-full relative -top-8"
									/>

									<h3 className="font-semibold text-xl">{stats.title}</h3>
									<p className="pb-8 pt-6  font-normal text-Neutral-Grayish_Violet">
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

export default ShortnenUrl;
