import * as React from "react";
import * as ReactDOM from "react-dom";

interface CakeProps extends React.Props<any> {
    name: string;
    description?: string;
    date?: Date;
}

interface CakeListProps extends React.Props<any> {
    cakes: CakeProps[];
}

class CakeComponent extends React.Component<CakeProps, {}> {
    render() {
        return (
            <div>
                {this.props.name} ({this.props.date.toDateString()})
            </div>
        )
    }
}

class CakeListComponent extends React.Component<CakeListProps, void> {
    render() {
        const cakes = this.props.cakes.sort((a, b) => a.date > b.date ? -1 : 1);
        return (
            <div>
                {cakes.map(cake => <CakeComponent {...cake} />)}
            </div>
        );
    }
}

export {
    CakeListProps,
    CakeListComponent
};