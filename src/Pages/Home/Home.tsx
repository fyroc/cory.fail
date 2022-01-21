import { Heading } from '../../Components/Typography/Heading/Heading';
import pixelImage from '../../Components/Pages/Home/Px55.png';
import { Paragraph } from '../../Components/Typography/Paragraph/Paragraph';

function Home() {
	return (
		<div className="py-8 flex items-stretch justify-center w-full">
			<div className="w-2/3 md:pr-5 md:pt-0">
				<div className="">
					<Heading title="I build things." />
					<Paragraph>
						I've been a Software Engineer for over 10
						years, and I love it. I can do just about
						anything. I can do web, desktop, and cloud
						applications. I also do both backend and
						frontend development.
					</Paragraph>
					<Paragraph>
						My favorite thing, and what I find most
						rewarding, is leading a team of developers to
						create a modern application using modern
						techniques and practices.
					</Paragraph>
				</div>
			</div>
			<div className="w-1/3 overflow-hidden relative rounded-md">
				<img src={pixelImage} alt="img" className="w-full" />
			</div>
		</div>
	);
}

export default Home;
