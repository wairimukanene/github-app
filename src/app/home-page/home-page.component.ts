import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private service:ServicesService) { }
mercy:any
  ngOnInit(): void {
    this.service.getMercy().subscribe((data)=>{
      this.mercy=data
    })
  }

}
