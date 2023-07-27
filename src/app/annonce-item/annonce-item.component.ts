import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Annonce } from 'entities';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-annonce-item',
  templateUrl: './annonce-item.component.html',
  styleUrls: ['./annonce-item.component.css']
})
export class AnnonceItemComponent {
  @Input({ required: true })
  annonce!: Annonce;
  serverUrl = environment.serverUrl;

  @Output()
  delete = new EventEmitter<Annonce>();

  buttonPressed() {
    this.delete.emit(this.annonce);
  }
}
