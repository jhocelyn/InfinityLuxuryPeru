import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-filter-sidebar',
  imports: [
    NgClass,
    FormsModule,
    TranslatePipe,
    NgForOf
  ],
  templateUrl: './filter-sidebar.component.html',
  styleUrl: './filter-sidebar.component.css'
})
export class FilterSidebarComponent {
  @Input() cities: string[] = [];
  @Input() categories: string[] = [];
  @Input() filterCity: string = '';
  @Input() filterCategory: string = '';
  @Input() searchTerm: string = '';

  @Output() cityChange = new EventEmitter<string>();
  @Output() categoryChange = new EventEmitter<string>();
  @Output() searchChange = new EventEmitter<string>();

  onCityChange(city: string): void {
    this.cityChange.emit(city);
  }

  onCategoryChange(category: string): void {
    this.categoryChange.emit(category);
  }

  onSearchChange(): void {
    this.searchChange.emit(this.searchTerm);
  }
}
