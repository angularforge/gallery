import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'image-filler',
    templateUrl: './image-filler.component.html',
    styleUrl: './image-filler.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageFillerComponent {

}
