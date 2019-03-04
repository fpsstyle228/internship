import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

class Item{
  purchase: string;
  done: boolean;
  price: number;

  constructor(purchase: string, price: number){
    this.price = price;
    this.purchase = purchase;
    this.done = false;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text : string = '';
  price: number = 0;


  items: Item[] = [
    {purchase:"Bread", done: false, price: 15.9},
    {purchase:"Butter", done: false, price: 12.3},
    {purchase:"Potato", done: false, price: 13.6},
    {purchase:"Cheese", done: false, price: 20.9}
    ];
  addItem(text: string, price: number): void {
    if(text == null || text.trim() == "" || price == null)
      return;
    this.items.push(new Item(text,price))
  }

}
