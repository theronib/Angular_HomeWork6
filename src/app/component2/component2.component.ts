import { Component, ViewChild } from '@angular/core';
import { Pictures } from 'src/Pictures';
import { PICTURES } from 'src/mock-component1';
import { ActivatedRoute } from '@angular/router';
import { Component1Component } from '../component1/component1.component';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component {
  @ViewChild(Component1Component, { static: false }) component1!: Component1Component;

  pictures: Pictures[] = PICTURES;

  pictureId: number | undefined;
  authorId: number | undefined;

  picture: Pictures | undefined;
  authorPictures: Pictures[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pictureId = params['id'];
      this.authorId = params['authorId'];
      let id = Number(this.pictureId);
      let authorId = Number(this.authorId);

      this.picture = this.pictures.find(p => p.id === id);
      this.authorPictures = this.pictures.filter(p => p.authorID === authorId);

    });
  }

  redirectToAboutPage(id: number, authorID: number): void{
    this.component1.redirectToAboutPage(id, authorID);
  }

}
