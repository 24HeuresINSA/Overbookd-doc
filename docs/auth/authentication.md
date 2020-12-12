---
id: authentication
title: Serveur d'authentification
---

Le serveur d'authentification est une instance [Keycloak](https://www.keycloak.org/), un service d'authentification open source supporté par RedHat.

## Installation et lancement

### Environnement

L'application requiert des variables d'environnement pour fonctionner. Editez le fichier `example.env` à votre convenance puis renommez le `.env`.

Les variables utilisées par Keycloak sont 
```
KEYCLOAK_PASSWORD=xxx # keycloak admin password
KEYCLOAK_DATABASE_PASSWORD=xxx # keycloak database password used by the auth server
```

Une fois le serveur lancé, vous pouvez vous connecter en tant qu'administrateur de Keycloak avec le nom d'utilisateur `admin` et le mot de passe rentré dans `KEYCLOAK_PASSWORD`.

### Lancer l'application

Le serveur Keycloak est lancé en même temps que l'API, à partir d'une image Docker préfaite.

```
git clone https://github.com/24HeuresINSA/Assomaker-backend
cd Assomaker-backend
```

Avant de lancer le serveur Keycloak, il faut effectuer un changement dans les DNS locaux pour atteindre le serveur. Utilisez la commande `sudo npm run setup`. Il est important d'avoir les droits d'administrateur sur sa machine pour pouvoir changer les DNS.

Utilisez la commande `docker-compose up -d` pour lancer l'API ainsi que le serveur Keycloak.

Une fois que le serveur Keycloak est lancé, il faut ajouter un utilisateur administrateur. Utilisez la commande `npm run create_admin` pour le créer. Vous pourrez ensuite vous connecter au serveur avec l'endpoint de [login](../../api/login) avec le nom d'utilisateur `user_admin` et le mot de passe `user_admin`.

## Principe d'authentifications

Keycloak fonctionne d'une manière simple. Un domaine d'authentification, appelé _realm_ est utilisé pour plusieurs applications, appelées _client_. Enfin, chaque utilisateur créé dans Keycloak peut avoir des rôles, soit liés au _realm_ soit au _client_.

### Realm Project A

Notre _realm_ est composé de deux applications, _project_a_appweb_ et _project_a_api_. Un utilisateur se connecte avec _project_a_appweb_ pour récupérer un token qu'il peut ensuite soumettre à l'API quand il veut faire une requête. L'API teste ce token contre le _project_a_api_. Si ce token est valide, Keycloak autorise l'accès à l'API en lui renvoyant les rôles de l'utilisateur. Si la requête est autorisée pour un utilisateur possédant certains rôles, définis dans la requête, l'API renvoie les données sinon elle renvoie un 403 Forbidden.

#### Rôles de Project A

Il y a 5 rôles différents dans Project A :
+ _realm:user_ : le rôle de base que tout utilisateur se voit attribuer
+ _realm:user_modifier_ : rôle permettant de modifier les tâches et les activités, contient _realm:user_
+ _realm:user_log_ : rôle permettant de modifier les équipements et les lieux, contient _realm:user_modifier_
+ _realm:user_affect_ : rôle permettant de modifier les affectations, contient _realm:user_modifier_
+ _realm:user_admin_ : rôle permettant de modifier l'ensemble de la base de données, contient _realm:user_log_ et _realm:user_affect_

Un tableau récapitulatif permet de comprendre quels rôles contiennent quels rôles:

|realm:user|realm:user_modifier|realm:user_log|realm:user_affect|realm:user_admin|
|---|---|---|---|---|
| |realm:user|realm:user|realm:user|realm:user|
| | |realm:user_modifier|realm:user_modifier|realm:user_modifier|
| | | | |realm:user_log|
| | | | |realm:user_affect|

#### Utilisation dans l'API

Pour utiliser un token de Keycloak, la requête doit contenir le Header HTTP
```http
Authorization Bearer <token>
```

Ensuite, le token a une durée de vie de 5 minutes. Si celui est expiré, on peut utiliser le _refresh_token_ qui est envoyé après le requête de login, avec l'endpoint de [refresh](../../api/refresh-token).