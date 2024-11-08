import { PostForm } from "./_components/PostForm";
import { PostList } from "./_components/PostList";

export const revalidate = 86400;

const Page = async () => {
	return (
		<div>
			<PostForm />
			<h1>投稿一覧</h1>
			<PostList />
		</div>
	);
};

export default Page;
