import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[pkmnBorderCard]',
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    this.setHeight(180)
    this.setBorder('#f5f5f5')
    this.borderColor = 'red'
  }

  @Input('pkmnBorderCard') borderColor: string

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || 'aqua')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5')
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `4px solid ${color}`
  }
}
