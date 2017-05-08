import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() checkList: string[];

  @Output() updateTask: EventEmitter<string> = new EventEmitter;

  updateList (list: string){
    this.updateTask.emit(list);
  }

  ngOnInit() {
  }

}