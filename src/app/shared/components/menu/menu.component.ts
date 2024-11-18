import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];
  ngOnInit(): void {
    this.menuItems =[
       {label:'Pipes de Angular',
       icon: 'pi pi-desktop',
       items: [
        {
          label: 'Textos y Fechas',
          routerLink:'/',
          icon: 'pi pi-align-left'
        },
        {
          label: 'Numeros',
          routerLink:'numbers',
          icon: 'pi pi-dollar'
        },
        {
          label: 'no comunes',
          routerLink:'uncommon',
          icon: 'pi pi-globe'
        },
      ]
      },
      {
        label: 'pipès Personalizados',
        icon: 'pi pi-cog',
        items: [{
          label: 'otro elemento',
          icon: 'pi pi-cog'
        }]
      }

    ]
  }
}
