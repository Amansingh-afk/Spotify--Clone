import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recently-played',
  templateUrl: './recently-played.component.html',
  styleUrls: ['./recently-played.component.scss']
})
export class RecentlyPlayedComponent implements OnInit {
  cardData: Array<{ title: string, imgpath: string}> = [

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
