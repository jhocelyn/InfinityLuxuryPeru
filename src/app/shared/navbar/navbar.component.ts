import {Component, EventEmitter, Output} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    NgClass,
    TranslatePipe
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() languageChanged = new EventEmitter<string>();
  constructor(private translate: TranslateService) {}

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.languageChanged.emit(lang);
  }
  isMenuOpen = false;
  isDesktop= window.innerWidth > 1024;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
