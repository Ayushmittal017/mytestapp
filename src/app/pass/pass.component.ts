import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent implements OnInit {
  ImagePath: string;
  constructor() {
    this.ImagePath = '/assets/img/test-passed-seal-imprint-red-260nw-1399248755.webp'
   }

  ngOnInit(): void {
  }

}
