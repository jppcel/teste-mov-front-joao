import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/_interfaces/photo';

@Component({
  selector: 'app-slider-helper',
  templateUrl: './slider-helper.component.html',
  styleUrls: ['./slider-helper.component.scss']
})
export class SliderHelperComponent implements OnInit {

  @Input()
  photos:Array<Photo> = []

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
