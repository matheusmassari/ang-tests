import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-title-case-input',
    templateUrl: './title-case-input.component.html',
    styleUrls: ['./title-case-input.component.scss'],
})
export class TitleCaseInputComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    toTitleCase = '';
}
