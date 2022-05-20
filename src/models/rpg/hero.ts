
export abstract class Hero {

  protected _level: number = 1;
  protected _criticalChance: number = 5;

  protected constructor(
    protected _name: string,
    protected _hitPoint: number,
    protected _maxDamage: number,
    protected _minDamage: number,
    protected _defense: number,
    protected _levelUpHitPoint: number,
    protected _levelUpDamage: number,
  ) {
  }

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    this._level = value;
  }

  get criticalChance(): number {
    return this._criticalChance;
  }

  set criticalChance(value: number) {
    this._criticalChance = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get hitPoint(): number {
    return this._hitPoint;
  }

  set hitPoint(value: number) {
    this._hitPoint = value;
  }

  get maxDamage(): number {
    return this._maxDamage;
  }

  set maxDamage(value: number) {
    this._maxDamage = value;
  }

  get minDamage(): number {
    return this._minDamage;
  }

  set minDamage(value: number) {
    this._minDamage = value;
  }

  get defense(): number {
    return this._defense;
  }

  set defense(value: number) {
    this._defense = value;
  }

  isAlive(): boolean {
    return this._hitPoint > 0;
  }

  isDead(): boolean {
    return this._hitPoint <= 0;
  }

  levelUp(): void {
    this._level++;
    this._criticalChance += 0.25;
    this._hitPoint += this._levelUpHitPoint;
    this._maxDamage += this._levelUpDamage;
    this._minDamage += this._levelUpDamage;
  }

  randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  attack(anHero: Hero): void {
    if (!anHero || !this) return;
    let damages: number = this.randomIntFromInterval(this._minDamage, this._maxDamage);
    let isCrit: boolean = false;
    if (this._criticalChance >= this.randomIntFromInterval(0, 100)) {
      damages *= 1.5;
      isCrit = true;
    }
    damages *= (1 - anHero.defense / 100);
    anHero.hitPoint -= Math.round(damages);
    console.log(this.name + ' tabasse ' + anHero.name + ' pour ' + Math.round(damages) + ' damages ' + (isCrit ? 'CC ' : '') + '(il lui reste ' + anHero.hitPoint +')' );
  }

}
