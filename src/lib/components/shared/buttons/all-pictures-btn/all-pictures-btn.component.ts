import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '../../../../pipes';
import { IconService } from '../../../../services';

@Component({
    selector: 'all-pictures-btn',
    imports: [TranslatePipe, NgIcon],
    templateUrl: './all-pictures-btn.component.html',
    styleUrl: './all-pictures-btn.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllPicturesBtnComponent {
  protected readonly icons = inject(IconService);

  @Output() readonly click = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }
}
