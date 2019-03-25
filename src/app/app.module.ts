import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { ReduxDemoComponent } from './components/redux-demo/redux-demo.component';
import { CounterEffects } from './effects/counter.effects';
import { CommunicationsModule } from './features/communications/communications.module';
import { LibraryModule } from './features/library/library.module';
import { TodolistModule } from './features/todolist/todolist.module';
import { reducers } from './reducers';
import { ListComponent } from './features/libray/components/list/list.component';
import { EntryComponent } from './features/libray/components/entry/entry.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    DashboardComponent,
    FooterComponent,
    ReduxDemoComponent,
    ListComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommunicationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(), // can be removed from production
    EffectsModule.forRoot([CounterEffects]),
    TodolistModule,
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
