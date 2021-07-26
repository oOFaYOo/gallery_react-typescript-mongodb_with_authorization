import React from "react";
import {PureComponent, Component} from "react";
import "./style.css";

class RegistrationPanel extends PureComponent{
    render(): React.ReactNode {
        return(
            <div className="RegAuth">
                <div className="containerRegAuth">
                    <p className="reg">REGISTRATION</p>
                    <p>set and remember your login and password</p>
                    <form>
                        <div>
                            <label>login <input type="text" required /></label>
                            <label>password <input type="password" required /></label>
                        </div>
                        <button type="submit">OK</button>
                    </form>
                    <p className="login">LOG IN</p>
                </div>
            </div>
        );
    }
}

export default RegistrationPanel;