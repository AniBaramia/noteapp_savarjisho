import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NoteAppService } from '../noteapp.service';
import { Note } from './note';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss'],
})
export class AddnoteComponent implements OnInit {
  note: Note = {
    title: '',
    body: '',
  };
  constructor(
    private noteAppService: NoteAppService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('noteId');

    if (id) {
      this.noteAppService.getById(+id).subscribe((note) => {
        this.note = note;
      });
    }
  }

  saveOnClick() {
    if (this.note.id == undefined) {
      this.noteAppService.add(this.note).subscribe(() => {
        this.router.navigate(['notes']);
      });
    } else {
      this.noteAppService.update(this.note).subscribe(() => {
        this.router.navigate(['notes']);
      });
    }
  }
}
