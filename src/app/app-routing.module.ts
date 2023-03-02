import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnoteComponent } from './notes/addnote/addnote.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  {path: '', redirectTo:'notes', pathMatch:'full'},
  {path: 'notes', component:NotesComponent},
  {path: 'addnote', component:AddnoteComponent},
  {path: 'addnote/:noteId', component:AddnoteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
