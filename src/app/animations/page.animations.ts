import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
  AnimationTriggerMetadata
} from '@angular/animations';

export const fadeInUp: AnimationTriggerMetadata = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const fadeIn: AnimationTriggerMetadata = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms ease-in', style({ opacity: 1 }))
  ])
]);

export const slideInLeft: AnimationTriggerMetadata = trigger('slideInLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-50px)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

export const slideInRight: AnimationTriggerMetadata = trigger('slideInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(50px)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

export const scaleIn: AnimationTriggerMetadata = trigger('scaleIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.9)' }),
    animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
  ])
]);

export const staggerList: AnimationTriggerMetadata = trigger('staggerList', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger('100ms', [
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

export const hoverScale: AnimationTriggerMetadata = trigger('hoverScale', [
  state('default', style({ transform: 'scale(1)' })),
  state('hovered', style({ transform: 'scale(1.05)' })),
  transition('default <=> hovered', animate('200ms ease-in-out'))
]);

export const rotate: AnimationTriggerMetadata = trigger('rotate', [
  transition('* => *', [
    animate('500ms ease-in-out', style({ transform: 'rotate(360deg)' }))
  ])
]);
