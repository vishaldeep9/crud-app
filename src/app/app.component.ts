import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curd-app';


  constructor(private _dialog:MatDialog){}

  openAddEditEmpForm(){
    //pass that function which you want to open 
    this._dialog.open(EmpAddEditComponent)
  }
}
