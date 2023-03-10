import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  getAllEmployee(){
    return this.http.get("http://3.110.193.86:4444/employee/employees");
  }
  createEmployee(data:any){
    return this.http.post("http://3.110.193.86:4444/employee/",data);

  }
  updateEmployee(id:any,body:any){
  return this.http.put(`http://3.110.193.86:4444/employee/id/${id}`,body);
  }

  getEmpById(id:any){
  return this.http.get(`http://3.110.193.86:4444/employee/id/${id}`);
  }

  deleteEmployee(id:any){
  return this.http.delete(`http://3.110.193.86:4444/employee/id/${id}`);
  }

  constructor(private http:HttpClient){}

  
}
