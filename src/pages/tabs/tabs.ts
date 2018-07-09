import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  pageHome: string = "HomePage";
  pageFree: string = "FreePage";
  pagePremium: string = "PremiumPage";

  constructor() {

  }
}
