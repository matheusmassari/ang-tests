import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
    constructor() {}

    @Input() isFavorite: boolean = false;
    @Output() change = new EventEmitter();

    ngOnInit(): void {}

    toggleStar = () => {
        this.isFavorite = !this.isFavorite;
        this.change.emit();
    };
}
