import { Component, EventEmitter, Output } from '@angular/core';
import { Data } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  uname: string = "Hello From Parent"

  users: string[] = ["dev", "vinit", "jeel"]
  
  courses = [
    { id: 1, name: "dev", desg: "developer" },
    { id: 2, name: "second", desg: "developer" },
    { id: 3  , name: "third", desg: "designer" }

  ];

  // {id:number,name:string,desg:string}
  // {id:0,name:"",desg:""}

  @Output() obj : EventEmitter<Data[]> = new EventEmitter();

  clickMe(){
    this.obj.emit(this.courses)
  }


  // clickMe(){
  //   this.obj.emit(this.users)
  // }
  
  getType() {
    console.log(typeof (this.courses));
    console.log(this.courses);

  }


}
