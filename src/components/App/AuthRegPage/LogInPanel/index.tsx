import React from "react";
import {PureComponent, Component} from "react";
import './style.css';

class LogInPanel extends PureComponent{
    render(): React.ReactNode {
        return(
            <div className="RegAuth">
                <div className="containerRegAuth">
                    <p className="login">LOG IN</p>
                    <p>enter your login and password</p>
                    <form>
                        <div>
                            <label>login <input type="text" required /></label>
                            <label>password <input type="password" required /></label>
                        </div>
                        <button type="submit">OK</button>
                    </form>
                    <p className="reg">REGISTRATION</p>
                </div>
            </div>
        );
    }
}

export default LogInPanel;