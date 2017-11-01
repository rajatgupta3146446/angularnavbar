import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-nav-bardec',
  templateUrl: './nav-bardec.component.html',
  styleUrls: ['./nav-bardec.component.css']
})
export class NavBardecComponent implements OnInit {

  @Input ('desc') desc;
  constructor() { }

  ngOnInit() {
  }

}
