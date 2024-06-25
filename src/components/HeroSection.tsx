import heroImage from '../assets/images/illustration-working.svg';

const HeroSection = () => (
	<section className="md:grid md:grid-flow-col md:py-32">
		<div className="order-2">
			<img
				src={heroImage}
				alt={heroImage}
				className="scale-125 md:scale-150 md:ml-4 ml-16 mt-6 md:mt-0"
			/>
		</div>
		<div className="order-1 space-y-5 text-center md:text-justify px-5 md:w-3/4 md:pl-24">
			<h1 className="text-4xl md:text-5xl pt-14 font-bold text-Primary-darkViolet">
				More than just
				<br />
				shorter links
			</h1>
			<p className="text-Neutral-Grayish_Violet font-medium">
				Build your brand's recognition and get detailed insights on how your
				links are performing.
			</p>
			<button className="bg-Primary-cyan px-8 py-2.5 rounded-full font-medium text-white hover:bg-opacity-85">
				Get Started
			</button>
		</div>
	</section>
);

export default HeroSection;
