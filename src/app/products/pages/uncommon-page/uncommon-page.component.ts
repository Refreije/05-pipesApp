import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {


  //i18nSelect
  public name: string = 'Hugo';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'

  }


  //i18nPlural
  public clients: string[] = ['Hugo','Deshi', 'Marisol', 'Laura', 'Adrián','Carlos']
  public clientsMap = {
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 personas esperando',
    'other':'tenemos # clientes esperando'

  }

  //keyValue Pipe

  public person = {
    name: 'Hugo',
    age: '30',
    address: 'Asturias, España'
  }

  //async pipe
  public myObservableTimer: Observable<number> = interval(1000).pipe(
    tap(value => console.log('tap:',value))
  );
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data en la primsesa');
      this.person.name ='otro nombre'
    }, 3500);

  })

  changeClient(): void {

    this.name = 'Melissa';
    this.gender = 'female' ;


  }

  deleteClient(): void
  {
    this.clients.shift();
  }


}
