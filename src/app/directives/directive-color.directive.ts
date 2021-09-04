import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectiveColor]'
})
export class DirectiveColorDirective implements OnInit {

  constructor(
    public el: ElementRef,
    public renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'yellow');
  }

}
