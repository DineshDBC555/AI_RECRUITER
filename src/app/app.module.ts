import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxBootstrapIconsModule,allIcons  } from 'ngx-bootstrap-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { FooterStyleOneComponent } from './components/common/footer-style-one/footer-style-one.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { NavbarStyleThreeComponent } from './components/common/navbar-style-three/navbar-style-three.component';
import { FooterStyleTwoComponent } from './components/common/footer-style-two/footer-style-two.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { EmployersComponent } from './components/pages/employers/employers.component';
import { EmployersDetailsComponent } from './components/pages/employers-details/employers-details.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ResumeDetailsComponent } from './components/pages/resume-details/resume-details.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { AboutComponent } from './components/pages/about/about.component';
import { JobsComponent } from './components/pages/jobs/jobs.component';
import { FavouriteJobsComponent } from './components/pages/favourite-jobs/favourite-jobs.component';
import { JobDetailsComponent } from './components/pages/job-details/job-details.component';
import { PostAJobComponent } from './components/pages/post-a-job/post-a-job.component';
import { CandidatesComponent } from './components/pages/candidates/candidates.component';
import { CandidatesDetailsComponent } from './components/pages/candidates-details/candidates-details.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
//  import { NgSelectModule } from '@ng-select/ng-select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
//  import { TimeAgoPipe } from 'time-ago-pipe';
import { TimeagoModule, TimeagoIntl, TimeagoFormatter, TimeagoCustomFormatter } from 'ngx-timeago';
import { DayAgoPipe } from './services/Day-ago-pipe';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FilterPipe } from './services/filter.pipe';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';


@NgModule({
  declarations: [
    DayAgoPipe,
    FilterPipe,
    AppComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    PreloaderComponent,
    NavbarStyleOneComponent,
    FooterStyleOneComponent,
    NavbarStyleTwoComponent,
    NavbarStyleThreeComponent,
    FooterStyleTwoComponent,
    LoginComponent,
    RegisterComponent,
    EmployersComponent,
    EmployersDetailsComponent,
    DashboardComponent,
    ResumeDetailsComponent,
    TestimonialsComponent,
    PricingComponent,
    FaqComponent,
    ComingSoonComponent,
    ErrorComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    AboutComponent,
    JobsComponent,
    FavouriteJobsComponent,
    JobDetailsComponent,
    PostAJobComponent,
    CandidatesComponent,
    CandidatesDetailsComponent,
    BlogDetailsComponent,
    BlogComponent,
    ContactComponent,
    //  TimeAgoPipe
    
  ],
 
  imports: [
    AutocompleteLibModule,
    MatButtonModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    MatChipsModule,

    HttpClientModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    BrowserAnimationsModule,
    // NgSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    MatChipsModule,
    TimeagoModule.forRoot({formatter: { provide: TimeagoFormatter, useClass: TimeagoCustomFormatter },})
  ],
  providers: [DatePipe,TimeagoIntl],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
