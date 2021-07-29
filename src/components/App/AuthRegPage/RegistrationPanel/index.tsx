import React, {FormEvent} from "react";
import {PureComponent, Component} from "react";
import "./style.css";

interface IRegistrationPanelProps {
    switcher: () => void;
    signUp: (login:string, password:string) => Promise<void>;
}

class RegistrationPanel extends PureComponent<IRegistrationPanelProps>{
    render(): React.ReactNode {
        return(
            <div className="RegAuth">
                <div className="containerRegAuth">
                    <p className="reg_main">REGISTRATION</p>
                    <p>set and remember your login and password</p>
                    <form onSubmit={(e:FormEvent<HTMLFormElement>)=>{
                        this.props.signUp(
                        (e.currentTarget.elements.namedItem("login") as HTMLInputElement).value,
                         (e.currentTarget.elements.namedItem("password") as HTMLInputElement).value);
                        e.preventDefault();
                    }}>
                        <div>
                            <label>login <input type="text" name="login" required/></label>
                            <label>password <input type="password" name="password" required /></label>
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