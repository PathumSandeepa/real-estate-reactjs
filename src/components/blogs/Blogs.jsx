import { Link } from "react-router-dom";
import blogsData from "../../data/blogsData.json";
const { blogs } = blogsData;

function Blogs() {
    return (
        <div className="container py-5">
            <h2 className="mb-4 text-center">Property Blogs</h2>
            <div className="row">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="col-md-4 d-flex align-items-stretch mb-4"
                    >
                        <Link
                            to={`/blogs/${blog.id}`}
                            className="text-decoration-none text-dark w-100"
                        >
                            <div
                                className="card shadow-sm h-100"
                                style={{ transition: "transform 0.2s" }}
                            >
                                <img
                                    src={blog.image}
                                    className="card-img-top"
                                    alt={blog.title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{blog.title}</h5>
                                    <p className="card-text">
                                        {blog.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blogs;
