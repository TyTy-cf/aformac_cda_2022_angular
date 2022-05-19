
### 1. Component 'departements-region'


Ce component doit avoir une route de valeur : "/regions/CODE_REGION/departements"


Il doit récupérer tous les départements pour un code de régions donné (on affichera pas le code la région des objets départements)


La page devra afficher aussi le nom de la région correspondant au code.


On accèdera à ce component via le component 'regions-index' (libre à vous de comment)


### 2. Component 'communes-departement'


Ce component doit avoir une route de valeur : "/regions/CODE_REGION/departements/CODE_DEPT/communes"


Il doit récupérer toutes les communes pour un code de département donné (on affichera pas le code la région, ni du départment des objets communes)


La page devra afficher aussi le nom du département recherché.


On accèdera à ce component via le component 'departements-region' (libre à vous de comment)


### 3. Faire un breadcrumbs sur chaque page


Sur 'regions-index' afficher 'Regions' et non cliquable


Sur 'departements-region' afficher : 'Region (cliquable) - Auvergne Rhône Alpes : Départements'


Sur 'communes-departement' afficher : 'Region (cliquable) - Auvergne Rhône Alpes : Départements (cliquable : retour aux départements de l'Auvergne rhônes alpes)' - Puy de Dôme : Communes


### 4. Dynamiser le component 'departements-region'


Ce component va avoir une nouvelle route : 'departements', et s'il n'y a pas de paramètres pour la route de ce component, alors il affichera tous les départements.


Son bread crumbs, doit pouvoir rediriger l'utilisateur vers les 'Regions'


Bien sûr ses départements pourront accéder aux communes.


### 5. Améliorer 'regions-index'


Ajouter une colonne dans laquelle on indiquera le nombre de départements pour cette région.



