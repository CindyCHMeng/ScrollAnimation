import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-animation',
  templateUrl: './scroll-animation.component.html',
  styleUrls: ['./scroll-animation.component.scss']
})
export class ScrollAnimationComponent {
  readonly picList = [
    {
      frontImg: "/assets/animals/exoticpets-animal1-a-mob@2x.webp",
      backImg: "/assets/animals/exoticpets-animal1-b-mob@2x.webp",
      isFlip: false,
    },
    {
      frontImg: "/assets/animals/exoticpets-animal2-a-mob@2x.webp",
      backImg: "/assets/animals/exoticpets-animal2-b-mob@2x.webp",
      isFlip: false,
    },
    {
      frontImg: "/assets/animals/exoticpets-animal3-a-mob@2x.webp",
      backImg: "/assets/animals/exoticpets-animal3-b-mob@2x.webp",
      isFlip: false,
    },
    {
      frontImg: "/assets/animals/exoticpets-animal4-a-mob@2x.webp",
      backImg: "/assets/animals/exoticpets-animal4-b-mob@2x.webp",
      isFlip: false,
    },
    {
      frontImg: "/assets/animals/exoticpets-animal5-a-mob@2x.webp",
      backImg: "/assets/animals/exoticpets-animal5-b-mob@2x.webp",
      isFlip: false,
    },
    {
      frontImg: "/assets/animals/exoticpets-animal6-a-mob@2x.webp",
      backImg: "/assets/animals/exoticpets-animal6-b-mob@2x.webp",
      isFlip: false,
    },
    {
      frontImg: "/assets/animals/exoticpets-animal7-a-mob@2x.webp",
      backImg: "/assets/animals/exoticpets-animal7-b-mob@2x.webp",
      isFlip: false,
    },
    {
      frontImg: "/assets/animals/exoticpets-animal8-a-mob@2x.webp",
      backImg: "/assets/animals/exoticpets-animal8-b-mob@2x.webp",
      isFlip: false,
    },
    {
      frontImg: "/assets/animals/exoticpets-animal9-a-mob@2x.webp",
      backImg: "/assets/animals/exoticpets-animal9-b-mob@2x.webp",
      isFlip: false,
    },
  ];
  readonly initLocation = "50% - 165px";
  curPicCardIndex = 1;

  constructor() {}

  onCardClick(picItem: any) {
    if (picItem) {
      picItem.isFlip = !picItem.isFlip;
    }
  }

  onCarouselMove(index: number = 0) {
    const loc = "calc(" + this.initLocation + " - " + index * 330 + "px - " + index * 2 + "rem)";
    this.curPicCardIndex = index;
    document
      .getElementsByClassName("carousel-change")[0]
      .setAttribute("style", `transform: translateX(${loc})`);
  }
}
