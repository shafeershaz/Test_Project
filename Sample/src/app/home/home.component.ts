import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  image : string;
  constructor() {
    this.image = "../../assets/images/background.jpg";
   }
  ngOnInit() {
  }

}
