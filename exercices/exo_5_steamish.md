
Pour ce projet faites vous un dossier : "front" dans le /app pour la partie non-admin du site


### 1. Page home


- Afficher les 9 derniers jeux (date de sortie)
- Afficher 9 jeux par ordre alpha
- Afficher les 5 derniers commentaires
- Afficher 9 jeux par prix (décroissant)


- Afficher un bouton "View all" => il permet d'afficher tous les jeux (nouveau component : /game => game-index-component)


### 2. game-index-component


Il affiche tous les jeux de l'api, trié par ordre de date de sortie et paginé


### 3. game-show-component (/game/{slug})


Page de détail d'un jeu


Cf : https://www.instant-gaming.com/en/6011-buy-lego-star-wars-the-skywalker-saga-pc-game-steam-europe/


Les genres (tags sur IG) sont cliquables, et permettent d'aller sur un nouveau component "/game/genre/{slugGenre}" de nom game-genre-component

Et il affichera tous les jeux d'un genre donné.


Afficher tous les commentaires du jeu (max 5) et ajouter un bouton tous les commentaires pour permettre de tous les afficher.


(Soit via un nouveau component : /game/{slug}/comments => game-comments-component)
(Soit via une zone masquée sur la page qui les affiche tous en cliquant dessus)


### 4. account-show-component

Les "cards" de commentaires doivent afficher le nom de l'account qui l'a posté, le nom doit être cliquable et permettre d'aller sur la vue de détail d'un account : /account/{slug} => account-show-component


Cette vue doit afficher les infos du compte


Les jeux du compte (tous), bien sûr les cards de jeux seront cliquable pour aller sur "game-show-component"


Les commentaires qu'il a posté (tous)


### 5. Idées en vrac


Vous aller devoir afficher plusieurs fois un template de "jeux" (cards), peut-être il est intéressant de faire un component game-card qui prend un jeu en @Input pour l'afficher...
Pareil pour les commentaires ?









