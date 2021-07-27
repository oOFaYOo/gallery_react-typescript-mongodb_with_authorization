import React from 'react';
import {PureComponent, Component} from "react";
import CentralArea from "./CentralArea";
import SidePanel from "./SidePanel";
import Api from "../../../Api";
import "./style.css";

interface IGalleryPageState {
    isOpenUpload: boolean;
}

interface IProps {

}

class GalleryPage extends PureComponent<IProps, IGalleryPageState>{

    state = {
        isOpenUpload:false
    }

    render(): React.ReactNode {
        return (
            <div className="justdiv">
                <SidePanel openUpload={this.openUploadHandler} />
                <CentralArea closeUpload={this.closeUploadHandler} isOpenUpload={this.state.isOpenUpload} api={new Api()}/>
            </div>
        );
    }

    private openUploadHandler = () => {
        this.setState({
            isOpenUpload:true
        })
    }

    private closeUploadHandler = () => {
        this.setState({
            isOpenUpload:false
        })
    }
}

export default GalleryPage;