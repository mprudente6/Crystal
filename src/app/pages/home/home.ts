import { Component } from '@angular/core';
import { Carousel } from '../../carousel/carousel';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [Carousel],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {

}
