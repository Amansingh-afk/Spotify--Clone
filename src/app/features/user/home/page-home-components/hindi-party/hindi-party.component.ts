import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hindi-party',
  templateUrl: './hindi-party.component.html',
  styleUrls: ['./hindi-party.component.scss']
})
export class HindiPartyComponent implements OnInit {
head: string[] = new Array('aa', 'bb', 'cc', 'dd');
  constructor() { }
  ngOnInit(): void {
  }

}
