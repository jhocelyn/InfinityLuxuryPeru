import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsItem} from '../../../shared/models/NewsItem.model';
import {Subscription} from 'rxjs';
import {newService} from '../../../services/news.service';
import {LangChangeEvent, TranslatePipe, TranslateService} from '@ngx-translate/core';
import {BannerComponent} from '../../../shared/components/To Destinations/list-destinations/banner/banner.component';
import {NewCardComponent} from '../../../shared/components/Important/new-card/new-card.component';
import {NgForOf, NgIf} from '@angular/common';
import {BlogSectionComponent} from '../../../shared/components/Important/blog-section/blog-section.component';
import {FilterSidebarComponent} from '../../../shared/components/Important/filter-sidebar/filter-sidebar.component';

@Component({
  selector: 'app-list-news',
  imports: [
    TranslatePipe,
    NewCardComponent,
    NgForOf,
    BlogSectionComponent,
    FilterSidebarComponent
  ],
  templateUrl: './list-news.component.html',
  styleUrl: './list-news.component.css'
})
export class ListNewsComponent implements OnInit,OnDestroy{
  allNews: NewsItem[] = [];
  filteredNews: NewsItem[] = [];
  filterCity: string = '';
  filterCategory: string = '';
  searchTerm: string = '';
  cities: string[] = ['', 'lima', 'arequipa', 'puno', 'cusco', 'chachapoyas', 'ica', 'nazca', 'puerto-maldonado'];
  categories: string[] = ['', 'culture', 'family', 'adventure', 'gastronomy', 'romance', 'cultural-heritage'];

  private langSubscription?: Subscription;

  constructor(private newsService: newService, private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadNewsData();

    // Suscripción a cambio de idioma
    this.langSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadNewsData();
    });
  }

  loadNewsData(): void {
    this.newsService.getNews().subscribe(data => {
      this.allNews = data;
      this.filteredNews = [...this.allNews];
      this.applyFilters(); // Aplica filtros después de cargar datos
      console.log("Noticias cargadas:", this.allNews);
    });
  }

  setCityFilter(city: string): void {
    this.filterCity = city;
    this.applyFilters();
  }

  setCategoryFilter(category: string): void {
    this.filterCategory = category;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredNews = this.allNews.filter(news => {
      const matchesSearch = this.searchTerm
        ? news.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        : true;
      const matchesCity = this.filterCity
        ? news.city?.toLowerCase() === this.filterCity.toLowerCase()
        : true;
      const matchesCategory = this.filterCategory
        ? news.category?.toLowerCase() === this.filterCategory.toLowerCase()
        : true;
      return matchesSearch && matchesCity && matchesCategory;
    });
  }
  onSearchChange(term: string): void {
    this.searchTerm = term;
    this.applyFilters();
  }

  ngOnDestroy(): void {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }
}
