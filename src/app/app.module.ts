import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { PostCreateComponent } from './post-create/post-create.component'
import { PostListComponent } from './post-create/post-list/post-list.component'
import { MaterialModule } from './material.module'
import { HeaderComponent } from './header/header.component'

@NgModule({
    declarations: [
        AppComponent,
        PostCreateComponent,
        PostListComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        BrowserAnimationsModule,

        MaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
