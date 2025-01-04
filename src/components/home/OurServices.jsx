import "bootstrap/dist/css/bootstrap.min.css";

function OurServices() {
    return (
        <section className="container my-5">
            <h2 className="mb-4">Our Services</h2>
            <div className="row">
                {/* First row of cards */}
                <div className="col-md-4 mb-3">
                    <div className="card p-3">
                        <h5>Service 1</h5>
                        <p>Dummy text for service description.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card p-3">
                        <h5>Service 2</h5>
                        <p>Dummy text for service description.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card p-3">
                        <h5>Service 3</h5>
                        <p>Dummy text for service description.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                {/* Second row of cards */}
                <div className="col-md-4 mb-3">
                    <div className="card p-3">
                        <h5>Service 4</h5>
                        <p>Dummy text for service description.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card p-3">
                        <h5>Service 5</h5>
                        <p>Dummy text for service description.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card p-3">
                        <h5>Service 6</h5>
                        <p>Dummy text for service description.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurServices;
