import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
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
repos:Repository[]
displayDetails(){
  this.service.getUser(this.details),
  this.service.getRepo(this.details).subscribe((data) =>{
    this.repos =data
  })

}
  ngOnInit(): void {
  this.user=this.service.user
  }

}
