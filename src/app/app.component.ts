import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter App';

  count:number = 0;

  increaseCnt = () =>{
    this.count += 1;
  }

  decreaseCnt = () =>{
    this.count -=1;
  }

  resetCnt = () =>{
    this.count = 0;
  }

}
