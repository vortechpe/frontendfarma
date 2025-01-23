import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { ProductService } from './core/service/product.service';
import { CountryService } from './core/service/country.service';
import { CustomerService } from './core/service/customer.service';
import { EventService } from './core/service/event.service';
import { IconService } from './core/service/icon.service';
import { NodeService } from './core/service/node.service';
import { PhotoService } from './core/service/photo.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SpinnerComponent } from './core/shared/spinner.component';
import { SpinnerModule } from './core/shared/spinner.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './core/components/Interceptors/http.interceptor';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule,ProgressSpinnerModule,SpinnerModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
        MessageService,ConfirmationService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
