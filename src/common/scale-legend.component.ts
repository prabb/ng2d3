import {
  Component,
  Input,
  OnChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'scale-legend',
  template: `
    <div
      class="scale-legend"
      [style.width]="width + 'px'">
      <div [style.height]="(height - 70) + 'px'">

        <div class="scale-legend-label">
          <span>{{ valueRange[0].toLocaleString() }}</span>
        </div>

        <div class="scale-legend-wrap"
          [style.background]="gradient">
        </div>

        <div class="scale-legend-label">
          <span>{{ valueRange[1].toLocaleString() }}</span>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScaleLegend implements OnChanges {
  @Input() valueRange;
  @Input() colors;
  @Input() height;
  @Input() width;

  gradient: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnChanges() {
    let gradientValues = this.gradientString(this.colors.range(), this.colors.domain());
    this.gradient = this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(to bottom, ${gradientValues})`);
  }

  /**
   * Generates the string used in the gradient stylesheet properties
   * @param  {array} colors array of colors
   * @param  {array} splits array of splits on a scale of (0, 1)
   * @return {string}
   */
  gradientString(colors, splits) {
    // add the 100%
    splits.push(1);
    let pairs = [];
    colors.forEach((c, i) => {
      pairs.push(`${c} ${Math.round(splits[i] * 100)}%`);
    });

    return pairs.join(', ');
  }
}
