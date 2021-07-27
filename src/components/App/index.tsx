import React from 'react';
import './GalleryPage/style.css';
import {PureComponent, Component} from "react";
import GalleryPage from "./GalleryPage";
import AuthRegPage from "./AuthRegPage";

class App extends PureComponent{

    render(): React.ReactNode {
        return (
            <div className="justdiv">
                <AuthRegPage />
                {/*<GalleryPage />*/}
            </div>
        );
    }
}

export default App;
