import { footerIcons, footerOptions } from '../../public/data';

const Footer = () => {
	return (
		<footer className="">
			<div className="bg-bgFooterMobile md:bg-bgFooterDesktop bg-Primary-darkViolet px-6 py-20 space-y-6 items-center justify-center flex flex-col">
				<div className="text-white font-bold text-2xl">
					Boost your links today
				</div>
				<button className="text-white bg-Primary-cyan px-10 font-medium py-2.5 rounded-full">
					Get Started
				</button>
			</div>
			<div className="footerLinks">
				<h1 className="font-bold text-3xl md:mt-7">Shortly</h1>
				{footerOptions.map((footerLinks) => (
					<div key={footerLinks.id} className="text-center md:text-justify">
						<h2 className="font-semibold text-lg pb-4">{footerLinks.title}</h2>
						<ul className="text-Neutral-Grayish_Violet font-medium space-y-2.5">
							<li className="hover:opacity-85">
								<a href="#">{footerLinks.navLinks.link1}</a>
							</li>
							<li className="hover:opacity-85">
								<a href="#">{footerLinks.navLinks.link2}</a>
							</li>
							<li className="hover:opacity-85">
								<a href="#">{footerLinks.navLinks.link3}</a>
							</li>
							<li className="hover:opacity-85">
								<a href="#">{footerLinks.navLinks.link4}</a>
							</li>
						</ul>
					</div>
				))}
				<div className="flex space-x-6 md:flex-row">
					{footerIcons.map((footer) => (
						<div key={footer.id} className="md:mt-2">
							<a href={footer.link} className="hover:opacity-75">
								<img src={footer.icon} alt="" />
							</a>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
