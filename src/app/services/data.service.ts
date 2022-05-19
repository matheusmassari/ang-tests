import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @Injectable({
//     providedIn: 'root',
// })
export abstract class DataService {
    // private readonly url: string;
    constructor(protected apiUrl: string, private http: HttpClient) {}

    getAll() {
        return this.http.get<any>(this.apiUrl);
    }

    create(resource: any) {
        return this.http.post<any>(this.apiUrl, resource);
    }

    update(resource: any, id: number) {
        return this.http.put<any>(this.apiUrl + id, resource);
    }

    delete(id: number) {
        return this.http.delete<any>(this.apiUrl + id);
    }
} 
