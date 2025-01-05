import { useParams, Link } from "react-router-dom";
import blogsData from "../../data/blogsData.json";

function BlogContent() {
    const { id } = useParams();
    const blog = blogsData.blogs.find((item) => item.id === parseInt(id));

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <Link
                        to="/blogs"
                        className="btn btn-outline-secondary mb-4"
                        style={{ width: "fit-content" }}
                    >
                        ← Back to Blogs
                    </Link>

                    <h1
                        className="display-4 mb-4"
                        style={{ fontWeight: "600" }}
                    >
                        {blog.title}
                    </h1>

                    <div
                        className="blog-content"
                        style={{
                            lineHeight: "1.8",
                            fontSize: "1.1rem",
                        }}
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </div>
            </div>
        </div>
    );
}

export default BlogContent;
