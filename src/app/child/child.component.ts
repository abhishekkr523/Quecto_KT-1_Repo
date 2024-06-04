import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent implements OnInit {
  @Input() childData: String | undefined;

  @Output() dataOfChild = 'kumar';
  @Output() binding=new EventEmitter()
  ngOnInit(): void {
    this.binding.emit("kr")
    console.log(this.binding)
  }
}
