import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-track-item',
  templateUrl: './search-track-item.component.html',
  styleUrls: ['./search-track-item.component.scss']
})
export class SearchTrackItemComponent implements OnInit {
  @Input() track: any;
  @Input() moreTracks !: boolean;
  @Input() it !: number;
  play: boolean = false;

  constructor(private router: Router) { /*empty*/ }

  ngOnInit(): void { /*empty*/ }

  // navigates to album
  public navigate(track: any): void {
    console.log('id', track.album.id);
    this.router.navigate(['user/album', track.album.id]);
  }
  public player(): void {
    this.play = !this.play;
    console.log('play:', this.play);
  }

}
