import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myInputOutput-data-pro';
  rootname : string = ''

  arrRoot : Data[] = []

  dataFromChild(e:Data[]){
    // this.rootname = e;
    this.arrRoot = e;

    // console.log(this.rootname);
    console.log(this.arrRoot);
    console.log(this.arrRoot[1]);
    
  }
}
