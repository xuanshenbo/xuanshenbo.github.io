import { Component, NgModule, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { FooterModule } from '../../shared/footer/footer';
import { RouterModule } from '@angular/router';
import { ComponentPageTitle } from '../page-title/page-title';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.html',
  styleUrls: ['./experiences.scss']
})
export class Experiences implements OnInit {
  constructor(public _componentPageTitle: ComponentPageTitle) {}

  ngOnInit(): void {
    this._componentPageTitle.title = '';
  }
}

@NgModule({
  imports: [MatButtonModule, FooterModule, RouterModule],
  exports: [Experiences],
  declarations: [Experiences],
})
export class ExperiencesModule {}
