import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm: FormGroup;
  estado: 'idle' | 'enviando' | 'exito' | 'error' = 'idle';

  private SERVICE_ID  = 'service_9a4tclc';
  private TEMPLATE_ID = 'template_ake7xyc';
  private PUBLIC_KEY  = '7csyMliabOFs9MUmU';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2)]],
      email:   ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

   get f() {
    return this.contactForm.controls;
  }

  async enviar() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.estado = 'enviando';

    try {
      await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        {
          from_name:  this.f['name'].value,
          from_email: this.f['email'].value,
          message:    this.f['message'].value,
        },
        this.PUBLIC_KEY
      );

      this.estado = 'exito';
      this.contactForm.reset();

      setTimeout(() => this.estado = 'idle', 4000);

    } catch {
      this.estado = 'error';
      setTimeout(() => this.estado = 'idle', 4000);
    }
  }
}