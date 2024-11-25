# Fullstack NodeJS Application

Une application full-stack basée sur Node.js, avec une base de données SQL pour la persistance des données.

## 📋 Pré-requis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

- **MySQL** : pour la gestion de la base de données.
- **Node.js** : pour exécuter le backend.
- **Visual Studio Code (VSCode)** : comme éditeur de code recommandé.
- **Extension "Live Server" de VSCode** : pour lancer le frontend.

---

## ⚙️ Configuration de la base de données

1. Connectez-vous à votre serveur MySQL :
```bash
mysql -u <votreUtilisateurMySQL> -p
```

2. Créez la base de données et la table requises :

```sql
CREATE DATABASE my_api;
USE my_api;
CREATE TABLE utilisateur (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom VARCHAR(100)
);
```

## 🚀 Installation et exécution
### Backend
1. Accédez au répertoire backend :
```bash
cd backend
```
2. Installez les dépendances Node.js :

```bash
npm install
```

3. Lancez le serveur backend :

```bash
node app.js
```

Par défaut, l'application sera accessible à l'adresse http://localhost:3000.

### Frontend
Ouvrez le répertoire frontend du projet dans VSCode.

Lancez le fichier HTML du frontend avec Live Server :

- Faites un clic droit sur le fichier HTML principal.
- Sélectionnez "Open with Live Server".
- Le frontend sera accessible dans votre navigateur par défaut.

## 🛠 Fonctionnalités
- Base de données MySQL pour stocker les utilisateurs.
- API backend Node.js pour les opérations CRUD.
- Frontend simple pour interagir avec l'API.

## 📚 Ressources utiles
Installer Node.js
Documentation MySQL
Live Server pour VSCode

## 🤝 Contribution
Les contributions sont les bienvenues ! Pour contribuer :

- Forkez le dépôt.
- Créez une branche pour votre fonctionnalité (git checkout -b feature/nouvelle-fonctionnalite).
- Faites un commit de vos modifications (git commit -m 'Ajout d'une nouvelle fonctionnalité').
- Poussez votre branche (git push origin feature/nouvelle-fonctionnalite).
- Ouvrez une Pull Request.