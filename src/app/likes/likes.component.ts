import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-likes',
    templateUrl: './likes.component.html',
    styleUrls: ['./likes.component.scss'],
})
export class LikesComponent implements OnInit {
    constructor() {}

    @Input() isLiked: boolean = false;
    @Input() numberOfLikes: number = 0;

    ngOnInit(): void {}

    toggleLike = () => {
        this.isLiked = !this.isLiked;
        this.isLiked ? (this.numberOfLikes = 1) : (this.numberOfLikes = 0);
    };
}
