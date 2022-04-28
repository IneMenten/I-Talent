import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit {
  text: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => (this.text = params['activityId']));
  }

  ngOnInit(): void {}
}
