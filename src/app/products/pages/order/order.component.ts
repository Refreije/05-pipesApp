import { Component } from '@angular/core';
import { Hero, Color } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public isUpperCase: boolean= false;
  public orderBy:keyof Hero | undefined| '' = ''

  public heroes: Hero[] =[
    {
    name: 'superman',
    canFly: true,
    color: Color.blue
    },
    {
    name: 'batman',
    canFly: false,
    color: Color.black
    },
    {
    name: 'darevevil',
    canFly: false,
    color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linerna verde',
      canFly: true,
      color: Color.green
    },
]


  public toggleUpperCase():void {

    this.isUpperCase = !this.isUpperCase;
  }

  changeorder (value : keyof Hero){

    this.orderBy = value
  }

}
