import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-terms-modal',
  imports: [
    NgIf
  ],
  templateUrl: './terms-modal.component.html',
  styleUrl: './terms-modal.component.css'
})
export class TermsModalComponent {
  @Input() isOpen: boolean = false; // Estado del modal
  @Output() closeModal = new EventEmitter<void>(); // Evento para cerrarlo

  close() {
    this.closeModal.emit();
  }
}
