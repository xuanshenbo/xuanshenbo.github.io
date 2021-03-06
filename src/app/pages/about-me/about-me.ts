import { Component, NgModule, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { FooterModule } from '../../shared/footer/footer';
import { RouterModule } from '@angular/router';
import { ComponentPageTitle } from '../page-title/page-title';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.html',
  styleUrls: ['./about-me.scss']
})
export class AboutMe implements OnInit {
  constructor(public _componentPageTitle: ComponentPageTitle) {}

  ngOnInit(): void {
    this._componentPageTitle.title = '';
  }
}

@NgModule({
  imports: [MatButtonModule, FooterModule, RouterModule],
  exports: [AboutMe],
  declarations: [AboutMe],
})
export class AboutMeModule {}
