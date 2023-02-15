import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  testForm!: FormGroup;
  submitted = false;
  data: any;
  pass: any = "pass";
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/answers').subscribe(res => {
      this.data = res;
    })


    this.testForm = this.fb.group({
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: ['', Validators.required],
      question4: ['', Validators.required],
      question5: ['', Validators.required],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.testForm.valid) {
      this.pass="pass";
      this.data.map((Value: any, index: any) => {
        if( (Value.answer) !== this.testForm.value[(Value.id)] )
        {
          this.pass = "fail";
        }
      })
      // console.log(this.pass);
      if(this.pass=="fail"){
        this.router.navigate(['fail']);
      }else if(this.pass == "pass"){
        this.router.navigate(['pass']);
      }
    }
    else{
      alert("Form Validation Error");
    }
  }
}
