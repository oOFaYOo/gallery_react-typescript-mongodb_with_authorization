import React, {FormEvent} from "react";
import {PureComponent, Component} from "react";
import './style.css';

interface ILogInPanelProps {
    switcher: () => void;
    signIn: (login:string, password:string) => Promise<void>;
}

class LogInPanel extends PureComponent<ILogInPanelProps>{
    render(): React.ReactNode {
        return(
            <div className="RegAuth">
                <div className="containerRegAuth">
                    <p className="login_main">LOG IN</p>
                    <p>enter your login and password</p>
                    <form onSubmit={(e:FormEvent<HTMLFormElement>)=>{
                        this.props.signIn((e.currentTarget.elements.namedItem("login") as HTMLInputElement).value,
                            (e.currentTarget.elements.namedItem("password") as HTMLInputElement).value);
                            e.preventDefault();
                        }
                    }>
                        <div>
                            <label>login <input type="text" name="login" required /></label>
                            <label>password <input type="password" name="password" required /></label>
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