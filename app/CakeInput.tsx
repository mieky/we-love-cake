import * as React from "react";

class CakeInput extends React.Component<any, void> {
    constructor(props: React.Props<any>) {
        super(props);

        // Required because of the ES6 class syntax decifiency
        this.onSubmit = this.onSubmit.bind(this);
    } 

    refs: {
        [string: string]: any;
        cakeName: any;
    }

    onSubmit(e: Event) {
        e.preventDefault();
        
        const newCake = {
            name: this.refs.cakeName.value,
            description: "",
            date: new Date()
        };

        // Propagate to external handler
        this.props.onSubmit(newCake);
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

export default CakeInput;
