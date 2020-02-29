import { Component, OnInit } from '@angular/core';
import { GiftcardService } from '../giftcard.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Card } from 'src/models/cards';
@Component({
  selector: 'app-viewgiftcards',
  templateUrl: './viewgiftcards.component.html',
  styleUrls: ['./viewgiftcards.component.css']
})
export class ViewgiftcardsComponent implements OnInit {
  constructor(private giftcardService:GiftcardService, private router:Router,private formBuilder:FormBuilder) { }
  cards: Card[];
  ngOnInit() {
    this.giftcardService.getAllCards().subscribe(data =>{
      this.cards=data;
    });
  }
  deleteCard(card:Card){
this.giftcardService.deleteCard(card.id).subscribe();
this.cards=this.cards.filter(u => u !==card);
  }
 updateCard(card:Card){
  localStorage.removeItem('cardId');
  localStorage.setItem('cardId',card.id.toString());
  this.router.navigate(['update-giftcards']);
 }
}