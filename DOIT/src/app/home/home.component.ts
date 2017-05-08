import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

projectList: string[];
personalList: string[];

  constructor() {
        this.projectList = ['Qatar Airways', 'CITI'];    
        this.personalList = ['Complete Task', 'Prepare Angular4'];
   }

  ngOnInit() {
    
  }

  projectUpdate(task: string){
    this.projectList.push(task);
  }

  personalUpdate(task: string){
    this.personalList.push(task);
  }

}