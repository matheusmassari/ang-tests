import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
    title = 'List of courses';
    courses;
    isFavorite: boolean = false
    text =
        'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.';

    isActive = false;
    mail = 'exemplo@gmail.com';
    mail2 = 'exeplo2@gmail.com';
    placeholderMail = 'zedocaixaum@vai.com';
    starClass = "bi bi-star"

    course = {
        title: 'O curso completo de Angular',
        rating: 4.75123,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2022, 3, 1),
    };

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onBtnClick($event: any) {
        $event.stopPropagation();
        console.log('Clicou no botao', $event);
    }

    onEmailEnter(email: any) {
        console.log(email);
    }

    onEmailEnter2() {
        console.log(this.mail2);
    }

    onDivClick() {
        console.log('Clicou na div');
    }

    onKeyUp($event: any) {
        console.log('Teclou ENTER: ', $event.target.value);
    }

    ngOnInit(): void {}

    getTitle() {
        return this.title;
    }

    
    toggleStar = () => this.isFavorite = !this.isFavorite
}
