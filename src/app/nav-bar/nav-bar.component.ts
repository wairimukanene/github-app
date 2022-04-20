import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { User } from '../user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private service:ServicesService) { }
details:any
user:User
displayDetails(){
  this.service.getUser(this.details)

}
  ngOnInit(): void {
  this.user=this.service.user
  }

}
