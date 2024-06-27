// Type for Stats
interface advanceStatsTypes {
	id: number;
	title: string;
	avatar: string;
	details: string;
}

// type for the Footer Links
interface footerOptions {
	id: number;
	title: string;
	navLinks: {
		link1: string;
		link2: string;
		link3: string;
		link4?: string;
	};
}

//FooterIcons
type footerIcons = {
	id: number;
	icon: string;
	link: string;
};

export const advancedStats: advanceStatsTypes[] = [
	{
		id: 1,
		title: 'Brand Recognition',
		avatar: '/icon-brand-recognition.svg',
		details:
			'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
	},
	{
		id: 2,
		title: 'Detailed Records',
		avatar: '/icon-detailed-records.svg',
		details:
			'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
	},
	{
		id: 3,
		title: 'Fully Customizable',
		avatar: '/icon-fully-customizable.svg',
		details:
			'Fully Customizable Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
	},
];

export const footerOptions: footerOptions[] = [
	{
		id: 1,
		title: 'Features',
		navLinks: {
			link1: 'Link Shortening',
			link2: 'Branded Links',
			link3: 'Analytics',
		},
	},
	{
		id: 2,
		title: 'Resources',
		navLinks: {
			link1: 'Blog',
			link2: 'Developers',
			link3: 'Support',
		},
	},
	{
		id: 3,
		title: 'Company',
		navLinks: {
			link1: 'About',
			link2: 'Our Team',
			link3: 'Careers',
			link4: 'Contact',
		},
	},
];

export const footerIcons: footerIcons[] = [
	{
		id: 1,
		icon: '/icon-facebook.svg',
		link: 'http://www.facebook.com',
	},
	{
		id: 2,
		icon: '/icon-twitter.svg',
		link: 'http://www.twitter.com',
	},
	{
		id: 3,
		icon: '/icon-pinterest.svg',
		link: 'http://www.pinterest.com',
	},
	{
		id: 4,
		icon: '/icon-instagram.svg',
		link: 'http://www.instagram.',
	},
];
