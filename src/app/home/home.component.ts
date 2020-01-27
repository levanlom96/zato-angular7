import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Array<any> = [
    { name: 'jon', gender: 'male' },
    { name: 'lisa', gender: 'female' },
    { name: 'mari', gender: 'female' },
    { name: 'merabi', gender: 'male' },
  ];

  oldValue = 'ssss';
  veli = 'ssss';

  constructor() { }

  ngOnInit() {
    this.users = this.users.map((user) => {
      return user.gender === 'male' ? `Mr.${user.name}` : `Ms.${user.name}`;
    });

    console.log('Uers: ', this.users);
  }

  veliSheicvala() {
    if (this.veli != this.oldValue) {
      this.oldValue = this.veli;
      console.log('Sheicvala');
    }
  }

  daamate() {
    setTimeout(() => {
      this.veli = this.veli + 's';
    }, 1000);

    this.veliSheicvala();
    console.log('Veli: ', this.veli);
  }

}
