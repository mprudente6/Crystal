import { Component } from '@angular/core';
import { Carousel } from '../../carousel/carousel';
import { Scrollytelling } from '../../scrollytelling/scrollytelling';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [Scrollytelling],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {

}
