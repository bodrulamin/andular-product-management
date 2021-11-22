import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  message : String = 'hello';
  count : number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
