import { NavItem } from './NavItem/NavItem';

interface Props {}

export const Navbar = (props: Props) => {
	return (
		<div className="">
			<nav className="flex space-x-4" aria-label="Tabs">
				<NavItem text="Home" link="#" selected={false} />
				<NavItem text="About" link="#" selected={false} />
				<NavItem text="My Work" link="#" selected={false} />
			</nav>
		</div>
	);
};
