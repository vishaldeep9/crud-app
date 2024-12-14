import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title='crud-app'
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'experience',
    'package',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getAllEmployeeList();
  }

  openAddEditEmpForm() {
    //pass that component which you want to open
    const dialogRef = this._dialog.open(EmpAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        //means when it will receive true then it will call this
        this.getAllEmployeeList();
      },
    });
  }
  getAllEmployeeList() {
    this._empService.getAllEmployeeList().subscribe({
      next: (response) => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err: any) => {},
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteEmployee(id: number) {
    confirm('Are you sure want to delete?')
    this._empService.deleteEmployee(id).subscribe({
      next: (res) => {
        // alert(`Employee deleted!`);
        this._coreService.openSnackBar('Employee Deleted!','done')
        this.getAllEmployeeList();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  // data bcz we want to show existing data 
  openEditForm(data: any) {
    const dialogRef = this._dialog.open(EmpAddEditComponent, { data });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        //means when it will receive true then it will call this
        this.getAllEmployeeList();
      },
    });
  }

}
