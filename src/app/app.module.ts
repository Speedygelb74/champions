import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './templates/header/header.component';
import { ChampionsGalleryComponent } from './templates/champions/champions-gallery/champions-gallery.component';
import { ChampionsCardComponent } from './templates/champions/champions-card/champions-card.component';
import { LoaderComponent } from './templates/_shared/loader/loader.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ScrollToTopComponent } from './templates/_shared/scroll-to-top/scroll-to-top.component';
import { ChampionsComponent } from './templates/champions/champions.component';
import { ChampionsDetailComponent } from './templates/champions-detail/champions-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChampionsGalleryComponent,
    ChampionsCardComponent,
    LoaderComponent,
    ScrollToTopComponent,
    ChampionsComponent,
    ChampionsDetailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
