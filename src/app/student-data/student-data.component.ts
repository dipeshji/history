import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { StudentDataDataSource, StudentDataItem } from './student-data-datasource';
import {MatTableDataSource} from '@angular/material/table';
import { EXAMPLE_DATA } from './student-data-datasource';
import { Router } from '@angular/router'
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<StudentDataItem>;
  dataSource: StudentDataDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'subject1', 'subject2', 'subject3', 'view details'];
  example_data = new MatTableDataSource(EXAMPLE_DATA)
  
  constructor(private route:Router, private studentdata:StudentService){}
  current_route:any;
  ngOnInit() {
    this.current_route = this.route.url
    
    this.dataSource = new StudentDataDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.example_data.filter = filterValue.trim().toLowerCase();
    
  }
  getRecord(name,id){
    console.log(name, id);
    
    this.studentdata.set_studentdata(id,name);
    this.route.navigate([this.current_route,id]);
  }

}


