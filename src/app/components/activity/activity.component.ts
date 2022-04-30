import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
})
export class ActivityComponent implements OnInit {
  htmlFile: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {
    let activity = this.route.snapshot.params['title'];
    let path = 'assets/activities/' + activity + '.html';
    this.http
      .get(path, {
        responseType: 'text',
      })
      .subscribe((res) => {
        this.htmlFile = this.sanitizer.bypassSecurityTrustHtml(res);
      })
  }

  ngOnInit(): void {}
}
