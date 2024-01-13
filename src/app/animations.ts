import {
  trigger,
  transition,
  style,
  query,
  animate
} from "@angular/animations";

export const fadeAnimation = trigger("routeAnimations", [
  transition("* <=> *", [
    query(
      ":enter, :leave",
      [
        style({
          opacity: 0
        })
      ],
      { optional: true }
    ),
    query(
      ":enter",
      [
        animate(
          "500ms ease",
          style({
            opacity: 1
          })
        )
      ],
      { optional: true }
    )
  ])
]);
