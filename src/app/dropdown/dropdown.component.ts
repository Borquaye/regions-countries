import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownItem } from './models/dropdown-item.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  _data?: DropdownItem[];

  @Input() disabled: boolean = false;
  @Input() placeholderText: string = 'Select...';
  
  @Input() set data(data: DropdownItem[]) {
    const placeHolderItem = { label: this.placeholderText, value: '' };
    if (data) {
      this._data = [placeHolderItem, ...data];
    } else {
      this._data = [placeHolderItem]
    }
  }

  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  onValueChange(newValue: string): void {
    this.valueChange.emit(newValue);
  }

}
