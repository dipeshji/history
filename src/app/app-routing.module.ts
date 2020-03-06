import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComputerScienceComponent } from './Components/computer-science/computer-science.component';
import { AppComponent } from './app.component';
import { Class1Component } from './Components/computer-science/Children/class1/class1.component';
import { Class2Component } from './Components/computer-science/Children/class2/class2.component';
import { Class3Component } from './Components/computer-science/Children/class3/class3.component';
import { Class4Component } from './Components/computer-science/Children/class4/class4.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './Components/home/home.component';
import { InformationTechnologyComponent } from './Components/information-technology/information-technology.component';
import { ElectricalComponent } from './Components/electrical/electrical.component';
import { MechanicalComponent } from './Components/mechanical/mechanical.component';
import { ToolEngineeringComponent } from './Components/tool-engineering/tool-engineering.component';
import { ChemicalEngineeringComponent } from './Components/chemical-engineering/chemical-engineering.component';
import { BioChemicalComponent } from './Components/bio-chemical/bio-chemical.component';
import { CivilComponent } from './Components/civil/civil.component';
import { StudentdetailComponent } from './Components/studentdetail/studentdetail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/stream',pathMatch: "full",
    data: { breadcrumb: 'All streams' }
  },
  {
    path: 'stream',
    component: HomeComponent,
    data: { breadcrumb: 'All Streams' },
    children: [
      {
        path: 'computerscience',
        component: ComputerScienceComponent,
        data: {
          breadcrumb: 'Computer Science'
        },
        children: [
          {
            path: '1',
            component: Class1Component,
            data: {
              breadcrumb: 'Class 1'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '2',
            component: Class2Component,
            data: {
              breadcrumb: 'class2'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '3',
            component: Class3Component,
            data: {
              breadcrumb: 'class3'
            },children:[
              {
                path: ':id', component: 
                StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '4',
            component: Class4Component,
            data: {
              breadcrumb: 'class4'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          }
        ]
      },
      {
        path: 'informationtechnology',
        component: InformationTechnologyComponent,
        data: {
          breadcrumb: 'Information Technology'
        },
        children: [
          {
            path: '1',
            component: Class1Component,
            data: {
              breadcrumb: 'Class 1'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '2',
            component: Class2Component,
            data: {
              breadcrumb: 'class2'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '3',
            component: Class3Component,
            data: {
              breadcrumb: 'class3'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '4',
            component: Class4Component,
            data: {
              breadcrumb: 'class4'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
        ]
      },
      {
        path: 'electrical',
        component: ElectricalComponent,
        data: {
          breadcrumb: 'Electrical'
        },
        children: [
          {
            path: '1',
            component: Class1Component,
            data: {
              breadcrumb: 'Class 1'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '2',
            component: Class2Component,
            data: {
              breadcrumb: 'class2'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '3',
            component: Class3Component,
            data: {
              breadcrumb: 'class3'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '4',
            component: Class4Component,
            data: {
              breadcrumb: 'class4'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          }
        ]
      },
      {
        path: 'mechanical',
        component: MechanicalComponent,
        data: {
          breadcrumb: 'Mechanical'
        },
        children: [
          {
            path: '1',
            component: Class1Component,
            data: {
              breadcrumb: 'Class 1'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '2',
            component: Class2Component,
            data: {
              breadcrumb: 'class2'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '3',
            component: Class3Component,
            data: {
              breadcrumb: 'class3'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '4',
            component: Class4Component,
            data: {
              breadcrumb: 'class4'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          }
        ]
      },
      {
        path: 'toolengineering',
        component: ToolEngineeringComponent,
        data: {
          breadcrumb: 'Tool Engineering'
        },
        children: [
          {
            path: '1',
            component: Class1Component,
            data: {
              breadcrumb: 'Class 1'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '2',
            component: Class2Component,
            data: {
              breadcrumb: 'class2'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '3',
            component: Class3Component,
            data: {
              breadcrumb: 'class3'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '4',
            component: Class4Component,
            data: {
              breadcrumb: 'class4'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          }
        ]
      },
      {
        path: 'chemicalengineering',
        component: ChemicalEngineeringComponent,
        data: {
          breadcrumb: 'Chemical Engineering'
        },
        children: [
          {
            path: '1',
            component: Class1Component,
            data: {
              breadcrumb: 'Class 1'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '2',
            component: Class2Component,
            data: {
              breadcrumb: 'class2'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '3',
            component: Class3Component,
            data: {
              breadcrumb: 'class3'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '4',
            component: Class4Component,
            data: {
              breadcrumb: 'class4'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          }
        ]
      },
      {
        path: 'biochemical',
        component: BioChemicalComponent,
        data: {
          breadcrumb: 'Bio-Chemical'
        },
        children: [
          {
            path: '1',
            component: Class1Component,
            data: {
              breadcrumb: 'Class 1'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '2',
            component: Class2Component,
            data: {
              breadcrumb: 'class2'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '3',
            component: Class3Component,
            data: {
              breadcrumb: 'class3'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '4',
            component: Class4Component,
            data: {
              breadcrumb: 'class4'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          }
        ]
      },
      {
        path: 'civilengineering',
        component: CivilComponent,
        data: {
          breadcrumb: 'Civil Engineering'
        },
        children: [
          {
            path: '1',
            component: Class1Component,
            data: {
              breadcrumb: 'Class 1'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '2',
            component: Class2Component,
            data: {
              breadcrumb: 'class2'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '3',
            component: Class3Component,
            data: {
              breadcrumb: 'class3'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          },
          {
            path: '4',
            component: Class4Component,
            data: {
              breadcrumb: 'class4'
            },children:[
              {
                path: ':id', 
                component: StudentdetailComponent,
                data:{
                  breadcrumb: ''
                }
              }
            ]
          }
        ]
      },
    ]
  }
];
  // {path: "**", component: PagenotfoundComponent}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {
}