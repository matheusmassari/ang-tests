import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    getProduct() {
        return this.http.get<any>('http://localhost:3000/posts/');
    }

    postProduct(data: any) {
        return this.http.post<any>('http://localhost:3000/posts/', data);
    }

    putProduct(data: any, id: number) {
        return this.http.put<any>('http://localhost:3000/posts/' + id, data);
    }

    deleteProduct(id: number) {
        return this.http.delete<any>('http://localhost:3000/posts/' + id);
    }
}
