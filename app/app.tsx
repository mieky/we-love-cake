import * as React from "react";
import * as ReactDOM from "react-dom";
import Store from "./store";
import { CakeProps } from "./Cake.tsx";
import { CakeCounter } from "./CakeCounter.tsx";
import { CakeList, CakeListProps } from "./CakeList.tsx";
import CakeInput from "./CakeInput.tsx";

class CakeApp extends React.Component<any, void> {
    constructor(props: any) {
        super(props);

        this.handleNewCake = this.handleNewCake.bind(this);
    }   

    componentWillMount() {
        // Prevent browser from opening dropped items
        document.addEventListener("dragover", function(e: DragEvent) {
            event.preventDefault();
        }, false);        
    }

    handleNewCake(cake: CakeProps) {
        this.props.store.addCake(cake);
        this.forceUpdate();
    }

    render() {
        const cakes = this.props.store.getCakes();
        return <div>
            <CakeCounter cakes={cakes} />
            <CakeList cakes={cakes} />
            <CakeInput onSubmit={this.handleNewCake} />
        </div>;
    }
}
 
ReactDOM.render(<CakeApp store={Store} />,
    document.getElementById("content"));
