import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { Header } from './Components/Layout/Header/Header';

export const Layout = () => {
	return (
		<>
			<div className="bg-theme-accent h-1"></div>
			<div className="container mx-auto">
				<Header />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
					<div className="max-w-3xl mx-auto">
						<HashRouter>
							<Routes>
								<Route path="/" element={<Home />} />
							</Routes>
						</HashRouter>
					</div>
				</div>
			</div>
		</>
	);
};
