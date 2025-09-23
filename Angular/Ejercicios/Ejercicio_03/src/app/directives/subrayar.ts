import { Directive, Renderer2, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSubrayar]'
})
export class Subrayar {
  @Input () appSubrayar: string='underline';
  constructor(private el:ElementRef,private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.el.nativeElement,'textDecoration',this.appSubrayar);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.removeStyle(this.el.nativeElement,'textDecoration');
  }
}
