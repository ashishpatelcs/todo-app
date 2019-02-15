import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { ListsComponent } from './lists/lists.component';
import { NewListComponent } from './lists/new-list/new-list.component';
import { ViewListComponent } from './lists/view-list/view-list.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'friends', component: FriendsComponent },
      { path: 'lists', children: [
        { path: '', component: ListsComponent, pathMatch: 'full' },
        { path: 'new', component: NewListComponent },
        { path: ':id/view', component: ViewListComponent }
      ]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
