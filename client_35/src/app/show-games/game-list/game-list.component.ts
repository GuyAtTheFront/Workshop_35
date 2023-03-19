import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {

  selectOptions: number[] = [10, 15, 20];
  selectedOption: number = 10;
  pageNumber: number = 0;

  disablePrevious = true;

  constructor( private gameService: GameService){}

  onSelect(option: string) {
    this.selectedOption = Number.parseInt(option);
    // this.gameService.getGames(this.selectedOption, this.selectedOption * this.pageNumber);
  }

  onPrevious(){
    console.log("previous");
    // decrement offset
    this.pageNumber = Math.max(this.pageNumber -1, 0);
    if (this.pageNumber == 0) this.disablePrevious = true;
    // http call
    this.gameService.getGames(this.selectedOption, this.selectedOption * this.pageNumber);
  }

  onNext(){
    console.log("next");
    this.disablePrevious = false;
    // increment offset
    this.pageNumber += 1;

    // http call
    this.gameService.getGames(this.selectedOption, this.selectedOption * this.pageNumber);
  }

}
