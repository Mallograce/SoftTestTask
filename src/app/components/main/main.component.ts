import { Component, inject, OnInit } from '@angular/core';
import { LibraryService } from '../../services/library.service';
import { JsonPipe } from '@angular/common';
import { Library } from '../../Interfaces/library';

@Component({
  selector: 'app-main',
  imports: [
    JsonPipe
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {

  public library: Library[] = [];
  private libraryService = inject(LibraryService);

  ngOnInit() {
    this.libraryService.getLibraries().subscribe((value: Library[]) => {
      this.library = value;
    })
  }
}
