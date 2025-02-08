import Post from "../Post/Post";
import { PostInfo } from "../types/post";

interface props {
  PostList: PostInfo[];
}

function PostList({ PostList }: props) {
  return (
    <div className="p-5 flex flex-col gap-4">
      {PostList.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          content={post.content}
          author={post.author}
          isPoster={post.isPoster}
          isAdmin={post.isAdmin}
          hidden={post.hidden}
          id={post.id}
        />
      ))}
    </div>
  );
}
export default PostList;
