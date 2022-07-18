import "./styles.css"

function Social(props) {
    return (
        <div id="social-information">
            <h1>{props.children}</h1>
            <div id="information">
                <div class="row">
                    <div class="logo">
                        <div>
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="info">
                        <div>
                            daniel.silva
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="logo">
                        <div>
                            <i class="fa fa-facebook-f"></i>
                        </div>
                    </div>
                    <div class="info">
                        <div>
                            daniel.silva24
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="logo">
                        <div>
                            <i class="fa fa-twitter"></i>
                        </div>
                    </div>
                    <div class="info">
                        <div>
                            @daniel.silva32
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="logo">
                        <div>
                            <i class="fa fa-instagram"></i>
                        </div>
                    </div>
                    <div class="info">
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