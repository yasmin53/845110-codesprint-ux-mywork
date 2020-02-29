import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Card } from 'src/models/cards';
import { HttpClient } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class GiftcardService {

  
  httpUrl='http://localhost:3000/cards/';

  constructor(private httpClient:HttpClient) { }

  getTodayDate(){
    return new Date();
  }
getAllCards():Observable<Card[]>{
  return this.httpClient.get<Card[]>(this.httpUrl);
}

saveCard(card:Card):Observable<Card>{
  return this.httpClient.post<Card>(this.httpUrl,card);
}

deleteCard(id:number):Observable<Card>{
  return this.httpClient.delete<Card>(this.httpUrl+ id);
}
updateCardInfo(card :Card) :Observable<Card>{

  return this.httpClient.put<Card>(this.httpUrl + card.id, card);
}

getCardById(id:number): Observable<Card>{

  return this.httpClient.get<Card>(this.httpUrl+id);

   
}
}
