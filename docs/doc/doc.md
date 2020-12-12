---
id: documentation
title: Serveur de documentation
---

La documentation de Project A est construite à l'aide de [Docusaurus 2](https://v2.docusaurus.io/). Elle est disponible sur [GitHub](https://github.com/24HeuresINSA/Assomaker-doc).

### Installation et lancement

Pour installer la documentation, clonez le repository [GitHub](https://github.com/24HeuresINSA/Assomaker-doc):
```bash
git clone https://github.com/24HeuresINSA/Assomaker-doc
cd Assomaker-doc/
```

La documentation comporte des pages sur l'API avec le standard [OpenAPI](https://swagger.io/specification/). Elle prend ses sources dans un fichier de description `.json` à la racine. Le fichier utilisé dans l'image Docker est `project_a.json`.

Ensuite, lancez le conteneur docker avec la commande
```
docker-compose up -d
```

`-d` va detacher l'output afin de ne pas avoir de logs

Vous pouvez accéder en local à l'adresse <http://localhost:3000>.