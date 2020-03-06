import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  ID: number;
  name: string;

  constructor() { }

  set_studentdata(id, name) {

    this.ID = id;
    this.name = name;

  }
}
