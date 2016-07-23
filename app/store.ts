import { CakeProps } from "./Cake.tsx";

class Store {
    static _cakes: CakeProps[] = [];

    static getCakes(): CakeProps[] {
        return this._cakes.sort((a, b) => a.date > b.date ? -1 : 1)
            .map((c, i) => Object.assign(c, {
                id: c.name + c.description + c.date
            }));
    }

    static addCake(cake: CakeProps):void {
        this._cakes.push(cake);
    }
};

Store.addCake({
    "name": "Mud cake",
    "description": "A delicious Frödinge from the freezer, because why not!",
    "date": new Date("2016-05-25")
});

Store.addCake({
    "name": "Kinuskikaakku",
    "description": "Jorma's birthday cake",
    "date": new Date("2016-06-01")
});

export default Store;
