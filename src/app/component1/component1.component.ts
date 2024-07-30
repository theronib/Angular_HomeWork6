import { Component, OnInit, ViewChild } from '@angular/core';
import { Pictures } from 'src/Pictures';
import { PICTURES } from 'src/mock-component1';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
  pictures: Pictures[] = PICTURES;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  public redirectToAboutPage(id: number, authorId: number): void {
    this.router.navigate(['details/' + id + "/author/" + authorId]); 
  }
}
