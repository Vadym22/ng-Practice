import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BasicComponent } from './components/basic/basic.component';
import { CubePipe } from './pipes/cube.pipe';
import { BasicChildComponent } from './components/basic-child/basic-child.component';
import { UnderlineDirective } from './directives/underline.directive';
import { AdvancedComponent } from './components/advanced/advanced.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: BasicComponent},
  { path: 'advanced', component: AdvancedComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    CubePipe,
    BasicChildComponent,
    UnderlineDirective,
    AdvancedComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
