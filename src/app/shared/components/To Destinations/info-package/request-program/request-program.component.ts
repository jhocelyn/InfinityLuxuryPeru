import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-request-program',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './request-program.component.html',
  styleUrl: './request-program.component.css'
})
export class RequestProgramComponent {
  @Input() programName: string = '';
  name: string = '';
  email: string = '';
  number: number | null = null;
  messageSent: boolean = false;

  submitForm() {
    if (!this.name || !this.email) {
      alert('Please fill out all required fields.');
      return;
    }

    const templateParams = {
      name: this.name,
      email: this.email,
      number: this.number || 'No especificado',
      programName: this.programName,
    };

    emailjs.send('service_0v8ag41', 'BXlckQg28TnTc9R9m', templateParams, 'template_teingj6')
      .then(() => {
        this.messageSent = true;
        this.name = '';
        this.email = '';
        this.number = null;
      })
      .catch((error) => console.error('Error enviando el formulario', error));
  }
}
