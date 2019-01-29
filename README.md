# TP versionning : L'auberge Espagnole


**Description**

L'idée dans ce TP, c'est que vous créez du code pour un script "d'auberge espagnole". Pour ceux qui ne savent pas ce qu'est une "auberge espagnole"',
c'est quand vous êtes convié à un évènement (soirée, etc...), et que tous les invités doivent ramener quelque chose à manger.


**Organisation**

Vous allez devoir cloner le projet sur votre PC, y emmener des modifications, et apporter vos modifications sur le dossier officiel du projet (le dossier sur github).
Donc quand tout le monde aura fini, on aura un projet partagé et complété par chacun de vous.

*Vous devez effectuer deux modifications :*
1. Créer votre propre classe *héritée de la classe Participant* dans le dossier /src (ex: class_julien_b.ts), qui vous permettra de choisir les choses que vous voulez emmener à l'auberge espagnole.
2. Instancier un objet de votre classe dans le script principal (app.ts) et le mettre dans le tableau des participants

Vous devez apporter de la nourriture (1 entrée, 1 plat, 1 dessert), une chanson, et deux amis (1 homme et 1 femme). Les données disponibles
sont accessibles via les namespaces Food, Music et Friends. Je vous laisse analyser le code pour comprendre comment hydrater votre objet.


**NOTE**

Si vous êtes trop frileux pour utiliser la ligne de commande, vous pouvez utiliser un utilitaire du genre GitKraken.


**Premier pas**

Pour ceux qui ne sont pas à l'aise avec Git et Github, voici un petit fil conducteur pour démarrer :

* Avoir Git installé sur votre PC
* Créez un compte sur Github
* Configurer git sur votre PC (éditeur par défaut, nom, email, etc...)
* Cloner le repo officiel quelque part sur votre PC
* Mettre en place votre environnement de dev (npm, tsc, etc...)
* Faire fonctionner le projet sur votre PC
* Apporter vos modifications (fichier classe + ajout de votre objet dans app.ts)
* Pousser sur le repo officiel


**Commandes importantes**
git clone : cloner un repo
git pull : récupérer les dernieres modifs d'un repo (derniers commit)
git status : afficher les modifs en cours sur la branche locale
git add : ajouter les modif dans le repo local
git commit : engager les modifs (ajout à la version local en cours)
git push : envoyer mes modifs

*Autres commandes*
git config : permet de changer la conf de git
git remote : permet de gérer les repo distants


**A faire en plus**
* Faire des mini-stats sur la nourriture, la musique et les amis (nombre, totaux,...)
* Améliorer le front-end (mettre des titres, des images, un lien vers le github, etc...)
