import * as React from "react";
import { CakeProps } from "./Cake.tsx";
import { CakeListProps } from "./CakeList.tsx";

interface CakeCounterState {
    daysSinceLastCake: number;
}

class CakeCounter extends React.Component<CakeListProps, CakeCounterState> {
    constructor(props: CakeListProps) {
        super(props);

        this.state = {
            daysSinceLastCake: this.calculateDaysSinceLastCake(this.props.cakes)
        };
    }

    calculateDateDiffInDays(a: Date, b: Date): number {
        const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;

        // Discard the time and time-zone information.
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

        return Math.abs(Math.floor((utc2 - utc1) / MILLISECONDS_IN_DAY));
    }

    calculateDaysSinceLastCake(cakes: any) {        
        const lastCake = this.props.cakes[0];
        return this.calculateDateDiffInDays(new Date(), lastCake.date);
    }

    render() {
        console.log("cakecounter render", new Date());
        return (<div>
            Days since last cake: {this.state.daysSinceLastCake}
        </div>);
    }
}

export {
    CakeCounter
};