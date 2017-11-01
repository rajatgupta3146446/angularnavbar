import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-nav-bardetails',
  templateUrl: './nav-bardetails.component.html',
  styleUrls: ['./nav-bardetails.component.css']
})
export class NavBardetailsComponent implements OnInit {

  @Input('items') items;
  constructor() { }

  ngOnInit() {
  }

}
