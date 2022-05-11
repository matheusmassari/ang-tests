import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-component',
  templateUrl: './ng-switch-component.component.html',
  styleUrls: ['./ng-switch-component.component.scss']
})
export class NgSwitchComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  viewMode: string = "";

  toggleMapView() {
    this.viewMode = "map"
  }

  toggleListView() {
    this.viewMode = "list"
  }

}
