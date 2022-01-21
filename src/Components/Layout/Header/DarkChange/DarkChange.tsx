import { useState } from 'react';

export const DarkChange = () => {
	const [darkMode, setDarkMode] = useState<boolean>(true);

	const handleClick = (e: any) => {
		e.preventDefault();
		setDarkMode(!darkMode);

		if (darkMode) {
			document
				.getElementById('main_html')
				?.classList.remove('dark');
		} else {
			document
				.getElementById('main_html')
				?.classList.add('dark');
		}
	};

	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<a
			href=""
			onClick={handleClick}
			className="dark:text-theme-light text-theme-dark hover:bg-theme-primary hover:text-theme-secondary px-2 py-2 font-medium text-md rounded-md"
		>
			<i className={`fas fa-${darkMode ? 'sun' : 'moon'}`}></i>
		</a>
	);
};
