import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-playlist',
  templateUrl: './page-playlist.component.html',
  styleUrls: ['./page-playlist.component.scss']
})
export class PagePlaylistComponent implements OnInit {
  fixed: boolean = false;
  scrollValue !: Number;
  bgColor !: string;
  constructor() { }

  ngOnInit(): void {
  }
  onScroll(event: any) {
    // visible height + pixel scrolled >= total height 
    this.scrollValue = event.target.offsetHeight - event.target.scrollTop * 2;
    if (this.scrollValue < 280) {
      // alert(this.scrollValue);
      this.fixed = true;
    }
    else {
      this.fixed = false;
    }
    this.bgColor = 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1)' + (this.scrollValue) + '%)';
  }
}
