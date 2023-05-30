import { Component , OnInit , NgModule} from '@angular/core';
import { Hero } from './heroes';
import { HEROES } from './mock-heros';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  display  = false;
  data!: Hero;
  selectedHero!: Hero;
  clickingFn(i:number) {
    this.heroes[i].display = !this.heroes[i].display;
  }
  onSelect(hero: Hero) {

    this.selectedHero = hero;
    this.getHeroes();
    // console.log(this.selectedHero)
  }
  constructor(private heroService: HeroService) {
    
  }

    ngOnInit(): void {

    }

    getHeroes(){
      this.heroService.getHeroes().subscribe(heroes => {(this.heroes = heroes ); console.log(this.heroes);})
    
    }

}
