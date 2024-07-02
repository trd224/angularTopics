import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './_components/userlist/userlist.component';
import { ProgressBarComponent } from './_components/progress-bar/progress-bar.component';
import { DependentDropdownComponent } from './_components/dependent-dropdown/dependent-dropdown.component';
import { FilterPipeComponent } from './_components/filter-pipe/filter-pipe.component';
import { NamePrefixComponent } from './_components/name-prefix/name-prefix.component';
import { NamePipePipe } from './_pipes/name-pipe.pipe';
import { FilterListPipe } from './_pipes/filter-list.pipe';
import { TemplateDrivenFormComponent } from './_components/template-driven-form/template-driven-form.component';
import { ReactiveFromComponent } from './_components/reactive-from/reactive-from.component';
import { DynamicComponentComponent } from './_components/dynamic-component/dynamic-component.component';
import { DynamicComponentContainerComponent } from './_components/dynamic-component-container/dynamic-component-container.component';
import { DynamicComponentContainer2Component } from './_components/dynamic-component-container2/dynamic-component-container2.component';
import { SubjectComponent } from './_components/subject/subject.component';
import { HeaderComponent } from './_components/header/header.component';
import { ViewChildComponent } from './_components/view-child/view-child.component';
import { ViewChildChildComponent } from './_components/view-child-child/view-child-child.component';
import { ContentChildComponent } from './_components/content-child/content-child.component';
import { ContentChildChildComponent } from './_components/content-child-child/content-child-child.component';
import { LifecycleComponent } from './_components/lifecycle/lifecycle.component';
import { LifecycleChildComponent } from './_components/lifecycle-child/lifecycle-child.component';
import { HttpInterceptorComponent } from './_components/http-interceptor/http-interceptor.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReqResInterceptorService } from './_interceptor/req-res-interceptor.service';
import { AddHeaderService } from './_interceptor/add-header.service';
import { FileUploadComponent } from './_components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    ProgressBarComponent,
    DependentDropdownComponent,
    FilterPipeComponent,
    NamePrefixComponent,
    NamePipePipe,
    FilterListPipe,
    TemplateDrivenFormComponent,
    ReactiveFromComponent,
    DynamicComponentComponent,
    DynamicComponentContainerComponent,
    DynamicComponentContainer2Component,
    SubjectComponent,
    HeaderComponent,
    ViewChildComponent,
    ViewChildChildComponent,
    ContentChildComponent,
    ContentChildChildComponent,
    LifecycleComponent,
    LifecycleChildComponent,
    HttpInterceptorComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ReqResInterceptorService, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: AddHeaderService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
