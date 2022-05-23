import {Hero} from "./hero";
import {Mage} from "./mage";
import {Warrior} from "./warrior";
import {Rogue} from "./rogue";
import {Hunter} from "./hunter";

export class Battleground {

  heroes: Hero[] = [];
  startedFight: boolean = false;
  private _round: number = 1;
  private readonly _initialFighters: Hero[] = [];
  private _maxSingleHitHero: Hero | undefined;
  private _mostTotalDamages: Hero | undefined;
  private _mostCriticalStrike: Hero | undefined;
  private _mostHeroKiller: Hero | undefined;
  private _rival: Hero | undefined;
  private _deadHeroes: Hero[] = [];

  constructor(...names: string[]) {
    let classes = [Mage, Warrior, Rogue, Hunter];
    names.forEach((name) => {
      classes.sort( () => .5 - Math.random() );
      let randomIndex: number =  Math.round(this.getRandom(0, classes.length - 1));
      this.heroes.push(new classes[randomIndex](name));
    });
    this._initialFighters = this.heroes;
    this._round = 1;
    this.levelUpEveryone(10);
  }

  startFight(): void {
    this.startedFight = true;
    while (!this.isEndGame()) {
      this.oneFightRound();
      this.levelUpEveryone();
    }
    this.updateGameStats();
    console.log(this.heroes[0].name + ' (lvl.' + this.heroes[0].level + ') a gagné la baguarre !');
  }

  oneFightRound(): void {
    this.heroes = this.shuffleHeroOrder();
    console.log('Ordre du round ' + this._round);
    console.log(this.heroes)
    this.heroes.forEach((hero) => {
      if (hero.isAlive()) {
        let otherHeroes: Hero[] = this.getOtherHeroes(hero);
        if (otherHeroes.length !== 0) {
          const index = this.getRandom(0, otherHeroes.length - 1);
          const targetHero: Hero = otherHeroes[index];
          hero.attack(targetHero);
          if (targetHero.isAlive()) {
            targetHero.attack(hero);
            this.checkDead(hero, targetHero);
          } else {
            this.checkDead(targetHero, hero);
          }
        }
      }
      this.updateAliveHeroes();
    });
    console.log('Fin du round ' + this._round++);
  }

  private checkDead(checkHero: Hero, heroWinner: Hero): void {
    if (checkHero.isDead()) {
      // heroWinner.levelUp();
      checkHero.killedBy = heroWinner;
      heroWinner.totalKilled++;
      this._deadHeroes.push(checkHero);
      if (this.heroes.length === 2) {
        this._rival = checkHero;
      }
      console.log(checkHero.name + ' (lvl. ' + checkHero.level + ') est mort');
    }
  }

  private getOtherHeroes(hero: Hero): Hero[] {
    return this.heroes.filter((heroFilter) => heroFilter.name !== hero.name && heroFilter.isAlive());
  }

  private updateAliveHeroes(): void {
    this.heroes = this.heroes.filter((heroAlive) => heroAlive.isAlive());
  }

  private levelUpEveryone(nbLevel: number = 1): void {
    for(let i = 0; i < nbLevel; i++) {
      this.heroes.forEach((hero) =>  {
        hero.levelUp();
      });
    }
  }

  private shuffleHeroOrder(): Hero[] {
    let newHero: Hero[] = [];
    const initialSize: number = this.heroes.length;
    while (newHero.length !== initialSize) {
      const index = this.getRandom(0, this.heroes.length - 1);
      newHero.push(this.heroes[index]);
      this.heroes = this.heroes.filter((hero) => hero.name !== this.heroes[index].name);
    }
    return newHero;
  }

  isEndGame(): boolean {
    return this.heroes.length === 1;
  }

  getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  get maxSingleHitHero(): Hero | undefined {
    return this._maxSingleHitHero;
  }

  get mostTotalDamages(): Hero | undefined {
    return this._mostTotalDamages;
  }

  get mostCriticalStrike(): Hero | undefined {
    return this._mostCriticalStrike;
  }

  private updateGameStats(): void {
    let allHeroes: Hero[] = [];
    let tmpTotalDamage: number = 0;
    let tmpMostCriticalStrike: number = 0;
    let tmpBestKiller: number = 0;
    let tmpBestSingleHit: number = 0;
    allHeroes = allHeroes.concat(this.heroes, this._deadHeroes);
    allHeroes.forEach((hero) => {
      if (tmpTotalDamage < hero.totalDamageDone) {
        tmpTotalDamage = hero.totalDamageDone;
        this._mostTotalDamages = hero;
      }
      if (tmpMostCriticalStrike < hero.totalCriticalStrikeDone) {
        tmpMostCriticalStrike = hero.totalCriticalStrikeDone;
        this._mostCriticalStrike = hero;
      }
      if (tmpBestKiller < hero.totalKilled) {
        tmpBestKiller = hero.totalKilled;
        this._mostHeroKiller = hero;
      }
      if (tmpBestSingleHit < hero.maxSingleHit) {
        tmpBestSingleHit = hero.maxSingleHit;
        this._maxSingleHitHero = hero;
      }
    });
  }

  get initialFighters(): Hero[] {
    return this._initialFighters;
  }

  get winner(): Hero {
    return this.heroes[0];
  }

  get firstToDie(): Hero {
    return this._deadHeroes[0];
  }

  get deadHeroes(): Hero[] {
    return this._deadHeroes;
  }

  get mostHeroKiller(): Hero | undefined {
    return this._mostHeroKiller;
  }

  get rival(): Hero | undefined {
    return this._rival;
  }
}
