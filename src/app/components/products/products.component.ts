import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products:Iproduct[];
  categories :Icategory[];
  selectedCategoryId:number = 0
  totalPrice:number = 0;

  constructor(){
    this.products = [
      {id:1, name:'dell laptop' , price:50000, quantity:2 , imgUrl:'https://fakeimg.pl/300/' , catId:1 },
      {id:2, name:'hp laptop' , price:60000, quantity:2 , imgUrl:'https://fakeimg.pl/300/' , catId:1 },
      {id:3, name:'iphone mobile' , price:70000, quantity:2 , imgUrl:'https://fakeimg.pl/300/' , catId:2 },
      {id:4, name:'oppo mobile' , price:80000, quantity:2 , imgUrl:'https://fakeimg.pl/300/' , catId:2 },
      {id:5, name:'tablet oppo' , price:40000, quantity:2 , imgUrl:'https://fakeimg.pl/300/' , catId:3 },
      {id:6, name:'tablet iphone' , price:200000, quantity:2 , imgUrl:'https://fakeimg.pl/300/' , catId:3 },
    ]

    this.categories = [
      {id:1 , name :'Laptop'},
      {id:2 , name :'Mobile'},
      {id:3 , name :'Tablit'},
    ]
  }

  buy(count:string , price:number){
    this.totalPrice = this.totalPrice + (Number(count) * price);
    console.log(this.totalPrice)
  }
}
