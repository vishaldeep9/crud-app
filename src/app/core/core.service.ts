import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message:string,action:string='ok') {
    //third parameter is an optional and there we could pass configuration(means how time it will be visible  and where it will be visible) 
    this._snackBar.open(message,action,{duration:1000,verticalPosition:'top'});
  }
}
