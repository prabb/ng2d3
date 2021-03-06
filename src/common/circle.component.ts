import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'g[circle]',
  template: `
    <svg:circle
      [attr.cx]="cx"
      [attr.cy]="cy"
      [attr.r]="r"
      [attr.fill]="fill"
      [attr.stroke]="stroke"
      [attr.opacity]="circleOpacity"
      [attr.class]="classNames"
      [attr.pointer-events]="pointerEvents"
      (click)="click()"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Circle implements OnChanges {
  @Input() cx;
  @Input() cy;
  @Input() r;
  @Input() fill;
  @Input() stroke;
  @Input() data;
  @Input() classNames;
  @Input() circleOpacity;
  @Input() pointerEvents;

  @Output() clickHandler = new EventEmitter();


  ngOnChanges() {
    this.classNames = this.classNames.join(' ') + 'circle';
  }

  click() {
    this.clickHandler.emit(this.data);
  }
}
