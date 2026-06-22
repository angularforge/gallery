import { DOCUMENT } from '@angular/common';
import { Directive, EventEmitter, HostListener, inject, Output } from '@angular/core';

@Directive({
  selector: '[preventBackNavigation]',
  standalone: true,
})
export class PreventBackNavigationDirective {
  @Output() readonly navigationPrevented = new EventEmitter<void>();

  private readonly document = inject(DOCUMENT);

  constructor() {
    this.document.defaultView?.history.pushState(null, '', this.document.location.href);
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: PopStateEvent): void {
    this.document.defaultView?.history.pushState(null, '', this.document.location.href);
    this.navigationPrevented.emit();
    event.preventDefault();
  }
}
