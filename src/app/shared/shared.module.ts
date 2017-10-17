import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBubbleComponent } from './text-bubble/text-bubble.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TextBubbleComponent],
  exports: [TextBubbleComponent]
})
export class SharedModule { }
