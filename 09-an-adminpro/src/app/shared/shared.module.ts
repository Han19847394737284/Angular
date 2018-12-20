import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NonepagefoundComponent } from './nonepagefound/nonepagefound.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NonepagefoundComponent
  ],
  imports: [],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NonepagefoundComponent
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
