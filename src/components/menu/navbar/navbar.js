import "./navbar.css";
import bootstrap from "bootstrap";
const { Component } = require("react");

class NavBar extends Component {

    render() {
        return <div class="Nav">
            <img class="left img-fluid" src="../public/assets/ALKYA_ASSETS/Logos/Logo_Colored_PNG.png" alt="ALKYA's Logo Colored" width="30" height="30" />
            <div class="row">
                <div class="col s12 m6 l3">
                    <div class="hstack gap-12">
                        <button type="button" class="btn btn-primary">ACTUS</button>
                        <button type="button" class="btn btn-primary">ABOUT US</button>
                        <button type="button" class="btn btn-primary">ÉQUIPES</button>
                    </div>
                </div>

            </div>
        </div>
    }
}

export default NavBar;