import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-top-track',
  templateUrl: './album-top-track.component.html',
  styleUrls: ['./album-top-track.component.scss']
})
export class AlbumTopTrackComponent implements OnInit {
  @Input() topTrack: any;
  @Input() id !: number;
  public play: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  public show(): void{
    console.log('wprking ',this.id);
  }
  public player(): void {
    this.play = !this.play;
    console.log('play', this.play);
  }
}
