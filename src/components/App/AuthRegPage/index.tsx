import React from "react";
import {PureComponent, Component} from "react";
import LogInPanel from "./LogInPanel";
import RegistrationPanel from "./RegistrationPanel";
import Api from "../../../Api";

interface IAuthRegPageState {
    signIn: boolean;
}

interface IAuthRegPageProps {
    signIn: (login:string, password:string) => Promise<void>;
    api: Api;
}

class AuthRegPage extends PureComponent<IAuthRegPageProps, IAuthRegPageState>{

    state = {
        signIn: true
    }

    render(): React.ReactNode {
        return (
            <div className="justdiv">
                {this.state.signIn
                    ? <LogInPanel signIn={this.props.signIn} switcher={this.switchAuthReg} />
                    : <RegistrationPanel signUp={this.signUp} switcher={this.switchAuthReg} />}
            </div>
        );
    }

    private signUp = async (login:string, password:string):Promise<void> => {
        try {
            await this.props.api.signUp(login, password);
            this.switchAuthReg();
        } catch (e) {
            console.error(e)
            alert(`${e}`);
        }

    }

    private switchAuthReg = () => {
        this.setState({
                signIn: !this.state.signIn,
            }
        )
    }

}

export default AuthRegPage;