import * as React from "react";

interface CakeInputState {
    open: boolean;
    value: string;
}

class CakeInput extends React.Component<any, CakeInputState> {
    constructor(props: Object) {
        super(props);

        // Rebindings required because of the ES6 class syntax decifiency
        this.onSubmit = this.onSubmit.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
        this.updateState = this.updateState.bind(this);

        this.state = {
            open: false,
            value: ""
        };
    }

    refs: {
        [string: string]: any;
        cakeName: any;
    }

    componentDidUpdate() {
        if (this.state.open) {
            this.refs.cakeName.focus();
        }
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
        this.setState({
            open: false,
            value: ""
        }); 
    }

    toggleOpen(e: Event) {
        this.setState({
            open: !this.state.open,
            value: this.state.value
        });
    }

    updateState(e: Event) {
        const newValue = this.refs.cakeName.value;
        this.setState({
            open: this.state.open,
            value: newValue
        });
    }

    render() {
        let content: JSX.Element = null;

        if (this.state.open) {
            content = <div>
                <div className="cake-input-details">
                    <input className="cake-input-text"
                        type="text"
                        ref="cakeName"
                        onChange={this.updateState}
                        value={this.state.value}
                        placeholder="what was the cake called?" />
                </div>
                <a href="#" onClick={this.toggleOpen}>hmm, maybe later...</a>
            </div>; 
        } else {
            content = <a href="#" onClick={this.toggleOpen}>just had cake? let's add it!</a>;
        }

        return <form className="cake-input" onSubmit={this.onSubmit}>
            {content}
        </form>;
    }
}

export default CakeInput;
