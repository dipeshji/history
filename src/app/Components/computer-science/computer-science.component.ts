import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-computer-science',
  templateUrl: './computer-science.component.html',
  styleUrls: ['./computer-science.component.css']
})
export class ComputerScienceComponent implements OnInit {

  load:boolean = true
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
  }



}
