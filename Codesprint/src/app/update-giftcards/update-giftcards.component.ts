import { Component, OnInit } from '@angular/core';
import { GiftcardService } from '../giftcard.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-giftcards',
  templateUrl: './update-giftcards.component.html',
  styleUrls: ['./update-giftcards.component.css']
})
export class UpdateGiftcardsComponent implements OnInit {
  updateCard:FormGroup;
  constructor(private formBuilder:FormBuilder,private giftcardService:GiftcardService,private router:Router) { }
  ngOnInit(){
    this.updateCard=this.formBuilder.group({
      id: [],
      rupees: ['', Validators.required],
      paisa: ['', Validators.required],
      street:['', Validators.required],
     state: ['', Validators.required],
     city:['', Validators.required],
     country:['', Validators.required],
     pincode:['', Validators.required],
     buyer_fname:['', Validators.required],
     buyer_lname:['', Validators.required],
     rec_fname:['', Validators.required],
     rec_lname:['', Validators.required],
     email:['', Validators.required],
     p1:['', Validators.required],
     p2:['', Validators.required],
     p3:['', Validators.required],
     p4:['', Validators.required],
     p5:['', Validators.required],
     p6:['', Validators.required],
     p7:['', Validators.required],
     p8:['', Validators.required],
     p9:['', Validators.required],
     p10:['', Validators.required],
  }
  );
  const id=localStorage.getItem('cardId');
  if(+id>0){
    this.giftcardService.getCardById(+id).subscribe(user =>{
      this.updateCard.patchValue(user);
    });
  }
}
updateTheCard(){
  this.giftcardService.updateCardInfo(this.updateCard.value).subscribe(u=>{
this.router.navigate(['viewgiftcards']);
  })
}
}