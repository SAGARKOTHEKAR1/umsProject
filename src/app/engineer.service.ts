import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EngineerService {

  getAllEng(){
    return this.http.get(`http://3.110.193.86:4444/engineer`);
  }

  createEng(data:any){
  return this.http.post(`http://3.110.193.86:4444/engineer`,data);
  }
  
  deleteEng(id:any){
    return this.http.delete(`http://3.110.193.86:4444/engineer/${id}`);
  }

  getEngById(id:any){
    return this.http.get(`http://3.110.193.86:4444/engineer/${id}`)
  }
  updateEng(id:any,body:any){
    return this.http.put(`http://3.110.193.86:4444/engineer/${id}`,body)
  }

  constructor(private http:HttpClient) { }
}
