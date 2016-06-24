import * as React from "react";
import * as ReactDOM from "react-dom";

interface CakeProps extends React.Props<any> {
    name: string;
    description?: string;
    date?: Date;
}

class CakeComponent extends React.Component<CakeProps, {}> {
    render() {
        return (
            <div>
            {this.props.name} ({this.props.date.toTimeString()})
            </div>
        )
    }
}

class CakeListComponent extends React.Component<{}, {}> {
    render() {
        return <div>cake list</div>
    }
}

export { CakeProps, CakeComponent };