import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
    contactMethods = [
        { id: 1, method: 'email' },
        { id: 2, method: 'whatsapp' },
        { id: 3, method: 'twitter' },
        { id: 4, method: 'linkedin' },
    ];

    log(x: any) {
        console.log(x);
    }

    onCtFormSubmit(refContactForm: object) {
        console.log(refContactForm);
    }
}
