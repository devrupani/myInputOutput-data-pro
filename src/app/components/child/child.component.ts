import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  title: string = ''

  @Input()
  subUsers: string[] = []

  @Input()
  subObj = [{ id: 0, name: "", desg: "" }]
}
