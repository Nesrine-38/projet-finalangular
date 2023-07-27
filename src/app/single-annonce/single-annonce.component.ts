import { Component, OnInit } from '@angular/core';
import { Annonce } from 'entities';
import { AnnonceService } from '../annonce.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-annonce',
  templateUrl: './single-annonce.component.html',
  styleUrls: ['./single-annonce.component.css']
})
export class SingleAnnonceComponent implements  OnInit {
  annonce!: Annonce;
  editing = false;
  constructor(private route:ActivatedRoute, private annonceservice:AnnonceService){}

  ngOnInit(): void {
    this.route.params.subscribe(params =>
      this.annonceservice.fetchOne(params['id']).subscribe(data => this.annonce = data)
    );
  }

  updateAnnonce(id:number,annonce:Annonce) {
    this.annonceservice.update(id,annonce).subscribe(data => {this.annonce = data; this.editing = false;});
  }
}
