import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { AppComponent } from "./app.component";

//Locale configuration
import local_esES from "@angular/common/locales/es-EA";
import local_frCA from "@angular/common/locales/fr-CA";
import { registerLocaleData } from "@angular/common";
registerLocaleData(local_esES, "es");
registerLocaleData(local_frCA, "fr");


@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    SharedModule,
  ],
  providers: [ //Locale configuration
    {
      provide: LOCALE_ID,
      useValue: "es"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
