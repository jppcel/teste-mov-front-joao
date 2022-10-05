import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-helper',
  templateUrl: './slider-helper.component.html',
  styleUrls: ['./slider-helper.component.scss']
})
export class SliderHelperComponent implements OnInit {

  photos = [
    {"photo":"https://via.placeholder.com/390x293.png?text=1","thumb":"https://via.placeholder.com/89x61.png?text=1"},
    {"photo":"https://via.placeholder.com/390x293.png?text=2","thumb":"https://via.placeholder.com/89x61.png?text=2"},
    {"photo":"https://via.placeholder.com/390x293.png?text=3","thumb":"https://via.placeholder.com/89x61.png?text=3"},
    {"photo":"https://via.placeholder.com/390x293.png?text=4","thumb":"https://via.placeholder.com/89x61.png?text=4"}
  ]

  selected = 0;
  constructor() { }

  ngOnInit() {

  }

  select(i:number){
    if(i < this.photos.length){
      this.selected = i;
    }
  }

  is_photo_selected(i:number){
    return i === this.selected;
  }

  prev(){
    if((this.selected - 1) >= 0){
      this.selected--;
    }else{
      this.selected = this.photos.length - 1;
    }
  }

  next(){
    if((this.selected + 1) < this.photos.length){
      this.selected++;
    }else{
      this.selected = 0;
    }
  }
}
