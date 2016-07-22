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
        this.checkIfCanceledByKeypress = this.checkIfCanceledByKeypress.bind(this); 

        this.state = {
            open: false,
            value: ""
        };
    }

    refs: {
        [string: string]: any;
        cakeName: any;
    }

    checkIfCanceledByKeypress(e: KeyboardEvent) {
        // Allow canceling by esc key
        if (e.keyCode === 27) {
            this.toggleOpen(e);
        }
    }

    onSubmit(e: Event) {
        e.preventDefault();
        
        const newCake = {
            name: this.refs.cakeName.value,
            description: "",
            date: new Date()
        };

        // Disallow nameless cakes
        if (newCake.name.trim() === "") {
            return;
        }

        // Propagate to external handler
        this.props.onSubmit(newCake);

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

    componentDidUpdate() {
        if (this.state.open) {
            this.refs.cakeName.focus();
        }
    }

    render() {
        let content: JSX.Element = null;

        if (this.state.open) {
            content = <div>
                <div className="cake-input-details">
                    <input className="cake-input-text"
                        type="text"
                        ref="cakeName"
                        onKeyDown={this.checkIfCanceledByKeypress}
                        onChange={this.updateState}
                        value={this.state.value}
                        placeholder="what was the cake called?" />
                </div>
                <a className="cake-input-link" onClick={this.toggleOpen}>hmm, maybe later...</a>
            </div>; 
        } else {
            content = <a className="cake-input-link" onClick={this.toggleOpen}>just had cake? let's add it!</a>;
        }

        return <form className="cake-input" onSubmit={this.onSubmit}>
            {content}
        </form>;
    }
}

export default CakeInput;
