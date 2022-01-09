import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-tags',
  templateUrl: './add-tags.component.html',
  styleUrls: ['./add-tags.component.css']
})
export class AddTagsComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @Output() newItemEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  /*set the separator keys.*/

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  /*create the tags list.*/

  Tags: string[] = [];

  /*our custom add method which will take
      matChipInputTokenEnd event as input.*/
  add(event: MatChipInputEvent): void {

    /*we will store the input and value in local variables.*/

    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {

      /*the input string will be pushed to the tag list.*/

      this.Tags.push(value);
      this.newItemEvent.emit(this.Tags);
    }

    if (input) {

      /*after storing the input we will clear the input field.*/

      input.value = '';
    }
  }

  /*custom method to remove a tag.*/

  remove(tag: string): void {
    const index = this.Tags.indexOf(tag);

    if (index >= 0) {

      /*the tag of a particular index is removed from the tag list.*/

      this.Tags.splice(index, 1);
      this.newItemEvent.emit(this.Tags);
    }
  }

}
