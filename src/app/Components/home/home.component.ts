import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }
res:any = []
  ngOnInit() {
    this.res = Array(20).fill(1,20).map((x,i)=> i)
  }

}
