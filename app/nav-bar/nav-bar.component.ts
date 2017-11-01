import {Component, Directive, OnInit} from '@angular/core';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  globevar: string ;
  i: Object ;
  items: Object[]=
    [
      {
        name: 'Home',
        desc: 'home'
      },
      {
        name: 'about',
        desc: 'about'
      },
      {
        name: 'details',
        desc: 'details'
      },
      {
        name: 'Csca',
        desc: 'saca'
      },
      {
        name: 'update',
        desc: ''
      }
    ];
  constructor() {
  }


  select(it: string ) {
    this.globevar = it; }
  update(itname: string , itdesc: string ) {
    class A {
      name: string ;
      desc: string ;
    }

    this.items.forEach(function (t: A ) {
      if ( t.name === itname) {
        t.desc = itdesc;
        alert('updated');

      }
    });
  }
  ngOnInit() {
  }

}
