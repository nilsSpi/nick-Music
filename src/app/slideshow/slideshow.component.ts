import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

 

  images = [
    './assets/img/dj1.jpg',
    './assets/img/dj2.jpg',
    './assets/img/dj3.jpg',
    './assets/img/dj4.jpg',
    './assets/img/dj5.jpg',
    './assets/img/dj6.jpg',
    './assets/img/dj7.jpg',
  ];
  currentImage = 0;
  headlines=[
    ' Experiance sound in a more intense way',
    'lorem ipsum dolor sit amet',
    'feel the difference' 
  ];
  currentHeadline=0;
  /**
   * boolean showImage gets calld in the html via *ngIf.
   * if true : imgElement will be displayed
   */
  showImage = true;
  /**
   * ngOnInit equals body.onload()
   * its an interface of AppComponent
   */
  ngOnInit() {
    this.updateImage();

  }
  /**
   * determens every 8 secs the index of the picture which will be displayed.
   * images[currentTmage] will be set in the html to set the img.src.
   * than it turns boolean showImage false , so that *ngIf will hide the img.
   * after 1ms (timeout) it replaces the image in the html, so that the img will regain
   * the class ImgSlider => zoomIn via @ keyframes.
   */
  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentHeadline++;
      this.currentHeadline=this.currentHeadline % this.headlines.length;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;


      setTimeout(() => {

        this.showImage = true;
      }, 1);
    }, 8000);


  }









}
