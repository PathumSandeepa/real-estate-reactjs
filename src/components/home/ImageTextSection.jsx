import "bootstrap/dist/css/bootstrap.min.css";

function ImageTextSection() {
    return (
        <section className="container my-5">
            <div className="row align-items-center">
                <div className="col-md-6 mb-3">
                    <h2>About Our Platform</h2>
                    <p>
                        Dummy text describing the platform. This can be
                        customized for real content.
                    </p>
                </div>
                <div className="col-md-6">
                    <img
                        src="https://via.placeholder.com/600x400"
                        alt="Sample"
                        className="img-fluid rounded"
                    />
                </div>
            </div>
        </section>
    );
}

export default ImageTextSection;
