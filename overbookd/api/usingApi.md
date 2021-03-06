---
id: usingApi
title: Utiliser l'API
---

Le serveur d'API est un serveur web Express.js combiné avec Sequelize afin d'accéder à la base de données.

## Installation et lancement

### Environnement

L'application requiert des variables d'environnement pour fonctionner. Editez le fichier `example.env` à votre convenance puis renommez le `.env`.

Les variables utilisées par l'API sont 
```
MYSQL_ROOT_PASSWORD=xxx # root password for api mysql database
DATABASE_PASSWORD=xxx # password for the specific user used by the api
DATABASE_PORT=xxx # port on which the database is hosted on local machine
```

### Lancer l'application

Le serveur d'API est lancé à partir d'une image Docker que l'on crée. Pour une instance en développement, récupérez le code source sur GitHub:

```
git clone https://github.com/24HeuresINSA/Assomaker-backend
cd Assomaker-backend
```

Utilisez la commande `docker-compose up -d` pour lancer l'API ainsi que le serveur Keycloak. `-d` permet de détacher l'application et ainsi de ne pas avoir de logs.
Pour arreter l'application il faut executer la commande `docker-compose down`.

Une fois que le serveur Keycloak est lancé, il faut ajouter un utilisateur administrateur. Utilisez la commande `npm run create_admin` pour le créer. Vous pourrez ensuite vous connecter au serveur avec l'endpoint de [login](../../api/login) avec le nom d'utilisateur `user_admin` et le mot de passe `user_admin`.

Une fois que le serveur d'API est lancé et que l'utilisateur a été créé, vous pouvez effectuer des requêtes à l'API. Les différents endpoints sont documentés sur la [documentation de l'API](../../api).

Si vous avez effectué des changement dans le code de l'API vous pouvez relancer uniquement le container de celle ci avec la commande `docker-compose up -d --build api`.

#### Peuplement de la base de données

Si vous êtes en développement, vous pouvez peupler la base de données avec des _mock data_ en utilisant la commande `npm run populate`. Les différentes données insérées dans la base sont sous forme de `.json` dans le dossier `Assomaker-backend/setup/database/` afin de pouvoir facilement les éditer.

Pour enlever les données de la base, vous pouvez utiliser la commande `npm run depopulate`.