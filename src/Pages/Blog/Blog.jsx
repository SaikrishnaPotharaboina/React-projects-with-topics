import "./styles.css";
import postsData from "./postsData";
import PostCard from "./PostCard";

export default function BlogPosts() {
    return (
        <div className="main-container">
            <h2>Blog Posts</h2>

            <div className="post-grid">
                {postsData.map((post) => (
                    <PostCard key={post.id} {...post} />
                ))}
            </div>
        </div>
    );
}
