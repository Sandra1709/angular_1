import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../data/Product';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  products:Product[]=[];
  constructor (private service:DataService){}

  ngOnInit(): void {
   //this.products=
    this.service.fetchAllProduct().subscribe((data)=>{

      this.products= data;
    });
    
  }


}
