import React from "react";
import {PureComponent, Component} from "react";
import "./style.css";

interface IRegistrationPanelProps {
    switcher: () => void
}

class RegistrationPanel extends PureComponent<IRegistrationPanelProps>{
    render(): React.ReactNode {
        return(
            <div className="RegAuth">
                <div className="containerRegAuth">
                    <p className="reg_main">REGISTRATION</p>
                    <p>set and remember your login and password</p>
                    <form>
                        <div>
                            <label>login <input type="text" required /></label>
                            <label>password <input type="password" required /></label>
                        </div>
                        <button type="submit">OK</button>
                    </form>
                    <p className="login" onClick={this.props.switcher}>LOG IN</p>
                </div>
            </div>
        );
    }
}

export default RegistrationPanel;