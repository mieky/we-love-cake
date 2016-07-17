import * as React from "react";
import { Cake, CakeProps } from "./Cake.tsx";

interface CakeListProps extends React.Props<any> {
    cakes: CakeProps[];
}

class CakeList extends React.Component<CakeListProps, void> {
    render() {
        const cakes = this.props.cakes.sort((a, b) => a.date > b.date ? -1 : 1);
        return (
            <div>
                <h3>Hall of cake fame</h3>
                <ul>
                    {cakes.map(cake => <li key={cake.name}>
                        <Cake {...cake} />
                    </li>)}
                </ul>
            </div>
        );
    }
}

export {
    CakeListProps,
    CakeList
};
