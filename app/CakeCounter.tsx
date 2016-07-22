import * as React from "react";
import { CakeProps } from "./Cake.tsx";
import { CakeListProps } from "./CakeList.tsx";

interface CakeCounterState {
    daysSinceLastCake: number;
}

class CakeCounter extends React.Component<CakeListProps, CakeCounterState> {
    constructor(props: CakeListProps) {
        super(props);

        this.calculateNewState = this.calculateNewState.bind(this);
        this.state = this.calculateNewState(this.props);
    }

    calculateNewState(props: CakeListProps): CakeCounterState {
        return {
            daysSinceLastCake: this.calculateDaysSinceLastCake(props.cakes)
        };
    }

    calculateDateDiffInDays(a: Date, b: Date): number {
        const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;

        // Discard the time and time-zone information.
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

        return Math.abs(Math.floor((utc2 - utc1) / MILLISECONDS_IN_DAY));
    }

    componentWillReceiveProps(nextProps: CakeListProps) {
        this.setState(this.calculateNewState(nextProps));
    }

    calculateDaysSinceLastCake(cakes: any): number {
        if (cakes.length === 0) {
            return null;
        }
        const lastCake = cakes[0];
        return this.calculateDateDiffInDays(new Date(), lastCake.date);
    }

    render() {
        const days = this.state.daysSinceLastCake;

        let msg: JSX.Element = null;
        if (days === null) {
            msg = <div>why not have <div className="cake-counter-daycount">cake</div> today?</div>;
        } else if (days === 0) {
            msg =<div>cake was <div className="cake-counter-daycount">just</div> had! lucky day!</div>; 
        } else {
            msg = <div><div className="cake-counter-daycount">{this.state.daysSinceLastCake}</div> days since last cake</div>; 
        }
        return (<div className="cake-counter">{msg}</div>);
    }
}

export {
    CakeCounter
};