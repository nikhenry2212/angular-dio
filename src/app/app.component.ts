import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  nome = 'Nikolas Prudente Guedes'
  text = ""

  pessoas =[
    {nome:"Nik",sobrenome:"Gue"},
    {nome:"Henry",sobrenome:"Fer"},
    {nome:"Prih",sobrenome:"Pru"},
    {nome:"Edna",sobrenome:"Pru"},
  ]

  constructor() {

  }
  ngOnInit() {
    console.log(this.pessoas);
    
    let interval = setInterval(() => {
      this.count++;
      if (this.count === 10) {
        clearInterval(interval);
      }
    }, 1000)
  }

  clicou(nome: any): void{
    console.log('Clicou em mim', nome);
    
  }
}
