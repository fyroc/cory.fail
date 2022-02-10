import { NavItem } from './NavItem/NavItem';

export const Navbar = () => {
	return (
		<div className="">
			<nav className="flex space-x-4" aria-label="Tabs">
				<NavItem text="Home" route="/" />
				<NavItem
					text="About"
					route="/about"
				/>
				<NavItem text="My Work" route="/work" />
			</nav>
		</div>
	);
};
