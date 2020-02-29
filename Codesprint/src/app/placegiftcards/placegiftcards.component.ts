import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GiftcardService } from '../giftcard.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-placegiftcards',
  templateUrl: './placegiftcards.component.html',
  styleUrls: ['./placegiftcards.component.css']
})
export class PlacegiftcardsComponent implements OnInit {
  registerCard:FormGroup  ;
  constructor(private formBuilder:FormBuilder,private giftcardService:GiftcardService,private router:Router) { }
  ngOnInit() {
    this.registerCard=this.formBuilder.group({
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
    });
  }
    addCard(){
      this.giftcardService.saveCard(this.registerCard.value).subscribe(data =>
        {
          this.router.navigate(['/viewgiftcards'])
        });
  
    }
  
    onSubmit(){
      console.log(this.registerCard.value);
    }
}