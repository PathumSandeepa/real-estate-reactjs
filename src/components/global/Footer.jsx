import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    return (
        <footer className="bg-light text-center p-3 mt-4">
            <p>©{new Date().getFullYear()} FindMyHome. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
