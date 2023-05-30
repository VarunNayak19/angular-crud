import { Injectable } from '@angular/core';
import { Hero } from './heroes/heroes';
import {Observable, of} from 'rxjs';
import { HEROES } from './heroes/mock-heros';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes():Observable<Hero[]> {
    this.messageService.add(`HeroService: Fetched Heroes`);
      return of(HEROES);
    }
}
