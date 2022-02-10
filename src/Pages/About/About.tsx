import { Paragraph } from '../../Components/Typography/Paragraph/Paragraph';
import { Heading } from '../../Components/Typography/Heading/Heading';

export const About = () => {
	return <div>
		<Heading title="Who I am" />
        <Paragraph>
            I'm a Software Engineer with over 12 years of experience that loves testing, and also learning new design patterns.
			My primary focus is to be able to create development design practices and principles.
			A good developer should be able to write beautiful and well tested code, no matter the language.
        </Paragraph>
		<Paragraph>{''}</Paragraph>
        <Heading title="What I like" />
        <Paragraph>
            I really enjoy working with the Film and Music industry. I specifically specialize in video and audio streaming services.
			I've done everything from creating automated stream publishing platforms with RTMP to creating video services for commercial drone pilots.
        </Paragraph>
    </div>;
};