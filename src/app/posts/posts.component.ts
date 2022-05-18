import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
    posts: any = [];

    constructor(private api: ApiService) {}

    ngOnInit(): void {
        this.getAllPosts();
    }

    getAllPosts() {
        this.api.getProduct().subscribe({
            next: (res) => {
                this.posts = res;
            },
            error: () => alert('Erro ao buscar lista de posts'),
        });
    }

    createPost(input: HTMLInputElement) {
        const post = { title: input.value };
        this.api.postProduct(post).subscribe({
            next: (res) => {
                input.value = '';
                this.getAllPosts();
            },
            error: () => {
                console.log('algo deu errado');
            },
        });
    }

    deletePost(id: number) {
        this.api.deleteProduct(id).subscribe({
            next: (res) => {
                this.getAllPosts();
            },
            error: () => {
                alert('Houve algum erro ao deletar o produto!');
            },
        });
    }

    updatePost(data: any, id: number) {
        this.api.putProduct(data, id).subscribe({
            next: (res) => {
                this.getAllPosts();
            },
            error: () => {
                alert('Erro ao atualizar (update post)');
            },
        });
    }
}
