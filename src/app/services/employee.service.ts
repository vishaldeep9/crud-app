import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:3000/employees';

  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this._http.post(this.baseUrl, data);
  }
  getAllEmployeeList(): Observable<any[]> {
    return this._http.get<any[]>(this.baseUrl);
  }
  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}/${id}`);
  }
}
