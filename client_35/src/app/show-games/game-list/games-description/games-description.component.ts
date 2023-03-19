import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-games-description',
  templateUrl: './games-description.component.html',
  styleUrls: ['./games-description.component.css']
})
export class GamesDescriptionComponent implements OnInit, OnDestroy {

  games: string[] = [];

  gamesSub?: Subscription;
  
  constructor( private gameService: GameService ){}

  ngOnInit(): void {
    this.gamesSub = this.gameService.nameChanges$.subscribe(data => this.games = data);
    this.gameService.getGames(10, 0);
  }

  ngOnDestroy(): void {
    this.gamesSub?.unsubscribe();
  }
}
