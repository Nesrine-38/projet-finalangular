import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Annonce } from 'entities';

@Component({
  selector: 'app-form-annonce',
  templateUrl: './form-annonce.component.html',
  styleUrls: ['./form-annonce.component.css']
})
export class FormAnnonceComponent {
  @Input()
  annonce:Annonce = {description: '', categories:'', date:'', status: '',photos:'',titre:'',utilisateur:''};

  @Output()
  added = new EventEmitter<Annonce>();

  handleImage(event:Event ) {
    const target = event.target as HTMLInputElement;
    if(target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(target.files[0]);
      reader.onload =  () => {
        this.annonce.photos = reader.result as string;
      };
    }
  }

  handleSubmit() {
     this.added.emit(this.annonce);
  }

}
