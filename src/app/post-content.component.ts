import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class PostContentComponent {
  @Input()
  data: any;

  getTitle(): string {
    return this.data?.title;
  }

  getContent(): string {
    return this.data?.body;
  }
}
