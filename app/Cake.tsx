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

class Cake extends React.Component<CakeProps, void> {
    render() {
        return (
            <div>
                {this.props.name} ({this.props.date.toDateString()})
            </div>
        );
    }
}

class CakeList extends React.Component<CakeListProps, void> {
    render() {
        const cakes = this.props.cakes.sort((a, b) => a.date > b.date ? -1 : 1);
        return (
            <div>
                <h3>Hall of cake fame</h3>
                <ul>
                    {cakes.map(cake => <li>
                        <Cake key={cake.name} {...cake} />
                    </li>)}
                </ul>
            </div>
        );
    }
}

class CakeInput extends React.Component<any, void> {
    constructor(props: React.Props<any>) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    } 

    refs: {
        [string: string]: any;
        cakeName: any;
    }

    onSubmit(e: Event) {
        e.preventDefault();

        console.log("TODO: add new cake", this.refs.cakeName.value);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3>New cake</h3>
                <input ref="cakeName" type="text" defaultValue="" placeholder="Cake name" />
                <button type="submit">Add</button>
            </form>
        );
    }
}

export {
    CakeProps,
    CakeListProps,
    CakeList,
    CakeInput
};