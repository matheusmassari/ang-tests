import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Angular app ';

    post = {
        title: 'Title',
        isFavorite: true,
    };

    tweet = {
        isLiked: false,
        numberOfLikes: 0,        
    }

    onFavoritesChange = () => console.log('Favorites has changed');
}
