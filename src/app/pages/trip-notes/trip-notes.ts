import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar';

@Component({
  selector: 'app-trip-notes',
  standalone: true,
  imports: [FormsModule, NavbarComponent],
  templateUrl: './trip-notes.html',
  styleUrls: ['./trip-notes.css']
})
export class TripNotes {
  note = '';
  notes: string[] = [];

  addNote() {
    if (!this.note.trim()) return;

    this.notes.push(this.note);
    this.note = '';
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
  }
}