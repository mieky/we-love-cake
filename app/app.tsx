import * as React from "react";
import * as ReactDOM from "react-dom";
import { CakeProps, CakeList, CakeListProps, CakeInput } from "./Cake.tsx";
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
        return <div>
            <CakeList cakes={this.props.store.getCakes()} />
            <CakeInput onSubmit={this.handleNewCake} />
        </div>;
    }
}

ReactDOM.render(<CakeApp store={Store} />,
    document.getElementById("content"));
