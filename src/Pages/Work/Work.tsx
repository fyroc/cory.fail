import { Paragraph } from '../../Components/Typography/Paragraph/Paragraph';
import { GitHubButton } from '../../Components/Buttons/GitHubButton'
import { Heading } from '../../Components/Typography/Heading/Heading';

export const Work = () => {
	return <div>
        <Heading title="My Work" />
        <Paragraph>
            Nothing to see now, but feel free to view my <GitHubButton />
        </Paragraph>
        <Paragraph>
            You can even see how I built this React app.
        </Paragraph>
    </div>;
};