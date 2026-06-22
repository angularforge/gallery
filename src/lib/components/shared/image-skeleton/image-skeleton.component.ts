import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'image-skeleton',
    templateUrl: './image-skeleton.component.html',
    styleUrl: './image-skeleton.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSkeletonComponent {

}
