import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { ReduxDemoComponent } from './components/redux-demo/redux-demo.component';
import { GetterComponent } from './features/comminications/components/getter/getter.component';
import { SetterComponent } from './features/comminications/components/setter/setter.component';
import { CommunicationsModule } from './features/communications/communications.module';
import { reducers } from './reducers';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    DashboardComponent,
    FooterComponent,
    SetterComponent,
    GetterComponent,
    ReduxDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    CommunicationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
