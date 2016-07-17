import * as React from "react";

interface CakeInputState {
    value: string;
}

class CakeInput extends React.Component<any, CakeInputState> {
    constructor(props: React.Props<any>) {
        super(props);

        // Required because of the ES6 class syntax decifiency
        this.onSubmit = this.onSubmit.bind(this);
        this.state = { value: "" };
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

        // State didn't for some reason propagate correctly to the input's default value,
        // so clearing the input field directly for now
        this.refs.cakeName.value = "";
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3>New cake</h3>
                <input ref="cakeName" type="text" placeholder="Cake name" />
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default CakeInput;
