import { Component } from '@angular/core';

import { TopicsPage } from '../topics/topics';
import { ResultsPage } from '../results/results';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TopicsPage;
  tab3Root = ResultsPage;

  constructor() {

  }
}
