import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../../types/location.interface';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit {
  @Input() unitsList: Location[] = [];

  constructor() {}

  ngOnInit(): void {}
}
