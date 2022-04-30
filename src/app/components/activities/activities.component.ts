import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  obligatoryActivities: Activity[] = [];
  notObligatoryActivities: Activity[] = [];

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.obligatoryActivities = this.activityService.getObligatoryActivities();
    this.notObligatoryActivities =
      this.activityService.getNotObligatoryActivities();
  }
}
