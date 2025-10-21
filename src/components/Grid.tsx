import { useState } from "react";
import { ImageBackground, View } from "react-native";
import { GridStyles as styles } from "@/theme";
import { generateGrid, GRID_SIZE, IMAGES } from "@/utils/GridUtils";
import { GridRow } from "./GridRow";

export const Grid = () => {
    const background = require("@/assets/img/kyler.png"); // L’image de fond de la grille
    const [grid, setGrid] = useState(generateGrid()); // useState représentant le grille, initialisée avec la fonction generateGrid.
    const [selectedCase, setSelectedCase] = useState<{ row: number; col: number } | null>(null); // useState représentant une case séléctionné. par défaut, y'en as pas.

    const handleCaseSwipe = (row: number, col: number, direction: "up" | "down" | "left" | "right") => {
        let targetRow = row;
        let targetCol = col;

        if (direction === "up" && row > 0) targetRow--;
        else if (direction === "down" && row < GRID_SIZE - 1) targetRow++;
        else if (direction === "left" && col > 0) targetCol--;
        else if (direction === "right" && col < GRID_SIZE - 1) targetCol++;

        switchCase(row, col, targetRow, targetCol);
    };

    const animateSwap = (row1: number, col1: number, row2: number, col2: number) => {
        // Tu peux ajuster cette fonction si tu veux des effets plus complexes
        return new Promise<void>((resolve) => setTimeout(resolve, 200));
    };


    // Fonction qui échange 2 cases.
    const switchCase = async (row1: number, col1: number, row2: number, col2: number) => {
        await animateSwap(row1, col1, row2, col2);

        const newGrid = grid.map((r) => [...r]);
        [newGrid[row1][col1], newGrid[row2][col2]] = [newGrid[row2][col2], newGrid[row1][col1]];

        const aligner = checkAlignement(newGrid);
        const hasAlignement = aligner.some(row => row.includes(true));

        if (hasAlignement) {
            setGrid(newGrid);
            setTimeout(() => resolveAlignement(newGrid), 300);
        } else {
            setSelectedCase(null);
        }
    };


    // Fonction pour vérifier si 3 images identiques sont alignées
    const checkAlignement = (grid: any[][]): boolean[][] => {
        const aligner = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(false)); // Tableau qui suit les cases qui s’assemblent.

        for (let row = 0; row < GRID_SIZE; row++) {
            for (let col = 0; col < GRID_SIZE; col++) {
                const image = grid[row][col];

                // Vérifier un alignement horizontal de 3 cases identiques
                if (col <= GRID_SIZE - 3 && grid[row][col + 1] === image && grid[row][col + 2] === image) {
                    aligner[row][col] = aligner[row][col + 1] = aligner[row][col + 2] = true;
                }

                // Vérifier un alignement vertical de 3 cases identiques
                if (row <= GRID_SIZE - 3 && grid[row + 1][col] === image && grid[row + 2][col] === image) {
                    aligner[row][col] = aligner[row + 1][col] = aligner[row + 2][col] = true;
                }
            }
        }

        return aligner; // Retourne le tableau des cases marquées
    };

    // Fonction pour supprimer les cases correspondantes et faire descendre les autres
    const resolveAlignement = (newGrid: any[][]) => {
        let aligner = checkAlignement(newGrid); // Vérifier les alignements des cases sur la nouvelle grille
        let hasAlignement = aligner.some(row => row.includes(true)); // Vérifier s’il y a au moins un alignement de case.

        if (!hasAlignement) return; // Si aucun alignements, terminer la fonction

        // Étape 1 : Supprimer les cases marquées comme aligné
        for (let row = 0; row < GRID_SIZE; row++) {
            for (let col = 0; col < GRID_SIZE; col++) {
                if (aligner[row][col]) {
                    newGrid[row][col] = null; // Remplacer la case par null
                }
            }
        }

        // Étape 2 : Faire descendre les éléments dans les colonnes
        for (let col = 0; col < GRID_SIZE; col++) {
            let emptySpots = 0; // Compter les cases vides dans la colonne

            for (let row = GRID_SIZE - 1; row >= 0; row--) {
                if (newGrid[row][col] === null) {
                    emptySpots++; // Compter les cases vides
                } else if (emptySpots > 0) {
                    // Déplacer les cases non vides vers le bas
                    newGrid[row + emptySpots][col] = newGrid[row][col];
                    newGrid[row][col] = null;
                }
            }

            // Étape 3 : Remplir les nouvelles cases vides avec des images aléatoires
            for (let row = 0; row < emptySpots; row++) {
                newGrid[row][col] = IMAGES[Math.floor(Math.random() * IMAGES.length)];
            }
        }

        setGrid([...newGrid]); // Mettre à jour l'état de la grille avec la nouvelle grille
        setSelectedCase(null); // Réinitialiser la sélection
        setTimeout(() => resolveAlignement(newGrid), 300); // Vérifier les nouveaux alignements après l'effondrement
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.image}>
                {grid.map((row, rowIndex) => (
                    <GridRow
                        key={rowIndex}
                        row={row}
                        rowIndex={rowIndex}
                        selectedCase={selectedCase}
                        onCaseSwipe={handleCaseSwipe} // 👈 ajout ici
                    />
                ))}
            </ImageBackground>
        </View>
    );
};
