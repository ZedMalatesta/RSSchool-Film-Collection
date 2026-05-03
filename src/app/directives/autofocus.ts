import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({ selector: '[appAutofocus]' })
export class Autofocus implements AfterViewInit {
  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
