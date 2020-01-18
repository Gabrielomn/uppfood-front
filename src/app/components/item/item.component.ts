import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../dto/Item'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() data: Item

  constructor() { }

  ngOnInit() {
  }

}