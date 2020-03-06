import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class1',
  templateUrl: './class1.component.html',
  styleUrls: ['./class1.component.css']
})
export class Class1Component implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    
  }
}
