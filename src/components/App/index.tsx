import React from 'react';
import './GalleryPage/style.css';
import {PureComponent, Component} from "react";
import GalleryPage from "./GalleryPage";
import AuthRegPage from "./AuthRegPage";
import Api from "../../Api";

interface IAppState {
    isAuthorized: boolean;
}

interface IAppProps {
    api: Api;
}

class App extends PureComponent<IAppProps, IAppState>{

    state = {
        isAuthorized: false
    }

    render(): React.ReactNode {
        console.log(this.state);
        return (
            <div className="justdiv">
                {!this.state.isAuthorized
                    ? <AuthRegPage api={this.props.api} signIn={this.signIn} />
                    : <GalleryPage api={this.props.api} />}
            </div>
        );
    }

    private signIn = async (login:string, password:string):Promise<void> => {
        try{
            await this.props.api.signIn(login, password);
            this.setState({
                isAuthorized: true,
            });
        } catch (e) {
            console.error(e)
            alert('Authorisation Error. Check your login and password. ' +
                    'If this is your first time, click "REGISTRATION"');
        }

    }


}

export default App;
