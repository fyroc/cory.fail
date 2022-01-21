interface Props {
	text: string;
	link: string;
	selected: boolean;
}

export const NavItem = ({ text, link, selected }: Props) => {
	return (
		<a
			href={link}
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
		</a>
	);
};
