import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.css']
})
export class FailComponent implements OnInit {
  ImagePath: string;
  constructor() {

    this.ImagePath = '/assets/img/fail-driving-test.jpg'
   }
  ngOnInit(): void {
  }

}
