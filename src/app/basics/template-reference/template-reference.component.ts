import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reference(input: HTMLInputElement): void{
    alert("Heelo " + input.value);
    window.confirm('Helllo ' + input.value);
  }

  sayHello(): void{
    window.confirm('Hellllllllllllllllllllllllooooooooooooooooooooo');
  }

}
