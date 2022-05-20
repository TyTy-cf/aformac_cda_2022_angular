import {Hero} from "./hero";
import {Mage} from "./mage";
import {Warrior} from "./warrior";
import {Rogue} from "./rogue";
import {Hunter} from "./hunter";

export class Battleground {

  heroes: Hero[] = [];

  constructor(...names: string[]) {
    let classes = [Mage, Warrior, Rogue, Hunter];
    names.forEach((name) => {
      let randomIndex: number =  Math.round(this.getRandom(0, classes.length - 1));
      this.heroes.push(new classes[randomIndex](name));
    });
  }

  startFight(): void {
    let round: number = 1;
    while (this.heroes.length > 1) {
      this.heroes = this.shuffle();
      console.log('Ordre du round ' + round);
      console.log(this.heroes)
      this.heroes.forEach((hero) => {
        if (hero.isAlive()) {
          let otherHeroes: Hero[] = this.heroes.filter((heroFilter) => heroFilter.name !== hero.name && heroFilter.isAlive());
          const index = this.getRandom(0, otherHeroes.length - 1);
          hero.attack(otherHeroes[index]);
          if (otherHeroes[index]) {
            if (otherHeroes[index].isAlive()) {
              otherHeroes[index].attack(hero);
              if (hero.isDead()) {
                otherHeroes[index].levelUp();
                console.log(hero.name + '(' + hero.level + ') est mort');
              }
            }
          } else {
            hero.levelUp();
            console.log(otherHeroes[index].name + '(' + otherHeroes[index].level + ') est mort');
          }
        }
        this.heroes = this.heroes.filter((heroAlive) => heroAlive.isAlive());
      });
      this.heroes.forEach((hero) =>  {
        hero.levelUp();
      });
      console.log('Fin du round ' + round++);
    }
    if (this.heroes.length === 1) {
      console.log(this.heroes[0].name + '(' + this.heroes[0].level + ') a gagné la baguarre !');
    }
  }

  shuffle(): Hero[] {
    let newHero: Hero[] = [];
    const initialSize: number = this.heroes.length;
    while (newHero.length !== initialSize) {
      const index = this.getRandom(0, this.heroes.length - 1);
      newHero.push(this.heroes[index]);
      this.heroes = this.heroes.filter((hero) => hero.name !== this.heroes[index].name);
    }
    return newHero;
  }

  getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

}
