import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  containerActive = false;

  constructor() { }

  ngOnInit(): void {
  }
  handleClick() {
    this.containerActive = !this.containerActive

  } }
