import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request-program',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './request-program.component.html',
  styleUrl: './request-program.component.css'
})
export class RequestProgramComponent {
  @Input() programName: string = ''; // Recibe el nombre del programa desde el padre
  name: string = '';
  email: string = '';
  number: number | null = null; // El número es opcional
  messageSent: boolean = false;

  constructor(private http: HttpClient) {}

  submitForm() {
    if (!this.name || !this.email) {
      alert('Please fill out all required fields.');
      return;
    }

    const message = `La siguiente persona '${this.name}' con el correo '${this.email}' pidió el siguiente programa '${this.programName}'. Su número es '${this.number ?? 'No especificado'}'.`;

    this.http.post('https://tu-api.com/enviar-correo', { message }).subscribe({
      next: () => {
        this.messageSent = true;
        this.name = '';
        this.email = '';
        this.number = null;
      },
      error: (err) => console.error('Error enviando el formulario', err),
    });
  }
}
