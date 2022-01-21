import { Navbar } from './Navbar/Navbar';
import { DarkChange } from './DarkChange/DarkChange';

export const Header = () => {
	return (
		<>
			<header className="sticky top-0 z-50 flex flex-row py-10">
				<div className="flex-none w-14"></div>
				<div className="grow flex items-center justify-center">
					<Navbar />
				</div>
				<div className="flex-none w-14">
					<DarkChange />
				</div>
			</header>
		</>
	);
};
