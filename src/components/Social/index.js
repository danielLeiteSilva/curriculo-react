import "./styles.css"

function Social(props) {
    return (
        <div id="social-information">
            <h1>{props.children}</h1>
            <div id="information">
                <div className="row">
                    <div className="logo">
                        <div>
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="info">
                        <div>
                            daniel.silva
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="logo">
                        <div>
                            <i className="fa fa-facebook-f"></i>
                        </div>
                    </div>
                    <div className="info">
                        <div>
                            daniel.silva24
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="logo">
                        <div>
                            <i className="fa fa-twitter"></i>
                        </div>
                    </div>
                    <div className="info">
                        <div>
                            @daniel.silva32
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="logo">
                        <div>
                            <i className="fa fa-instagram"></i>
                        </div>
                    </div>
                    <div className="info">
                        <div>
                            @daniel.silva24
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social