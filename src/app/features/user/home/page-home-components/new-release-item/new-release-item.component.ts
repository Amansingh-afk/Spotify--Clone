import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { NewReleasesItem } from '../../models/new-releases-model';

@Component({
  selector: 'app-new-release-item',
  templateUrl: './new-release-item.component.html',
  styleUrls: ['./new-release-item.component.scss']
})
export class NewReleaseItemComponent implements OnInit {
  @Input() newRelease !: NewReleasesItem;
  @Input() it !: number;

  constructor(private router: Router) { /*empty*/ }

  ngOnInit(): void { /*empty*/ }

  public navigate(newRelease: any): void {
    let newReleaseId: number = 0;

    newRelease.type === 'artist' ?  newReleaseId = newRelease.id : newReleaseId = newRelease.id;
    console.log('new release type:', newRelease.type);
    console.log('New Release Id:', newReleaseId);

    this.router.navigate(['user/album', newReleaseId]);
    this.router.navigate(['user/album', newReleaseId]);
  }
}
