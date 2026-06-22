import { animate, state, style, transition, trigger } from "@angular/animations";

export const SLIDE_ANIMATION = trigger('slideAnimation', [
  state(
    'slideUp',
    style({ transform: 'translateY(0%)', opacity: 1 })
  ),
  state(
    'slideDown',
    style({ transform: 'translateY(100%)', opacity: 0 })
  ),
  transition('* => slideUp', [
    style({ transform: 'translateY(100%)', opacity: 0 }),
    animate('0.6s cubic-bezier(0.1, 1, 0.1, 1)'),
  ]),
  transition('* => slideDown', [
    style({ transform: 'translateY(0%)', opacity: 1 }),
    animate('0.3s ease'),
  ]),
]);
export const FADE_ANIMATION = trigger('fadeAnimation', [
  state('void', style({ opacity: 0 })),
  state('*', style({ opacity: 1 })),
  transition('void => *', [animate('1s cubic-bezier(0.3, 0, 0.3, 1)')])
]);
// UNUSED
export const SCALE = trigger('scaleAnimation', [
  transition('void => visible', [
    style({ transform: 'scale(0.5)' }),
    animate('150ms', style({ transform: 'scale(1)' }))
  ]),
  transition('visible => void', [
    style({ transform: 'scale(1)' }),
    animate('150ms', style({ transform: 'scale(0.5)' }))
  ])
])
export const LEAVE = trigger('leaveAnimation', [
  transition(':leave', [
    style({ opacity: 1 }),
    animate('50ms', style({ opacity: 0.8 }))
  ])
])



