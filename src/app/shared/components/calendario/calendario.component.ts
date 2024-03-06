import { Component } from '@angular/core';
import { CalendarOptions } from 'ngx-mat-tui-calendar';
import { IOptions, ISchedule, IWeekOptions } from 'tui-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendario.component.html',
})
export class CalendarioComponent {
  options: CalendarOptions = {
    ioptions: {
      defaultView: 'month',
      taskView: true,
      month: {
        narrowWeekend: false,
      },
      week: {
        narrowWeekend: false,
        hourStart: 7,
        hourEnd: 20,
      } as IWeekOptions,
    } as IOptions,
  } as CalendarOptions;

  // in lieu of a back-end database, a Map is used for demo purposes
  schedules: Map<string, ISchedule> = new Map();

  onUserCreatedSchedule($event: any) {
    console.log($event);
  }
}
