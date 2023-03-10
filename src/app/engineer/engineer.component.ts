import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineerService } from '../engineer.service';

@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.css']
})
export class EngineerComponent implements OnInit{
  constructor(private eng:EngineerService ,private rout:Router ,private activeRout:ActivatedRoute){}
  id:any
  engineer:FormGroup=new FormGroup({
    id:new FormControl(),
    firstName:new FormControl(),
    lastName:new FormControl(),
    emailId:new FormControl(),

  });
    ngOnInit(): void { 
      this.getAllEng();
      this.activeRout.params.subscribe(
        param=>{this.id=param['id']}
      );
    }
    getEng(){
      this.eng.getAllEng().subscribe((res)=>{console.log(res)});
    };
    creatEng(){
    this.eng.createEng(this.engineer.value)
    .subscribe((res)=>console.log(res)
     )
     this.getAllEng();
  }
  engineers:any;
  getAllEng(){
   this.eng.getAllEng().subscribe
   ((res)=>{this.engineers=res});
  }
  deleteEng(id:any){
   this.eng.deleteEng(id).subscribe(
     (res)=>{console.log(res)
     this.getAllEng()}
   );
  }
getEngById(id:number){
  this.eng.getEngById(id).subscribe((res)=>{console.log(res)
    this.engineer.setValue(res);})
}
updateEng(){
 this.eng.updateEng(this.engineer.value.id,this.engineer.value).subscribe((res)=>{
  this.getAllEng();
  })
 
  } }
