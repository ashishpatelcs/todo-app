import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListsComponent } from './lists/lists.component';
import { FriendsComponent } from './friends/friends.component';
import { NewListComponent } from './lists/new-list/new-list.component';
import { ViewListComponent } from './lists/view-list/view-list.component';

@NgModule({
  declarations: [HomeComponent, LayoutComponent, NavComponent, SidebarComponent, PageNotFoundComponent, ListsComponent, FriendsComponent, NewListComponent, ViewListComponent],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
