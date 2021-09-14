import {trigger, animate, transition, style, query, group} from '@angular/animations';

export const slideAnimation =
  trigger('slideAnimation', [
    transition(':increment', slideRight()),
    transition(':decrement', slideLeft())
  ]);

function slideLeft() {
  return [
    query(':enter, :leave', style({position: 'fixed', width: '90%'}), {optional: true}),
    group([
      query(':enter', [style({transform: 'translateX(-100%)'}), animate('600ms ease-out', style({transform: 'translateX(0%)'}))], {
        optional: true,
      }),
      query(':leave', [style({transform: 'translateX(0%)'}), animate('600ms ease-out', style({transform: 'translateX(100%)'}))], {
        optional: true,
      }),
    ])
  ];
}

function slideRight() {
  return [
    query(':enter, :leave', style({position: 'fixed', width: '90%'}), {optional: true}),
    group([
      query(':enter', [style({transform: 'translateX(100%)'}), animate('600ms ease-out', style({transform: 'translateX(0%)'}))], {
        optional: true,
      }),
      query(':leave', [style({transform: 'translateX(0%)'}), animate('600ms ease-out', style({transform: 'translateX(-100%)'}))], {
        optional: true,
      }),
    ])
  ];
}
