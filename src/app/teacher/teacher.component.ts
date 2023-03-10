import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit{
  constructor(private tea:TeacherService ,private activeRout:ActivatedRoute){}
id:any
  ngOnInit(): void {
      this.getAllTeacher();
      this.activeRout.params.subscribe(
        param=>{this.id=param['id']}
      );
  }
  teacher:FormGroup=new FormGroup({
    id:new FormControl(),
    firstName:new FormControl(),
    lastName:new FormControl(),
    subject:new FormControl(),
  });

  getAllTea(){
    this.tea.getAllTeacher().subscribe((res)=>{console.log(res)})
  }

  saveTeacher(){
    this.tea.saveTeacher(this.teacher.value).subscribe(
      (res)=>{console.log(res)
      this.getAllTeacher()}
    )
  }

  teachers:any

  getAllTeacher(){
    this.tea.getAllTeacher().subscribe((res)=>{console.log(this.teachers=res)})
  }

  deleteTeacher(id:any){
    this.tea.deleteTeacher(id).subscribe((res)=>{console.log(res)
    this.getAllTeacher()})
  }

  getTeacherById(id:any){
    this.tea.getTeacherById(id).subscribe((res)=>{console.log(res)
    this.teacher.setValue(res)})
  }

  updatTeacher(){
    this.tea.updateTeacher(this.teacher.value).subscribe((res)=>{console.log(res)
    this.getAllTeacher()})
  }



}
