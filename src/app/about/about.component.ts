import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import {Leader} from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  leaders: Leader[];
  selectedLeader: Leader;

  constructor(private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.leaderService.getLeaders()
      .then((leaders) => this.leaders = leaders);
  }

}
