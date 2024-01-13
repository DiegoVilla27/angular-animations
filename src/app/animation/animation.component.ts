import { trigger } from "@angular/animations";
import { Component } from "@angular/core";
import { animationOpenCLose } from "./animation";

@Component({
  selector: "app-animation",
  templateUrl: "./animation.component.html",
  styleUrl: "./animation.component.scss",
  animations: [trigger("openClose", animationOpenCLose)]
})
export class AnimationComponent {
  isOpen: boolean = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
