
export interface Annonce{
  id?:number;
  description:string;
  categories:string;
  date:string;
  status:string;
  photos:string;
  titre:string;
  utilisateur:Utilisateur;
}
export interface Utilisateur{
  id?:number;
  nom:string;
  adresse:string;
  email:string;
  telephone:string;
  role?:string;
}

export interface Emprunt{
  id?:number;
  date_debut:string;
  date_fin:string;
  status:string;
  utilisateur:Utilisateur;
  annonce:string;
}

export interface ApiList<T> {
  'hydra:member': T[];
  'hydra:totalItems':number
}
