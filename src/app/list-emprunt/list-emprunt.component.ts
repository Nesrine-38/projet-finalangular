import { Component, OnInit } from '@angular/core';
import { Emprunt } from 'entities';
import { EmpruntService } from '../emprunt.service';

@Component({
  selector: 'app-list-emprunt',
  templateUrl: './list-emprunt.component.html',
  styleUrls: ['./list-emprunt.component.css']
})
export class ListEmpruntComponent implements OnInit{
  list:Emprunt[] = [];
  constructor(private empruntservice:EmpruntService) {}

  ngOnInit(): void {
    this.empruntservice.getAll().subscribe(data => this.list = data['hydra:member']);
  }
}
