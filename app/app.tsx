import * as React from "react";
import * as ReactDOM from "react-dom";
import { CakeList, CakeListProps, CakeInput } from "./Cake.tsx";
import store from "./store.tsx";

const cakeListProps: CakeListProps = {
    cakes: store.getCakes()
};

ReactDOM.render(<div><CakeList {...cakeListProps} /><CakeInput /></div>,
    document.getElementById("content"));
