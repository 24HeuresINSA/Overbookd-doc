---
id: installation
title: Installer et lancer Project A
---

## Images Docker

Pour installer et lancer Project A, récupérez les images Docker sur la [page de téléchargements](../downloads). Il vous suffit ensuite de lancer chaque image:

```
docker-compose up -d
```

`docker-compose up` permet de lancer une application composée de plusieurs containers Docker. Il faut donc se placer dans chaque dossier `/api`, `/appweb` et executer la commande. `-d` permet de détacher l'application et ainsi de ne pas avoir de logs.
Pour arreter l'application il faut executer la commande `docker-compose down`.

## Redirection du trafic

La redirection du trafic est faite à l'aide du serveur web NginX, rapide et fiable. Le but de la redirection est d'avoir un seul point d'entrée sur l'application: `nomdedomaine.fr` puis rediriger le trafic vers les différentes applications en fonction de l'URL. `domaine.fr/auth/` sera redirigé vers le serveur d'authentification, `domaine.fr/api/` redirige vers le serveur d'API et enfin `domaine.fr/` récupère tout le trafic restant et le redirige vers l'application web.
Le fichier de configuration NginX est celui ci:
```
upstream backend_api {
        server 127.0.0.1:<port de l'API>;
}

upstream backend_auth {
        server 127.0.0.1:<port du serveur d'authentification>;
}

upstream frontend {
        server 127.0.0.1:<port de l'application web>;
}

server {
        server_name <domaine.fr> www.<domaine.fr>;

        location /auth/ {
                include proxy_params;
                proxy_pass http://backend_auth;
        }

        location /api/ {
                include proxy_params;
                proxy_pass http://backend_api/;
        }

        location / {
                include proxy_params;
                proxy_pass http://frontend;
        }
}
```
La commande `upstream <nom de l'upstream>` crée un proxy en direction de l'adresse specifiée ensuite. Ensuite dans `server`, `location /<baseURL>/` permet de rediriger le trafic entrant à destination de `domaine.fr/<baseURL>` vers l'upstream spécifié au dessus.