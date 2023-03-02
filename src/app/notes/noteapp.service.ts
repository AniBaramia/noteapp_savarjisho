import { Component, Injectable } from '@angular/core';
import { Note } from './addnote/note';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoteAppService {
  constructor(private httpClient: HttpClient) {}

  add(note: Note) {
    return this.httpClient.post('http://localhost:3000/notes', note);
  }

  remove(id?: number) {
    return this.httpClient.delete('http://localhost:3000/notes/' + id);
  }

  getAll(search: string) {
    if (search) {
      return this.httpClient.get<Note>(
        'http://localhost:3000/notes?title_like&body_like=' + search
      );
    } else {
      return this.httpClient.get<Note>('http://localhost:3000/notes');
    }
  }

  getById(id?: number) {
    return this.httpClient.get('http://localhost:3000/notes/' + id);
  }

  update(note: Note) {
    return this.httpClient.put('http://localhost:3000/notes/' + note.id, note);
  }
}
