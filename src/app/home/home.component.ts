import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';
import { animationOpenCLose } from './home.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('openClose', animationOpenCLose)
  ]
})
export class HomeComponent implements OnInit {

  isOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
