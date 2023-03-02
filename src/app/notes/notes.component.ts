import { Component, OnInit } from '@angular/core';
import { Note } from './addnote/note';
import { NoteAppService } from './noteapp.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  search!: string;

  constructor(private noteAppService: NoteAppService) {}

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes() {
    this.noteAppService.getAll(this.search).subscribe((response: any) => {
      this.notes = response;
    });
  }

  removeOnClick(id?: number) {
    this.noteAppService.remove(id).subscribe(() => {
      this.getAllNotes();
    });
  }

  change() {
    this.getAllNotes();
  }
}
