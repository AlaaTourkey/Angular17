import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input() externalColor :string = "red";

  constructor(private ele:ElementRef) {
    this.ele.nativeElement.style.backgroundColor="white"
  }

  @HostListener('mouseover') over(){
    this.ele.nativeElement.style.backgroundColor=this.externalColor
  }

  @HostListener('mouseout') out(){
    this.ele.nativeElement.style.backgroundColor = "white"
  }

}
