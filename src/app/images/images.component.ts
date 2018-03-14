import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  imageUrl = "http://source.unsplash.com/";
  images = [];
  imageLinks = [];
  imageNumber = 0;
  imageNumber2 = 3;
  
  constructor(private _imageService : ImageService) { }

  passData(data) {
    this.images = data;
    console.log(this.images);
    this.extractLinks();
  }

  extractLinks() {
    for(var i = this.imageNumber; i < this.imageNumber2; i++) {
        this.imageLinks[i] = this.imageUrl + (this.images[i].post_url.substring(28 ,39));
    }
  }

  nextImages() {
    this.imageLinks = [];
    this.imageNumber = this.imageNumber + 3;
    this.imageNumber2 = this.imageNumber2 + 3;
    this.extractLinks();
  }

  getImages() {
    return this._imageService.getImage().subscribe(
      data => this.passData(data),
      error => console.log(error),
      () => console.log("Request complete")
    )
  }

  ngOnInit() {
    this.getImages();
  }
}
