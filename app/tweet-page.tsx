import { Tweet } from "react-tweet";

const TweetPage = ({
	tweet,
}: {
	tweet: {
		id: string;
		text: string;
		user: { name: string; handle: string };
		createdAt: string;
	};
}) => {
	return <Tweet {...tweet} />;
};

export default TweetPage;
