interface Props {
	title: string;
}

export const Heading = ({ title }: Props) => {
	return (
		<p className="md:text-5xl text-2xl font-bold md:leading-12 leading-4 text-theme-accent font-ultra">
			{title}
		</p>
	);
};
