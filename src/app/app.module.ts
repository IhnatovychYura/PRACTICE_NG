import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { AddressComponent } from './components/address/address.component';
import {HttpClientModule} from '@angular/common/http';
import { UserFromJPHComponent } from './components/user-from-jph/user-from-jph.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        UserComponent,
        AddressComponent,
        UserFromJPHComponent,
        PostComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
    ],
    providers: [],
    exports: [
        UserComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
