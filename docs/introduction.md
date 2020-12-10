---
id: introduction
title: Introduction
---

Project A est un logiciel de planification d'évènement, disposant d'une gestion des emplois du temps des organisateurs, d'une gestion des ressources logistique ainsi que de la création de l'emploi du temps de l'évènement.

## Organisation du projet

Le projet est divisé en 3 parties distinctes: [l'API](api/using_api), [l'application web](appweb/using_appweb) et [le serveur d'authentification](auth/authentication). Chacunes de ces parties sont Dockerisées, permettant d'assurer que l'application fonctionne sous tous les environnements. [Pour plus d'informations sur Docker.](https://www.docker.com/)

### API

L'API est construite avec [ExpressJS](https://expressjs.com), un serveur web rapide et fiable, facile à maintenir. La base de données est stockée sur un serveur MySQL. La relation entre le serveur web et la base de données est assurée par [Sequelize](https://sequelize.org/), un _**O**bject **R**elationnal **M**anager_ permettant une abstraction entre le code du serveur et la requête SQL envoyée à la base de données. Il permet aussi d'avoir une couche de sécurité en protégeant contre les failles de sécurité classiques de SQL.

### Application web

L'application web est construite avec [VueJS](https://vuejs.org/), un framework de front-end qui permet de construire rapidement des applications avec une logique de composants réutilisables. La plupart des composants proviennent de [Vuetify](https://vuetifyjs.com), un framework basé sur Vue contenant de nombreux composants prêts à l'usage, facilement customizables.

### Serveur d'authentification

Le serveur d'authentification est un serveur [Keycloak](https://www.keycloak.org/), un outil de sécurisation open-source, sponsorisé par RedHat. Il permet l'authentification ainsi que la gestion des droits des utilisateurs.