import { Directive, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[appUnderline]'
})
export class UnderlineDirective {

  constructor(private elementRef: ElementRef) {

    this.elementRef.nativeElement.style.textDecoration = 'underline';
  }

}
