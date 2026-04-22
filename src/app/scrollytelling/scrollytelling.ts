import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-scrollytelling',
  imports: [RouterModule],
  templateUrl: './scrollytelling.html',
  styleUrl: './scrollytelling.css',
})
export class Scrollytelling 
implements AfterViewInit {

  @ViewChildren('scene') scenes!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    this.scenes.forEach(scene => observer.observe(scene.nativeElement));
  }
}

