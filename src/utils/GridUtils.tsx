export const GRID_SIZE = 8; // Taille de la grille

// Liste des images utilisées dans la grille
export const IMAGES = [
    require("@/assets/img/green.webp"),
    require("@/assets/img/red.webp"),
    require("@/assets/img/water.webp"),
    require("@/assets/img/white.webp"),
    require("@/assets/img/black.webp"),
    require("@/assets/img/incolor.png"),
    require("@/assets/img/chandra.png"),
    require("@/assets/img/nissa.png"),
];

/*
   * Crée un tableau 8×8 avec `Array.from`, où chaque case est remplie par une image aléatoire du tableau `IMAGES` grâce à `Math.random`.
   * Détail :
   * Array.from : génère un tableau d'une taille donnée. Utilisé pour créer la grille vide.
   * Math.random : génère un nombre aléatoire pour choisir une image. Utilisé dans la boucle `do...while`.
   * Math.floor : arrondit un nombre à l'entier inférieur. Utilisé pour obtenir un index valide dans `IMAGES`.
   * fill : méthode qui remplit tous les éléments d'un tableau avec une valeur statique. Utilisé pour initialiser la grille vide.
   * length : propriété qui définit ou retourne le nombre d'éléments dans un tableau. Utilisé pour définir la taille de la grille.
   * do...while : boucle qui exécute le bloc de code au moins une fois, puis continue tant que la condition est vraie. Utilisée pour réessayer de choisir une image différente si une combinaison de 3 images identiques est détectée.
   * for : boucle qui permet d'exécuter un bloc de code un nombre fixe de fois. Utilisée pour parcourir chaque case de la grille.
   */
export const generateGrid = (): any[][] => {
    const grid: any[][] = Array.from({length: GRID_SIZE}, () => Array(GRID_SIZE).fill(null));

    for (let row = 0; row < GRID_SIZE; row++) {
        for (let col = 0; col < GRID_SIZE; col++) {
            let newImage;
            let attempts = 0;

            do {
                newImage = IMAGES[Math.floor(Math.random() * IMAGES.length)];
                attempts++;
            } while (
                attempts < 10 &&
                ((col >= 2 && grid[row][col - 1] === newImage && grid[row][col - 2] === newImage) ||
                    (row >= 2 && grid[row - 1][col] === newImage && grid[row - 2][col] === newImage))
                );

            grid[row][col] = newImage;
        }
    }

    return grid; // Retourner la grille générée
};
