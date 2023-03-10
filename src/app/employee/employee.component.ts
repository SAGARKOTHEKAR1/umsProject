import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  constructor(private emp: EmployeeService, private rout: Router, private activeRout: ActivatedRoute) { }

  id: any
  employee: FormGroup = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    emailId: new FormControl(),

  });
  ngOnInit(): void {
    this.getAllEmployee();
    this.activeRout.params.subscribe(
      param => { this.id = param['id'] }
    );
  }

  getAllEmp() {
    this.emp.getAllEmployee().subscribe((res) => { console.log(res) });
  };

  createEmployee() {
    this.emp.createEmployee(this.employee.value)
      .subscribe((res) => {
        console.log(res)
        this.getAllEmployee();
      }

      )

  }
  employees: any;
  getAllEmployee() {
    this.emp.getAllEmployee().subscribe
      ((res) => { this.employees = res });
  }

  deleteEmployee(id:any){
    this.emp.deleteEmployee(id).subscribe(
      (res)=>{console.log(res)
      this.getAllEmployee();}
    )

  }

  getEmpById(id: number) {
    this.emp.getEmpById(id).subscribe((res) => {
      console.log(res)
      this.employee.setValue(res);
    })
  }
  updateEmployee() {
    this.emp.updateEmployee(this.employee.value.id, this.employee.value).subscribe((res) => {
      this.getAllEmployee();
    })

  }
}