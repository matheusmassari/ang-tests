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

    form = new FormGroup({
        topics: new FormArray([]),
    });

    get formTopics() {
        return <FormArray>this.form.get('topics');
    }

    addTopic(input: any) {
        this.formTopics.push(new FormControl(input.value));
        input.value = '';
    }

    removeTopic(topic: any) {
        let index = this.formTopics.controls.indexOf(topic);
        this.formTopics.removeAt(index);
    }
}
