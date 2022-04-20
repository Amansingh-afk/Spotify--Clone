import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {
@Input () cardTitle= '';
@Input () urlpath = '';
  constructor() { }

  ngOnInit(): void {
  }

}
