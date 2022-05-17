import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
    posts: any = [];

    constructor(private http: HttpClient) {
        http.get('http://localhost:3000/posts').subscribe({
            next: (res) => (this.posts = res),
            error: () => console.log('algo deu errado!'),
        });
    }

    ngOnInit(): void {
        
    }
}
