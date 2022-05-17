import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { TitleCasePipe } from './title-case.pipe';
import { FavoritesComponent } from './favorites/favorites.component';
import { TitleCaseInputComponent } from './title-case-input/title-case-input.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikesComponent } from './likes/likes.component';
import { ZippyComponent } from './zippy/zippy.component';
import { NgSwitchComponentComponent } from './ng-switch-component/ng-switch-component.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';


@NgModule({
    declarations: [
        AppComponent,
        CourseComponent,
        CoursesComponent,
        SummaryPipe,
        TitleCasePipe,
        FavoritesComponent,
        TitleCaseInputComponent,
        BootstrapPanelComponent,
        LikesComponent,
        ZippyComponent,
        NgSwitchComponentComponent,
        ContactFormComponent,
        SignUpFormComponent,
        ArrayFormComponent,
        PostsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [CoursesService],
    bootstrap: [AppComponent],
})
export class AppModule {}
