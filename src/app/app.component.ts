import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  

   images=[
     './assets/img/dj1.jpg',
     './assets/img/dj2.jpg',
     './assets/img/dj3.jpg',
     './assets/img/dj4.jpg',
     './assets/img/dj5.jpg',
     './assets/img/dj6.jpg',
     './assets/img/dj7.jpg',
   ];
   currentImage=0;
   showImage = true;

   ngOnInit() {
     this.updateImage();

   }

   updateImage(){
     setInterval(() =>{
       this.currentImage++;
       this.currentImage = this.currentImage % this.images.length;
       this.showImage=false;


       setTimeout(() => {
        this.showImage=true;
       }, 1);
     },8000);

    
   }










}
