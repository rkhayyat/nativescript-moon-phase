import {Observable} from 'tns-core-modules/data/observable';
import {Hijri} from 'nativescript-moon-phase';


export class HelloWorldModel extends Observable {
/*public dayWeekText :string;
public dayWeekNumber : number;
public dayMonthNumber : number;*/
public monthText : string;
/*public monthNumber : number;
public yearNumber :number;
public hijri: Hijri;*/
public DateValue: Date;

  constructor(currentDate) {
    super();

    /*this.hijri = new Hijri(currentDate,0);
    this.dayWeekText =this.hijri.getDayName_Ar;
    this.dayMonthNumber = this.hijri.hijri_ar.dayOfMonth;
    this.monthText = this.hijri.getMonthName_Ar;
    this.monthNumber = this.hijri.getMonth;
    this.yearNumber =this.hijri.getYear;*/
    this.DateValue = currentDate;
  }

}