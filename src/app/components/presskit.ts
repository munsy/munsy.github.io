import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class PressKitFactsheet {
  public platforms: Array<string>;
  public developer: string;
  public basedIn: string;
  public releaseDate: string;
  public website: string;
  public regularPrice: string;

  constructor(){
    this.platforms = [];
  }
}

export class PressKit {
  public factsheet: PressKitFactsheet;
  public description: string;
  public history: string;
  public features: Array<string>;
  public videos: string;
  public images: Array<string>;
  public logo: string;
  public additional: string;
  public team: string;
  public contact: string;

  constructor(){
    this.factsheet = new PressKitFactsheet();
    this.features = [];
    this.images = [];
  }
}

@Component({
  selector: 'munsy-presskit',
  template: `
<div class="container-fluid">
  <div class="row">
    <div class="col-2"></div>
    <div class="col">
      <div class="row bg-black text-center">
        <div class="col border-bottom border-white">
          <img [attr.src]="kit.logo">
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <h5 class="text-uppercase pt-5 pb-2" id="factsheet">Factsheet</h5>
          <h6>Developer:</h6>
          {{ kit.factsheet.developer }}<br>
          Based in {{ kit.factsheet.basedIn }}<br>
          <br>
          <h6>Release date:</h6>
          {{ kit.factsheet.releaseDate }}<br>
          <br>
          <h6>Platform(s):</h6>
          <div *ngFor="let platform of kit.factsheet.platforms">
            {{ platform }}
          </div>
          <br>
          <h6>Website:</h6>
          <a class="text-decoration-none text-white" [attr.href]="kit.factsheet.website">{{ kit.factsheet.website }}</a><br>
          <br>
          <h6>Regular Price:</h6>
          {{ kit.factsheet.regularPrice }}
        </div>
        <div class="col">
          <h5 class="text-uppercase pt-5 pb-2" id="description">Description</h5>
          {{ kit.description }}
          <h5 class="text-uppercase mt-5 pt-5 pb-2 border-top border-white" id="history">History</h5>
          {{ kit.history }}
          <h5 class="text-uppercase mt-5 pt-5 pb-2 border-top border-white" id="features">Features</h5>
          <ul>
            <li *ngFor="let feature of kit.features">
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h5 class="text-uppercase mt-5 pt-5 pb-2 border-top border-white" id="videos">Videos</h5>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/pEj8WEnVT9w?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          {{ kit.videos }}
          <h5 class="text-uppercase mt-5 pt-5 pb-2 border-top border-white" id="images">Images</h5>
          <span *ngFor="let image of kit.images; index as i">
            <img [alt]="i" class="pr-4 pb-3" style="max-width: 50%;" [attr.src]="image"><br *ngIf="i != 0 && i % 2 == 0">
          </span>
          <h5 class="text-uppercase mt-5 pt-5 pb-2 border-top border-white" id="logo-and-icon">Logo</h5>
          <img [attr.src]="kit.logo">
          <h5 class="text-uppercase mt-5 pt-5 pb-2 border-top border-white" id="additional">Additional Links</h5>
          {{ kit.additional }}
          <h5 class="text-uppercase mt-5 pt-5 pb-2 border-top border-white" id="team">Team</h5>
          {{ kit.team }}
          <h5 class="text-uppercase mt-5 pt-5 pb-2 border-top border-white" id="contact">Contact</h5>
        </div>
      </div>
    </div>
    <div class="col-3">
      <h3 class="text-uppercase">
        planetstrife
      </h3>
      press kit
      <br><br>
      <a class="text-uppercase text-light" routerLink="./" fragment="factsheet">Factsheet</a><br>
      <a class="text-uppercase text-light" routerLink="./" fragment="description">Description</a><br>
      <a class="text-uppercase text-light" routerLink="./" fragment="history">History</a><br>
      <a class="text-uppercase text-light" routerLink="./" fragment="features">Features</a><br>
      <a class="text-uppercase text-light" routerLink="./" fragment="videos">Videos</a><br>
      <a class="text-uppercase text-light" routerLink="./" fragment="logo">Logo</a><br>
      <a class="text-uppercase text-light" routerLink="./" fragment="images">Images</a><br>
      <a class="text-uppercase text-light" routerLink="./" fragment="additional">Additional Links</a><br>
      <a class="text-uppercase text-light" routerLink="./" fragment="team">Team</a><br>
      <a class="text-uppercase text-light" routerLink="./" fragment="contact">Contact</a><br>
    </div>
  </div>
</div>
  `,
})
export class PressKitComponent implements OnInit {
  public kit: PressKit;
  constructor() {
    this.kit = new PressKit();
    this.kit.factsheet.platforms = [
      "Steam",
      "Nintendo Switch",
      "PS4/5",
      "Xbox",
      "Itch.io"
    ];
    this.kit.factsheet.developer = "Munsy.io";
    this.kit.factsheet.basedIn = "Spokane, WA";
    this.kit.factsheet.releaseDate = "TBA";
    this.kit.factsheet.website = "https://munsy.io/games/planetstrife";
    this.kit.factsheet.regularPrice = "$29.99";
    this.kit.description = "Elementallis is a classic top down adventure with a modernized retro aesthetic. The Elements have gone wild because of your actions and the world is now in danger. Embark on a journey to restore them all and conquer the dungeons where each Element resides. Solve puzzles, fight foes and find secrets using the Elements you've gathered.";
    this.kit.history = "Elementallis development started in late 2019 as a love letter to the classics I played when I was a child. The idea of a retro adventure with systemic elements and more modern effects was around my head for a while, so I started learning game development and saving money in order to be able to embark on this journey.";
    this.kit.features = [
      "Use the Elements to uncover previously inaccessible areas in a metroidvania-esque style.",
      "Prove your worth in the 8 dungeons, full of with puzzles, secrets, enemies and bosses.",
      "Discover the 8 different biomes and help its inhabitants.",
      "Fight in real time combat and defeat your foes using the Elements wisely to exploit their weaknesses.",
      "Experience a story about growth and overcoming guilt.",
    ];
    this.kit.videos = "";
    this.kit.images = [
      "https://elementallis.com/press/elementallis/images/1.png",
      "https://elementallis.com/press/elementallis/images/2.png",
      "https://elementallis.com/press/elementallis/images/3.png",
      "https://elementallis.com/press/elementallis/images/4.png",
      "https://elementallis.com/press/elementallis/images/5.png",
      "https://elementallis.com/press/elementallis/images/6.png",
      "https://elementallis.com/press/elementallis/images/7.png",
    ];
    this.kit.logo = "assets/images/planetstrife-logo.png";
    //this.kit.additional = "";
    //this.kit.team = "";
  }
  ngOnInit(){}
}
