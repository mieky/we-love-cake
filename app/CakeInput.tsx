import * as React from "react";

interface CakeInputState {
    value: string;
}

class CakeInput extends React.Component<any, CakeInputState> {
    constructor(props: React.Props<any>) {
        super(props);

        // Rebindings required because of the ES6 class syntax decifiency
        this.onSubmit = this.onSubmit.bind(this);
        this.updateState = this.updateState.bind(this);
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

        // Equally valid for this use case, but less React-kosher would have been simply to this.refs.cakeName.value = "";
        this.setState({ value: "" }); 
    }

    updateState(e: Event) {
        const newValue = this.refs.cakeName.value;
        this.setState({ value: newValue });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3>New cake</h3>
                <input ref="cakeName" type="text" onChange={this.updateState} value={this.state.value} placeholder="Cake name" />
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default CakeInput;
