import * as React from "react";
import * as ReactDOM from "react-dom";
import { CakeProps } from "./Cake.tsx";
import { CakeList, CakeListProps } from "./CakeList.tsx";
import CakeInput from "./CakeInput.tsx";
import Store from "./store";

class CakeApp extends React.Component<any, void> {
    constructor(props: React.Props<any>) {
        super(props);

        this.handleNewCake = this.handleNewCake.bind(this);
    }   

    handleNewCake(cake: CakeProps) {
        this.props.store.addCake(cake);
        this.forceUpdate();
    }

    render() {
        const cakes = this.props.store.getCakes();
        return <div>
            <CakeList cakes={cakes} />
            <CakeInput onSubmit={this.handleNewCake} />
        </div>;
    }
}

ReactDOM.render(<CakeApp store={Store} />,
    document.getElementById("content"));
