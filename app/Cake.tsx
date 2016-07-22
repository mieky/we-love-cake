import * as React from "react";

interface CakeProps {
    name: string;
    description?: string;
    date?: Date;
    imageURL?: string;
}

class Cake extends React.Component<CakeProps, void> {
    render() {
        return (
            <div className="cake">
                <div className="cake-picture"></div>
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