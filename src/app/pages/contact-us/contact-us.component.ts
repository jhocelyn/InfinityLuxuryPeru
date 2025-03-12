import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-contact-us',
  imports: [
    FormsModule,
    TranslatePipe,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactForm: FormGroup;
  formSubmitted = false;
  acceptedTerms = false;
  private scriptUrl = "https://script.google.com/macros/s/AKfycbwAo0wqHVv5XfA0xDKJB4eYXvmAWv80TCuzYd-0GSno3eg5F3IT7CllPPjC-CMZU87A/exec";

  constructor(private fb: FormBuilder, private translate: TranslateService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{9,10}$')]],
      npersonas: ['', [Validators.required, Validators.min(1)]],
      fecha: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]]  // Se asegura de que el checkbox sea marcado
    });

  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Formulario enviado:', formData);

      fetch(this.scriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Datos enviados correctamente:', data);
          this.contactForm.reset();
          this.formSubmitted = true;
        })
        .catch((error) => {
          console.error('Error al enviar los datos:', error);
          alert(this.translate.instant('CONTACT.ERROR_SEND'));
        });
    } else {
      alert(this.translate.instant('CONTACT.ERROR_FIELDS'));
    }
  }

  campoInvalido(campo: string): boolean {
    const control = this.contactForm.get(campo);
    return !!(control && control.invalid && control.touched);
  }
}
