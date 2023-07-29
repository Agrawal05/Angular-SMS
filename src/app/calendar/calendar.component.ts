import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import *as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public date = moment();
  public dateForm = FormGroup;
  @Output() OnClick1 = new EventEmitter<string>();

  public isReserved = null;
 // public daysArray: any = new Array(42);
  public daysArray : any[] = [];

  constructor(private fb: FormBuilder) {
    // this.initDateRange()
   }

//   public initDateRange() {
//     return (this.dateForm = this.fb.group({
//       dateFrom: [null, Validators.required],
//       dateTo: [null, Validators.required]
//     }));
//   }

  ngOnInit(): void {
    this.daysArray = this.createCalendar(this.date);
    console.log(this.daysArray)
  }

  public todayCheck(day: any) {
    if (!day) {
      return false;
    }
    return moment().format('L') === day.format('L');
  }

  public createCalendar(month:number | any){
    // this.daysArray=new Array(42);
    // this.daysArray.fill(0);
    let firstDay = moment(month).startOf('M');
    let days= Array.apply(null,{length: month.daysInMonth()})
    .map(Number.call, Number)
    .map((i) =>{
      return moment(firstDay).add(i,"d"); 
    })
     // let startingIndex=firstDay.weekday();   
    // if(startingIndex==7)
    //   startingIndex = 0;
    // for(let i=startingIndex; i<(days.length+startingIndex); i++)
    // {
    //   this.daysArray[i]=days[i-startingIndex];
    // }
    // console.log(this.daysArray)
    for(let i=0; i<firstDay.weekday(); i++){
      days.unshift(null);
    }
    return days;
  }


  public nextMonth(){
    this.date.add(1,'M');
    this.daysArray = this.createCalendar(this.date);
  }


  public prevMonth(){
    this.date.subtract(1,'M');
    this.daysArray = this.createCalendar(this.date);
  }

  public show_events(day: any){
    this.OnClick1.emit();
  }

//   public isSelected(day) {
//     if (!day) {
//       return false;
//     }
//     let dateFromMoment = moment(this.dateForm.value.dateFrom, 'MM/DD/YYYY');
//     let dateToMoment = moment(this.dateForm.value.dateTo, 'MM/DD/YYYY');
//     if (this.dateForm.valid) {
//       return (
//         dateFromMoment.isSameOrBefore(day) && dateToMoment.isSameOrAfter(day)
//       );
//     }
//     if (this.dateForm.get('dateFrom').valid) {
//       return dateFromMoment.isSame(day);
//     }
//   }


//   public reserve() {
//     if (!this.dateForm.valid) {
//       return;
//     }
//     let dateFromMoment = this.dateForm.value.dateFrom;
//     let dateToMoment = this.dateForm.value.dateTo;
//     this.isReserved = `Reserved from ${dateFromMoment} to ${dateToMoment}`;
//   }

//   public selectedDate(day: any){
//     let dayFormatted = day.format('MM/DD/YYYY')
//     if(this.dateForm.valid){
//       this.dateForm.setValue({dateForm: null, dateTo: null})
//       return;
//     }
//     if(this.dateForm.get('dateFrom').value){
//       this.dateForm.get('dateFrom').patchValue(dayFormatted); 
//     }else{
//       this.dateForm.get('dateTo').patchValue(dayFormatted);
//     }
//   }

}
