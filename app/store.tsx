import { CakeProps } from "./Cake.tsx";

class Store {    
    static getCakes() {
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
        return cakes;
    }
};

export default Store;
