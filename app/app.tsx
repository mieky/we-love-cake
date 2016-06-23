/// <reference path="../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";

interface GreeterProps extends React.Props<any> {
    text: string;
}

class GreeterComponent extends React.Component<GreeterProps, {}> {
    render() {
        return <div>Hello {this.props.text}!</div>
    }
}

ReactDOM.render(<GreeterComponent text="Cake lover" />,
    document.getElementById("content"));
