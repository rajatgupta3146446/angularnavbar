import {Directive, ElementRef, Renderer} from '@angular/core';


@Directive({
  selector: '[appColorchange]'
})
export class ColorchangeDirective {

  constructor(el: ElementRef , renderer: Renderer ) {

    el.nativeElement.style.color = 'red';

  }

}
