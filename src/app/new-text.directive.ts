import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNewText]'
})
export class NewTextDirective {

  constructor(Element: ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText = "This is from custom text -- ";
  }

}
