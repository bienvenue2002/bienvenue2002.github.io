# Portfolio — Abra-Bienvenue Tchakah

Portfolio personnel « dark luxury » : fond nuit, accent doré, titres Playfair Display.
Une seule page : accueil, à propos, projets (carrousel), expériences, divers, contact.

## Contenu

- `index.html` — structure et contenu
- `style.css` — styles (design system : couleurs, polices, responsive)
- `script.js` — interactions (machine à écrire, carrousel, modals, fond animé)
- `assets/cv.pdf` — CV téléchargeable depuis le site

## Liens GitHub du site

- Profil : https://github.com/bienvenue2002
- Projet « Simulateur de budget étudiant » : https://github.com/bienvenue2002/Simulateur-budget-etudiant
- Projet « salaire-productivité UE » : https://github.com/bienvenue2002/salaire-productivite-analyse-ue
- Ce portfolio : https://github.com/bienvenue2002/bienvenue2002.github.io

## Publier sur GitHub Pages

1. Crée un repository nommé `bienvenue2002.github.io` (c'est le nom spécial qui
   donne l'adresse `https://bienvenue2002.github.io`).
2. Pousse ces fichiers dedans :

```bash
git add .
git commit -m "Portfolio v1"
git remote add origin https://github.com/bienvenue2002/bienvenue2002.github.io.git
git push -u origin main
```

3. Sur GitHub : **Settings → Pages → Source : `main` (branche) / racine**.
4. Quelques minutes plus tard, le site est en ligne sur
   `https://bienvenue2002.github.io`.

## Personnaliser

- **Photo** : remplacer `assets/photo.jpg` par une autre image (même nom de fichier
  pour ne rien changer d'autre).
- **Couleurs** : tout est piloté par les variables dans `:root` en haut de `style.css`
  (`--gold` pour l'accent, `--bg` pour le fond).
