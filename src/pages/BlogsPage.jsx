import Navbar from "../components/global/Navbar.jsx";
import Blogs from "../components/blogs/Blogs.jsx";
import Footer from "../components/global/Footer.jsx";

function BlogsPage() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div className="flex-grow-1">
                <Blogs />
            </div>
            <Footer />
        </div>
    );
}

export default BlogsPage;
