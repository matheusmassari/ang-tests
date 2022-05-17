import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-array-form',
    templateUrl: './array-form.component.html',
    styleUrls: ['./array-form.component.scss'],
})
export class ArrayFormComponent {
    constructor() {}

    title: string = 'Lista 2.0';

    form = new FormGroup({
        topics: new FormArray([]),
        incompletos: new FormArray([]),
    });

    get formTopics() {
        return <FormArray>this.form.get('topics');
    }

    get formIncompletos() {
        return <FormArray>this.form.get('incompletos');
    }

    addTopic(input: any) {
        this.formTopics.push(new FormControl(input.value));
        input.value = '';
    }

    removeTopic(topic: any) {
        let index = this.formTopics.controls.indexOf(topic);
        this.formIncompletos.push(
            new FormControl(this.formTopics.controls[index].value)
        );
        this.formTopics.removeAt(index);
    }

    removeTopic2(topic: any) {
        let index = this.formIncompletos.controls.indexOf(topic);
        this.formTopics.push(
            new FormControl(this.formIncompletos.controls[index].value)
        );

        this.formTopics.removeAt(index);
    }
}
