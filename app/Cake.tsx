import * as React from "react";

interface CakeProps {
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

        this.state = {
            draggedOver: false
        };
    }

    refs: {
        [string: string]: any;
        cakePicture: any;
    }

    handleDragEnter(e: DragEvent) {
        this.setState({ draggedOver: true });
    }

    handleDragLeave(e: DragEvent) {
        this.setState({ draggedOver: false });
    }

    handleDragEnd(e: DragEvent) {
        e.stopPropagation();
        e.preventDefault();
        console.log("dragend");
    }

    handleDrop(e: any) {        
        e.preventDefault();        

        console.log("drop", e);         
    }

    render() {
        let classNames = "cake" + (this.state.draggedOver ? " cake-dragged-over" : "");

        return (
            <div className={classNames}
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