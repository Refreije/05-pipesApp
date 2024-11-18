import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string ='hugo'
  public nameUpper: string ='HUGO'
  public Fullname: string ='HUGO ReQUeIjo'
  public customDate : Date = new Date()

}
