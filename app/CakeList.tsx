import * as React from "react";
import { Cake, CakeProps } from "./Cake";

interface CakeListProps {
    cakes: CakeProps[];
}

class CakeList extends React.Component<CakeListProps, void> {
    render() {
        const cakes = this.props.cakes;
        return (
            <div className="cakelist-container">                
                <div className="cakelist-items">
                    {cakes.map(cake => 
                        <Cake key={cake.id} {...cake} />
                    )}
                </div>
            </div>
        );
    }
}

export {
    CakeListProps,
    CakeList
};
