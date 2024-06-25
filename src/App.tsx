import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ShortnenUrl from './components/ShortnenUrl';

const App = () => (
	<>
		<div className="overflow-hidden">
			<Navbar />
			<HeroSection />
			<ShortnenUrl />
		</div>
	</>
);

export default App;
