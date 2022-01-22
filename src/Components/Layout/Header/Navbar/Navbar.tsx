import { NavItem } from './NavItem/NavItem';

interface Props {}

export const Navbar = (props: Props) => {
	return (
		<div className="">
			<nav className="flex space-x-4" aria-label="Tabs">
				<NavItem text="Home" route="/" selected={false} />
				<NavItem
					text="About"
					route="/about"
					selected={false}
				/>
				<NavItem text="My Work" route="/" selected={false} />
			</nav>
		</div>
	);
};
