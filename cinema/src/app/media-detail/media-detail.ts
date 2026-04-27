import { Component, Input} from '@angular/core';
import { Media } from '../models/media.models';

@Component({
  selector: 'app-media-detail',
  standalone: true,
  templateUrl: './media-detail.html',
  styleUrls: ['./media-detail.css'],
})
export class MediaDetail {
  @Input() itemSelezionato!: Media;
}
