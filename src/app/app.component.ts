import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RecruitmentApp';
  post: any;

  constructor(
    public quoteService: QuoteService,
    private changeDetector: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.subscribeToQuotes();

    let that = this;
    let timeout = setTimeout(function onTimeout() {
      if (timeout)
        clearTimeout(timeout);

      that.quoteService.random();
      that.subscribeToQuotes();
      that.changeDetector.markForCheck();

      timeout = setTimeout(onTimeout, 5000);
    }, 5000);
  }

  private subscribeToQuotes() {
    this.quoteService.quote$
      .subscribe({
        next: post => {
          this.post = post;
          this.changeDetector.markForCheck();
        }
      });
  }
}
