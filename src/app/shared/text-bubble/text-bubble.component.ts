import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'text-bubble',
  templateUrl: './text-bubble.component.html',
  styleUrls: ['./text-bubble.component.css']
})
export class TextBubbleComponent implements OnInit {

  @Input() isCenter:boolean = false;
  @Input() isLeft:boolean = false;
  @Input() isRight:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
