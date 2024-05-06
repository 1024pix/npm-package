# npm-package

Template de repo pour générer un package npm utilisable dans des projets Node.js, en bénéficiant de l'outillage Pix.

## Fonctionnalités

- Auto-release npm et changelogs auto
- Tests auto (natif Node.js)
- Auto-merge
- Renovate

## Usage

Sur GitHub, il faut cliquer sur le bouton "Use this template" puis "Create a new repository".

Choisir un nom de projet, `pix` n'y est pas nécessaire.

### Configuration

Avant tout, il faut configurer ce nouveau repo GitHub. La suite des opérations se passent dans l'onglet "Settings" de GitHub.

#### Accès

Les équipes suivantes doivent avoir accès au projet ("Collaborators and teams") :

- `admin` : Rôle Admin
- `admin-bots` : Rôle Admin
- `dev` : Rôle Admin
- `merge-bots` : Rôle Write

#### Secrets

Ces secrets GitHub ("Secrets and variables" > "Actions" > "Repository secrets") sont nécessaires :

- `PIX_SERVICE_ACTIONS_TOKEN`, à récupérer dans le gestionnaire de mots de passe.
- `NPM_PUBLISH_ACCESS_TOKEN`, à configurer sur https://www.npmjs.com/ avec le compte dédié.

L'équipe Captains pourra vous aider si vous ne savez pas comment les configurer.

### Initialisation

Cloner votre projet localement et rechercher/remplacer toutes les références à `npm-package` en votre nom de projet.

Mettre à jour le README.md, voici un template qui peut servir :

<details>
<summary>Exemple de README.md</summary>

```markdown
# @1024pix/npm-package

[![npm](https://img.shields.io/npm/v/@1024pix/npm-package)](https://npmjs.com/package/@1024pix/npm-package)

## Installation

`$ npm install --save @1024pix/npm-package`

## Développement

### Tests auto

`$ npm run test`
```

</details>

Pour déclencher une première release, il faut merger [une PR au format habituel](https://github.com/1024pix/pix/blob/dev/CONTRIBUTING.md#format).
