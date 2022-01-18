import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  selectedTab: string = '';
  childrens = [];
  constructor() { }

  ngOnInit(): void {
    this.childrens = [{
      "first_name": "William",
      "last_name": "Shakespeare",
      "address": "England",
      "wishes": "Books",
      "performance": "poor"
    }, {
      "first_name": "JRR",
      "last_name": "Tolkien",
      "address": "England",
      "wishes": "Pen",
      "performance": "good"
    }, {
      "first_name": "Charles",
      "last_name": "Dickens",
      "address": "England",
      "wishes": "Teddy Bear",
      "performance": "good"
    }, {
      "first_name": "Agatha",
      "last_name": "Christie",
      "address": "England",
      "wishes": "Knife",
      "performance": "poor"
    }];
  }
  selected(val: string) {
    this.selectedTab = val;
  }
}
