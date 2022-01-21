interface Props {
	children: React.ReactNode;
}

export const Paragraph = ({ children }: Props) => {
	return (
		<p className="md:text-xl text-base md:pt-8 pt-4 leading-normal text-theme-dark dark:text-theme-light sm:block">
			{children}
		</p>
	);
};
