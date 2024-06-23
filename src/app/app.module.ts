import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Project2IntegrationTableComponent } from './project2-integration-table/project2-integration-table.component';
import { Project2ReadIntegrationDataComponent } from './project2-read-integration-data/project2-read-integration-data.component';

@NgModule({
  declarations: [
    AppComponent,
    Project2IntegrationTableComponent,
    Project2ReadIntegrationDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
