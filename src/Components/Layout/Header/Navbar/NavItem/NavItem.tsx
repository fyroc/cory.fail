import { Link, To } from 'react-router-dom';

interface Props {
	text: string;
	route: To;
	selected: boolean;
}

export const NavItem = ({ text, route, selected }: Props) => {
	return (
		<Link to={route}>
			<button
				className="
                dark:text-theme-light
                text-theme-dark
                hover:text-theme-secondary
                bg-theme-light
                dark:bg-theme-dark
                dark:hover:bg-theme-primary
                hover:bg-theme-primary
                px-2 py-2
                font-medium
                text-sm
                rounded-md
            "
			>
				{text}
			</button>
		</Link>
	);
};
