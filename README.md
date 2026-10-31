[Voir mon portfolio](https://bienvenue2002.github.io/)

# Portfolio d'Abra-Bienvenue Tchakah

Étudiante en Master Management des Systèmes d’Information à Grenoble IAE, je présente ici mon parcours et mes projets en data et systèmes d’information.

Le site associe un fond bleu nuit, des accents dorés et des titres en Playfair Display.
Une seule page regroupe l'accueil, ma présentation, mes projets, mes expériences, mes centres d'intérêt et mes coordonnées.

## Contenu

Élan MSI figure en première position dans les projets : un portail dédié aux débouchés du Master MSI, avec recherche internationale, interface en six langues et collecte quotidienne BPCE. Sa fiche donne accès au [site public](https://bienvenue2002.github.io/observatoire-emploi-data/) et au [code source](https://github.com/bienvenue2002/observatoire-emploi-data).

- **`index.html`** : structure et contenu.
- **`style.css`** : couleurs, polices et mise en page adaptée aux différents écrans.
- **`script.js`** : interactions (machine à écrire, carrousel, fenêtres modales, fond animé).
- **`assets/cv.pdf`** : CV téléchargeable depuis le site.
- **`assets/photo.jpg`** : photo affichée dans la section d'accueil.

## Liens GitHub du site

- [Mon profil GitHub](https://github.com/bienvenue2002)
- [Simulateur de budget étudiant](https://github.com/bienvenue2002/Simulateur-budget-etudiant)
- [Analyse salaire-productivité dans l'UE](https://github.com/bienvenue2002/salaire-productivite-analyse-ue)
- [Code source du portfolio](https://github.com/bienvenue2002/bienvenue2002.github.io)

## Publier sur GitHub Pages

### Mettre à jour le dépôt existant

Le dépôt `bienvenue2002.github.io` existe déjà et le site est publié.
Pour le mettre à jour, utilise le dossier du dépôt existant ou clone-le :

```bash
git clone https://github.com/bienvenue2002/bienvenue2002.github.io.git
cd bienvenue2002.github.io
```

Après avoir modifié les fichiers :

```bash
git add .
git commit -m "Mise à jour du portfolio"
git push origin main
```

### Première publication depuis un dossier sans dépôt Git

Ces étapes servent uniquement à une nouvelle installation, pas à recréer le dépôt actuel.
Crée d'abord un dépôt GitHub vide nommé `<pseudo>.github.io`, sans README prérempli.
Si le dépôt distant existe déjà et contient des fichiers, clone-le plutôt avec la méthode ci-dessus.

Depuis le dossier contenant les fichiers du site :

```bash
git init
git add .
git commit -m "Premier commit"
git branch -M main
git remote add origin https://github.com/<pseudo>/<pseudo>.github.io.git
git push -u origin main
```

Remplace `<pseudo>` par ton identifiant GitHub.
Si le dossier est déjà un dépôt Git, ne relance pas l'initialisation et vérifie l'adresse distante avec `git remote -v` avant d'ajouter `origin`.

Dans **Settings → Pages**, choisis **Deploy from a branch**, puis la branche `main` et le dossier racine `/`.
Pour ce portfolio, l'adresse publiée est [bienvenue2002.github.io](https://bienvenue2002.github.io/).

## Personnaliser

- **Photo** : remplace `assets/photo.jpg` par une autre image en gardant le même nom de fichier.
- **Couleurs** : modifie les variables dans `:root`, en haut de `style.css` (`--gold` pour l'accent, `--bg` pour le fond).
