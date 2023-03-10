import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  getAllTeacher(){
    return this.http.get(`http://3.110.193.86:4444/teacher/getall/`)
  };

  saveTeacher(data:any){
return this.http.post(`http://3.110.193.86:4444/teacher/save`,data)
  }

  getTeacherById(id:any){
    return this.http.get(`http://3.110.193.86:4444/teacher/id/${id}`)
  }

  deleteTeacher(id:any){
    return this.http.delete(`http://3.110.193.86:4444/teacher/delete/${id}`)
  }

  updateTeacher(body:any){
    return this.http.put(`http://3.110.193.86:4444/teacher/update`,body)
  }

  constructor(private http:HttpClient) { }
}
