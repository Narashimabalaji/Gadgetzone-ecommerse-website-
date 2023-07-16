import { style } from '@angular/animations';
import { NgStyle } from '@angular/common';
import { Directive ,HostListener,ElementRef} from '@angular/core';

@Directive({
  selector: '[appImagechange]'
})
export class ImagechangeDirective {

      private originalimage:string;

      private preview:any;
  constructor(private el: ElementRef) { 

    this.originalimage=this.el.nativeElement.src;
  }

  @HostListener('click')



  imagechange(){
    var src:any=this.el.nativeElement.src;
  var prev:any=document.getElementById("preview");
  prev.src=src;

  }


  @HostListener('mouseenter')
  onMouseEnter(){
    this.changeImageOnHover();
  }

  @HostListener('mouseleave')

  onMouseLeave(){
    this.restoreOriginalImage();
  }


  private changeImageOnHover(){
    const src:any = this.el.nativeElement.src;
    const prev:any=document.getElementById("preview");

    prev.src=src;

    this.preview.src=src;
  }

  private restoreOriginalImage(){
    
    this.preview.src=this.el.nativeElement;
  }
}
