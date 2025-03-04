import {Component, EventEmitter, Output} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    NgClass,
    NgIf
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
  activeSubMenu: string | null = null;
  activeSubSubMenu: string | null = null;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.activeSubMenu = null; // Cierra cualquier submenú abierto al cerrar el menú principal
    this.activeSubSubMenu = null; // Cierra cualquier submenú abierto al cerrar el menú principal
  }

  openSubMenu(menu: string) {
    this.activeSubMenu = menu;
    this.activeSubSubMenu=null;
  }

  closeSubMenu() {
    this.activeSubMenu = null;
    this.activeSubSubMenu=null;
  }

  closeAllMenus() {
    this.isMenuOpen = false;
    this.activeSubMenu = null;
    this.activeSubSubMenu = null;
  }

  openSubSubMenu(menu: string) {
    this.activeSubSubMenu = menu;
  }

  closeSubSubMenu() {
    this.activeSubSubMenu = null;
  }

}
