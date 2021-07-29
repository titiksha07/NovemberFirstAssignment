import { Component, Output, ViewChild } from '@angular/core';
import { MaterialTableComponent } from './material-table/material-table.component';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NovemberFirst';
  matTable: MaterialTableComponent;
  constructor(public shared: SharedService){}


}
