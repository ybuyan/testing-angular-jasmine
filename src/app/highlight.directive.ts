import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[testingHighlight]'
})
export class HighlightDirective implements OnChanges {

  // tslint:disable-next-line: no-input-rename
  @Input('highlight')
  bgColor: string;

  defaultColor = 'yellow';

  constructor(
    private el: ElementRef
  ) { }

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.bgColor || this.defaultColor;
  }
}
