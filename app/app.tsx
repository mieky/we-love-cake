import * as React from "react";
import * as ReactDOM from "react-dom";
import { CakeComponent, CakeProps } from "./Cake.tsx";

const props = {
    "name": "Kinuskikaakku",
    "description": "Jorma's birthday cake",
    "date": new Date("2016-06-01")
};

const cakes: CakeProps[] = [
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
];

ReactDOM.render(<CakeComponent name={props.name} date={props.date} />,
    document.getElementById("content"));
