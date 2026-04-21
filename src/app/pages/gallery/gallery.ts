import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class Gallery {

  
images: string[] = [];

ngOnInit() {
  const totalImages = 59; // ⬅️ quante immagini hai nella cartella
  for (let i = 1; i <= totalImages; i++) {
    this.images.push(`/images/gallery/IMG_${i}.jpeg`);
  }
}


  currentIndex = 0;

  open(index: number) {
    this.currentIndex = index;
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
      // @ts-ignore
      new bootstrap.Modal(modal).show();
    }
  }

  next() {
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
