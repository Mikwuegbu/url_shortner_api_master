import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import openToggle from '../assets/images/toggleOpen.png';
import closeToggle from '../assets/images/toggleClose.png';

const Navbar = () => {
	const [toggle, setToggle] = useState<boolean>(false);

	const handleNavbar = (): boolean => {
		setToggle(!toggle);
		return toggle;
	};

	return (
		<nav className="flex justify-between px-5 md:px-12 lg:px-24 py-8">
			<div className="flex space-x-14">
				<a href="#">
					<img
						src={logo}
						alt=""
						className="bg-Neutral-Very Dark Violet min-w-28"
					/>
				</a>
				<ul className="lg:flex space-x-8 content-center place-items-center font-medium text-Neutral-Gray hidden">
					<li>
						<a href="#">Features</a>
					</li>
					<li>
						<a href="#">Pricing</a>
					</li>
					<li>
						<a href="#">Resources</a>
					</li>
				</ul>
			</div>
			<div className="lg:flex font-medium space-x-4 hidden">
				<button className="text-Neutral-Gray px-4">Login</button>
				<button className="bg-Primary-cyan px-8 py-1.5 rounded-full text-white text-nowrap">
					Sign Up
				</button>
			</div>
			<button className="lg:hidden" onClick={handleNavbar}>
				<img
					src={toggle == false ? openToggle : closeToggle}
					alt=""
					className="w-6 h-6 md:w-10 md:h-10"
				/>
			</button>
			<div
				className={`${
					toggle == false
						? 'hidden'
						: 'absolute top-12 left-0 right-0 bottom-10 mt-2'
				}`}
			>
				<ul className="navItems">
					<li>
						<a href="#" className="hover:text-Neutral-Gray">
							Features
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-Neutral-Gray">
							Pricing
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-Neutral-Gray">
							Resources
						</a>
					</li>
					<li className="px-4">
						<hr />
					</li>
					<li>
						<a href="#" className="hover:text-Neutral-Gray">
							Login
						</a>
					</li>
					<li className="">
						<button className="bg-Primary-cyan px-14 py-2.5 rounded-full hover:bg-opacity-85">
							Sign Up
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
