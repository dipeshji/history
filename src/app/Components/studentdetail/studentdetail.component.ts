import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { log } from 'util';

export interface PeriodicElement {
  id: number,
  subject: string,
  midsemester1: string,
  midsemester2: string,
  endsemester: string,
  eligible: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, subject: "subject1", midsemester1: "100%", midsemester2: "100%", endsemester: "100%", eligible: "yes" },
  { id: 2, subject: "subject2", midsemester1: "100%", midsemester2: "100%", endsemester: "100%", eligible: "yes" },
  { id: 3, subject: "subject3", midsemester1: "45%", midsemester2: "25%", endsemester: "22%", eligible: "no" },


];

export interface SemesterDetail {
  id: number,
  subject: string,
  sem1: string,
  sem2: string,
  sem3: string,
  sem4: number,
  sem5: number,
  sem6: number,
  sem7: number,
  sem8: number,
  
}

const SEMESTER_RESULTS: SemesterDetail[] = [
  { id: 1, subject: "subject1", sem1: "74%", sem2: "72%", sem3: "80%", sem4: 0, sem5: 0, sem6: 0, sem7: 0, sem8:0 },
  { id: 2, subject: "subject1", sem1: "74%", sem2: "72%", sem3: "80%", sem4: 0, sem5: 0, sem6: 0, sem7: 0, sem8:0 },
  { id: 3, subject: "subject1", sem1: "74%", sem2: "72%", sem3: "80%", sem4: 0, sem5: 0, sem6: 0, sem7: 0, sem8:0 },


];


@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class StudentdetailComponent implements OnInit {
  id: number;
  name: string;
  @ViewChild(MatSort,{static:false}) sort:MatSort;
  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;


  constructor(private studentdata: StudentService) { }

  displayedColumns: string[] = ['id', 'subject', 'midsemester1', 'midsemester2', 'endsemester', 'eligible', 'view details'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  semdisplayedColumns: string[] = ['id', 'subject', 'sem1', 'sem2', 'sem3', 'sem4', 'sem5', 'sem6', 'sem7', 'sem8']
  semdataSource = new MatTableDataSource<SemesterDetail>(SEMESTER_RESULTS)

  ngOnInit() {
    this.id = this.studentdata.ID
    this.name = this.studentdata.name
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

