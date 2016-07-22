import * as React from "react";
import { Cake, CakeProps } from "./Cake.tsx";

interface CakeListProps {
    cakes: CakeProps[];
}

class CakeList extends React.Component<CakeListProps, void> {
    render() {
        const cakes = this.props.cakes;
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
