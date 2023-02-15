import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  employeeForm!:FormGroup;
  submitted = false;
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      Name:['',[Validators.required]],
      DOB:['',Validators.required],
      Gender:['',Validators.required],
      PhoneNo:['',Validators.compose([Validators.required,Validators.pattern('[0-9+]*'),Validators.minLength(10)])],
      Address:['',Validators.required],
      EmailId:['',Validators.compose([Validators.required,Validators.pattern('^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$')])],
      Designation:['',Validators.required],
      
    });
  }

  get loadRegistration()
  {
     return this.employeeForm?.controls;
  }

  onSubmit()
  {
     this.submitted = true;
     if(this.employeeForm.valid) 
     {
      this.router.navigate(['test']);
     }
     else{
      alert("Form Validation Error");
     }
  }

}
