import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {
  @Input() public showModal: boolean = false;
  @Output() private showModalChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { /*empty*/ }

  ngOnInit(): void { /*empty*/ }

  public getShowErrorChange(): any {
    return this.showModalChange;
  }

  public closeModal(): void {
    this.showModalChange.emit(!this.showModal);
  }

  public getShowModal(): any {
    return this.showModalChange;
  }

  public closeShowModal(): void {
    this.showModalChange.emit(!this.showModal);
  }

}
