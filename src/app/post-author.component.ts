import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-post-author',
  templateUrl: './post-author.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class PostAuthorComponent implements OnChanges {
  @Input()
  data: any;

  author!: string;
  description!: string;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']?.currentValue == changes['data']?.previousValue)
      return;

    if (changes['data'].currentValue) {
      this.processData(changes['data']);

      this.author = changes['data'].currentValue.user.name;
      this.description = changes['data'].currentValue.user.description;

      this.changeDetector.markForCheck();
    }
  }

  private processData(data: any) {
    data.currentValue.user.name = data.currentValue.user.name.split(' ').reverse().join(' ');
    data.currentValue.user.description = data.currentValue.user.company.name + ': ' + data.currentValue.user.company.catchPhrase;
  }
}
