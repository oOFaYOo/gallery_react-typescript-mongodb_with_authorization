import React from "react";
import {PureComponent, Component} from "react";
import LogInPanel from "./LogInPanel";
import RegistrationPanel from "./RegistrationPanel";

interface IAuthRegPageState {
    isOpenAuth: boolean;
    isOpenReg: boolean;
}

interface IAuthRegPageProps {

}

class AuthRegPage extends PureComponent<IAuthRegPageProps, IAuthRegPageState>{

    state = {
        isOpenAuth: true,
        isOpenReg: false
    }

    render(): React.ReactNode {
        return (
            <div className="justdiv">
                {this.state.isOpenAuth?<LogInPanel switcher={this.switchAuthReg} />:null}
                {this.state.isOpenReg?<RegistrationPanel switcher={this.switchAuthReg} />:null}
            </div>
        );
    }

    private switchAuthReg = () => {
        this.setState({
                isOpenAuth: !this.state.isOpenAuth,
                isOpenReg: !this.state.isOpenReg
            }
        )
    }

}

export default AuthRegPage;