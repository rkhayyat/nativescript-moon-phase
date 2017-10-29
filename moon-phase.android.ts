import { Common, MoonPhaseBase, Utils, dateProperty } from './moon-phase.common';
import {moonImage} from './moonImages';

export class Hijri extends Common {

}
export class MoonPhase extends MoonPhaseBase {
    constructor() {
        super();
    
    }

    [dateProperty.setNative](value) {
        // let items = value;
        //console.log('this is the value',value);
        this.src = moonImage[Utils.getDay(value, 0)];
        this.width = 100;
    };

}