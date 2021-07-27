import React from "react";
import {PureComponent, Component} from "react";
import './style.css';

interface ILogInPanelProps {
    switcher: () => void
}

class LogInPanel extends PureComponent<ILogInPanelProps>{
    render(): React.ReactNode {
        return(
            <div className="RegAuth">
                <div className="containerRegAuth">
                    <p className="login_main">LOG IN</p>
                    <p>enter your login and password</p>
                    <form>
                        <div>
                            <label>login <input type="text" required /></label>
                            <label>password <input type="password" required /></label>
                        </div>
                        <button type="submit">OK</button>
                    </form>
                    <p className="reg" onClick={this.props.switcher}>REGISTRATION</p>
                </div>
            </div>
        );
    }
}

export default LogInPanel;