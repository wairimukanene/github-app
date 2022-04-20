import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
details:any
displayDetails(){
  console.log(this.details)
  
}
  ngOnInit(): void {
  }

}
