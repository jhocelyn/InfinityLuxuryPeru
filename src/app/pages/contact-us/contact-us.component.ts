import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {NgIf} from '@angular/common';
import {TermsModalComponent} from '../../shared/components/Important/terms-modal/terms-modal.component';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact-us',
  imports: [
    FormsModule,
    TranslatePipe,
    NgIf,
    ReactiveFormsModule,
    TermsModalComponent
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  modalOpen = false;

  openModal() {
    this.modalOpen = true;
    console.log('Modal abierto');
  }

  closeModal() {
    this.modalOpen = false;
  }
  contactForm: FormGroup;
  formSubmitted = false;

  // Reemplaza con tus claves de EmailJS
  private serviceID = 'service_od5s9j8';
  private templateID = 'template_ab47wvc';
  private publicKey = '8QEKVUtg-l_vDX_uc';

  constructor(private fb: FormBuilder, private translate: TranslateService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{9,10}$')]],
      npersonas: ['', [Validators.required, Validators.min(1)]],
      fecha: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]]
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      const emailParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        npersonas: formData.npersonas,
        fecha: formData.fecha,
        terms: formData.terms ? 'Accepted' : 'Not accepted'
      };

      try {
        await emailjs.send(this.serviceID, this.templateID, emailParams, this.publicKey);
        console.log('Correo enviado con éxito');
        this.contactForm.reset();
        this.formSubmitted = true;
      } catch (error) {
        console.error('Error al enviar el correo:', error);
        alert(this.translate.instant('CONTACT.ERROR_SEND'));
      }
    } else {
      alert(this.translate.instant('CONTACT.ERROR_FIELDS'));
    }
  }

  campoInvalido(campo: string): boolean {
    const control = this.contactForm.get(campo);
    return !!(control && control.invalid && control.touched);
  }
  phoneNumber: string = '+51934983711'; // 📌 Reemplaza con tu número de WhatsApp
  message: string = 'Hola, quiero agendar una reunión personalizada.';

  openWhatsApp() {
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
    window.open(url,'_blank');
  }
}
