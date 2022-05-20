
### 2. Héritage

Class : Hero, caractérisé par :

- Son nom (name)
- Ses points de vie (hitPoint)
- Dégâts max (damageMax)
- Dégâts min (damageMin)
- Son niveau (level)
- Defense (defense)
- Chance de coup critique (criticalChance)

Tous les Héros commencent niveau 1 et ont par défaut 5% de chance de coup critique

Créer ensuite les classes suivantes :


- Mage, un Mage est un Hero
  - Pour créer un Mage on a besoin que de son nom (name)
  - Un mage a **toujours** les valeurs suivantes par défaut :
    - 300 points de vie
    - 52 dégâts min et 58 dégâts max
    - 2 de défense



- Warrior, un Warrior est un Hero
  - Pour créer un Mage on a besoin que de son nom (name)
  - Un Warrior a **toujours** les valeurs suivantes par défaut :
    - 360 points de vie
    - 44 dégâts min et 47 dégâts max
    - 4 de défense



- Rogue, un Rogue est un Hero
  - Pour créer un Mage on a besoin que de son nom (name)
  - Un Rogue a **toujours** les valeurs suivantes par défaut :
    - 320 points de vie
    - 42 dégâts min et 52 dégâts max
    - 3 de défense



Par la suite... Ajouter une méthode **levelUp** à la classe Héros

Commun à tous les héros :
- Augmenter leur niveau (level) de 1
- Augmenter leur coup critique (criticalChance) de 0.25%


La méthode **levelUp** permet aussi d'augmenter les caractéristiques des héros en fonction de leur type :
- Un Mage :
  - Augmenter leur points de vie (hitPoint) de 25
  - Augmenter leur dégât (damageMin & damageMax) de 4
  - Augmenter leur défense (defense) de 1, si le niveau du héro est un multiple de 5

- Un Warrior :
  - Augmenter leur points de vie (hitPoint) de 39
  - Augmenter leur dégât (damageMin & damageMax) de 2
  - Augmenter leur défense (defense) de 1, si le niveau du héro est un multiple de 3

- Un Rogue :
  - Augmenter leur points de vie (hitPoint) de 33
  - Augmenter leur dégât (damageMin & damageMax) de 3
  - Augmenter leur défense (defense) de 1, si le niveau du héro est un multiple de 4
  - Augmenter coup critique (criticalChance) de 0.33% au lieu de 0.25%


### 3. Suite TP héritage


Ajouter une fonction "attack" dans la classe Hero, elle prend en paramètre un autre Hero


Le but de cette méthode est que le héro courant attaque le héro en paramètre, pour cela :
- Déterminer les dégâts du héro : un alétoire entre ses dégâts min et max (fonction Math.random => chercher sur internet la fonction à créer)
- Déterminer si le coup est critique, un coup critique inflige 50% en plus des dégâts normaux
- Puis le coup est réduit par la défense du héro attaqué, la défense un pourcentage (1 + (defense/100))
- Puis le héro attaqué perd ses points de vie


Enfin :
- Simuler un combat entre deux héros, l'un commence, l'autre réplique et ainsi de suite, jusqu'à qu'il n'y en ai plus qu'un.


### 4 Les héros... Le retour


Nous allons créer une classe 'Battleground', qui prendra en paramètre 2 noms de héros à créer (de type string).

Le constructeur de cette classe devra créer 2 héros **aléatoire** à partir des deux noms, et les sauvegarder dans des attributs de type 'Hero' et de nom 'heroOne' et 'heroTwo'.

La classe 'battleground' aura une méthode 'fight' avec ce code :

````
const heroes: Array<Hero> = [this.heroOne, this.heroTwo];
while (this.heroOne.isAlive() && this.heroTwo.isAlive()) {
  const index = getRandomBetween(0, 1);
  const first: Hero = heroes[index];
  const second: Hero = heroes[Math.abs(index - 1)];
  console.log('Le premier hero à attaquer est ' + first.name);
  first.attack(second);
  if (second.isAlive()) {
    second.attack(first);
  }
}
````

Afin de tester notre classe 'Battleground', nous allons créer un component 'battleground', qui aura un attribut de type 'Battleground' (la classe créée plus tôt).

Vous l'instancierez et lui donnerez 2 noms de votre convenance.

Une fois que vous vous êtes assuré que votre classe Battleground fonctionne, vous ferez un component : 'hero-card', ce component doit se contenter d'afficher un héro, une jolie card avec les images fournies dans le dossier 'assets/heroes' (trouvez une solution pour intégrer l'image du héro... ;) )

L'idée est que le component battleground puisse afficher deux components 'hero-card', vous ferez le nécessaire pour que cela fonctionne.


### 5. Les héros... le retour du comeback


Créer une classe nommée : Ability (dossier heroes)

Une Ability est composé de :
- name (string)
- manaCost (number)
- damage (number)
- criticalStrike (number)
- cooldown (number)
- currentCooldown (number)

Un héro aura dorénavant du mana (number), avec un attribut manaMax (number)

Un mage aura :
- 360 mana lelvel 1

Un Warrior aura :
- 190 mana level 1

Un Rogue aura :
- 190 mana level 1

Lorsqu'un héro levelup :

Un Mage gagne :
- 32 mana

Un Warrior gagne :
- 24 mana

Un Rogue gagne :
- 23 mana

Au niveau des capacités...

Un héro aura plusieurs ability

Par défaut, un Mage a la capacité :
- name (string) : Fireball
- manaCost (number) : 160 mana
- damage (number) : 120% des dégâts de base (arrondi entre le min et max)
- criticalStrike (number) : la même que le héro
- cooldown : 3

Par défaut, un Warrior a la capacité :
- name (string) : Mortal strike
- manaCost (number) : 100 mana
- damage (number) : 100% des dégâts de base (arrondi entre le min et max) + 30
- criticalStrike (number) : la même que le héro
- cooldown : 2

Par défaut, un Rogue a la capacité :
- name (string) : Shadowstrike
- manaCost (number) : 110 mana
- damage (number) : 100% des dégâts de base (arrondi entre le min et max) + 20
- criticalStrike (number) : 100%
- cooldown : 4


Lorsqu'un héro utilise sa capacité, on lui retire son coût en mana.
Une capacité utilisé devient "en cooldown", "currentCooldown devient à 0", à chaque action, il augmente de 1


### 6. Formulaire des héros !

Je veux un formulaire capable de créer un Héros.

L'utilisateur doit pouvoir saisir son pseudo et choisir sa classe.








