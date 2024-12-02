import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit{

  empForm!:FormGroup;

  education:string[]=[
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate'
  ]

  //inside DialogRef<mention current class name>, after submitting form it will that box
  constructor(private _fb:FormBuilder,private _empService:EmployeeService,private _router:Router,
    private _dialogRef:MatDialogRef<EmpAddEditComponent>){}

  ngOnInit(): void {
   this.empForm=this._fb.group({
      firstName:'',
      lastName:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      company:'',
      experience:'',
      package:''
   })
   
  }
   
  onFormSubmit(){
  if(this.empForm.valid){
    this._empService.addEmployee(this.empForm.value).subscribe({
      next:(val)=>{
        alert(`employee added successfully`);
        this._dialogRef.close(true)// when it will closed then it will pass true
      },
      error:(err:any)=>{
        console.error(err)
      }
    })
  }}

}
