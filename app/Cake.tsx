import * as React from "react";

interface CakeProps {
    id?: string;
    name: string;
    description?: string;
    date?: Date;
    imageURL?: string;
}

interface CakeState {
    draggedOver: boolean;
}

class Cake extends React.Component<CakeProps, CakeState> {
    constructor(props: CakeProps) {
        super(props);

        this.handleDragEnter = this.handleDragEnter.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.createImagePreview = this.createImagePreview.bind(this);

        this.state = {
            draggedOver: false
        };
    }

    refs: {
        [string: string]: any;
    }

    handleDragEnter(e: DragEvent) {
        this.setState({ draggedOver: true });
    }

    handleDragLeave(e: DragEvent) {
        this.setState({ draggedOver: false });
    }

    handleDragEnd(e: DragEvent) {
        this.handleDragLeave(e);
    }

    handleDrop(e: DragEvent) {        
        e.preventDefault();

        this.setState({ draggedOver: false });

        var files: FileList;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        }         

        if (files[0]) {
            this.createImagePreview(files[0]);
        }       
    }

    createImagePreview(file: Blob) {
        const reader = new FileReader();

        reader.onloadend = function(e: any) {
            // console.log("image?", e.target.result);
            this.refs.cakePicture.style["backgroundImage"] = `url(${e.target.result})`;
            console.log(this.refs.cakePicture.style.backgroundImage);
        }.bind(this);
        reader.readAsDataURL(file);            
    }

    render() {
        let classNames = "cake" + (this.state.draggedOver ? " cake-dragged-over" : "");

        return (
            <div ref="cake" className={classNames}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
                onDragEnd={this.handleDragEnd}
                onDrop={this.handleDrop}>
                <div ref="cakePicture" className="cake-picture"></div>
                <div className="cake-name">{this.props.name}</div>
                <div className="cake-date">{this.props.date.toDateString()}</div>
            </div>
        );
    }
}

export {
    CakeProps,
    Cake
};