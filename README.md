# DevopsTP

## TP1 devops

## Installation
Pour installer le projet, il suffit de cloner le projet sur votre machine.
```bash
git https://github.com/daymoove/DevopsTP.git
```

## Utilisation
Pour lancer le projet il suffit d'entrée dans un terminal la command suivante:
```bash
npx tsc
node build/index.js
```

Pour changer le port d'écoute du serveur, il suffit de changer la variable d'environnement PING_LISTEN_PORT. Sinon le port de base est 8080.

Pour obtenir les données de l'API, il suffit d'entrée la commande suivante:
```bash
curl http://localhost:{port}/ping
```

## Notes
Ce projet à pour but de permettre à un utilisateur de récupérer les Headers de la requête HTTP GET sur l'adresse /ping.
Si l'utilisateur envoie une requête HTTP GET sur une autre adresse, il recevra une erreur 404. Ce projet à été réalisé en typescript.