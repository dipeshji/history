import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BreadcrumbModule} from 'angular-crumbs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComputerScienceComponent } from './Components/computer-science/computer-science.component';
import { InformationTechnologyComponent } from './Components/information-technology/information-technology.component';
import { ElectricalComponent } from './Components/electrical/electrical.component';
import { MechanicalComponent } from './Components/mechanical/mechanical.component';
import { ToolEngineeringComponent } from './Components/tool-engineering/tool-engineering.component';
import { ChemicalEngineeringComponent } from './Components/chemical-engineering/chemical-engineering.component';
import { BioChemicalComponent } from './Components/bio-chemical/bio-chemical.component';
import { CivilComponent } from './Components/civil/civil.component';
import { Class1Component } from './Components/computer-science/Children/class1/class1.component';
import { Class2Component } from './Components/computer-science/Children/class2/class2.component';
import { Class3Component } from './Components/computer-science/Children/class3/class3.component';
import { Class4Component } from './Components/computer-science/Children/class4/class4.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './Components/home/home.component';
import { BreadcrumbComponent } from './Components/breadcrumb/breadcrumb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import { StudentDataComponent } from './student-data/student-data.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field'
import {MatInputModule} from '@angular/material';
import { StudentdetailComponent } from './Components/studentdetail/studentdetail.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import {MatTabsModule} from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    ComputerScienceComponent,
    InformationTechnologyComponent,
    ElectricalComponent,
    MechanicalComponent,
    ToolEngineeringComponent,
    ChemicalEngineeringComponent,
    BioChemicalComponent,
    CivilComponent,
    Class1Component,
    Class2Component,
    Class3Component,
    Class4Component,
    PagenotfoundComponent,
    HomeComponent,
    BreadcrumbComponent,
    StudentDataComponent,
    StudentdetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
