import * as React from "react";
import * as ReactDOM from "react-dom";
import { CakeListProps, CakeList, CakeInput } from "./Cake.tsx";

const cakeListProps: CakeListProps = {
    cakes: [
        {
            "name": "Mud cake",
            "description": "A delicious Frödinge from the freezer, because why not!",
            "date": new Date("2016-05-25")
        },
        {
            "name": "Kinuskikaakku",
            "description": "Jorma's birthday cake",
            "date": new Date("2016-06-01")
        }
    ]
};

ReactDOM.render(<div><CakeList {...cakeListProps} /><CakeInput /></div>,
    document.getElementById("content"));
