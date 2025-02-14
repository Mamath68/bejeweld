import React, {Component} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import styles from "@/assets/theme/style";

// Définition de la taille de la grille (8×8).
const GRID_SIZE = 8;

/* Tableau d'image, pour les joyaux de la grille */
const IMAGES = [
    require('@/assets/images/stones/diamond.png'),
    require('@/assets/images/stones/emeraude.png'),
    require('@/assets/images/stones/ruby.png'),
    require('@/assets/images/stones/sapphire.png'),
    require('@/assets/images/stones/ambre.png'),
    require('@/assets/images/stones/citrine.png'),
    require('@/assets/images/stones/amethyst.png'),
    require('@/assets/images/stones/cristal.png'),
];

/* Interface Gérant l'état initial de la grille.
* grid pour la grille.
* selectedCase contient les coordonnées (row et col) de la case sélectionnée, si aucune n’est sélectionnée, renvoie null.
*  */
interface GridState {
    grid: any[][];
    selectedCase: { row: number; col: number } | null;
}

export default class Grid extends Component<{}, GridState> {
    /*
    * Initialise l'état avec une grille générée aléatoirement (generateGrid) et aucune case sélectionnée (selectedCase : null).
    */
    constructor(props: {}) {
        super(props);

        this.state = {
            grid: this.generateGrid(),
            selectedCase: null,
        };
    }

    /*
    * Crée un tableau 8×8, où chaque case est remplie par une image aléatoire du tableau IMAGES.
    * Détail :
    * Array.from : génère un tableau d'une taille donnée.
    * Math.random : génère un nombre aléatoire pour choisir une image.
    * */
    private generateGrid(): any[][] {
        return Array.from({length: GRID_SIZE}, () =>
            Array.from({length: GRID_SIZE}, () =>
                IMAGES[Math.floor(Math.random() * IMAGES.length)]
            )
        );
    }

    /*
    * fonction appelée quand on touche une case.
    * Si une case est déjà sélectionnée :
        * vérifie si une case est à proximité (droite, gauche, haut, bas).
        * si c’est le cas, echange sa place grâce à switchCase.
        * sinon, désélectionne la case.
    * Si aucune case n’est sélectionnée, enregistre la case pressée comme selectedCase.
    * */
    private handleCasePress = (row: number, col: number) => {
        const {selectedCase} = this.state;

        if (selectedCase) {
            const {row: selectedRow, col: selectedCol} = selectedCase;

            const isAdjacent =
                (Math.abs(selectedRow - row) === 1 && selectedCol === col) ||
                (Math.abs(selectedCol - col) === 1 && selectedRow === row);

            if (isAdjacent) {
                this.switchCase(selectedRow, selectedCol, row, col);
            } else {
                this.setState({selectedCase: null});
            }
        } else {
            this.setState({selectedCase: {row, col}});
        }
    };

    /*
    * Effectue un échange entre deux cases.
    * Étapes :
        *  Copie la grille actuelle pour éviter des modifications directes.
        * Échange les deux case choisis.
        * Vérifie si l'échange forme un alignement avec checkMatch.
            * Si oui, met à jour la grille.
            * Sinon, annule l'échange et restaure la grille d'origine.
    * */
    private switchCase = (row1: number, col1: number, row2: number, col2: number) => {
        this.setState(prevState => {
            const newGrid = [...prevState.grid.map(row => [...row])];

            const temp = newGrid[row1][col1];
            newGrid[row1][col1] = newGrid[row2][col2];
            newGrid[row2][col2] = temp;

            if (
                this.checkMatch(newGrid, row1, col1) ||
                this.checkMatch(newGrid, row2, col2)
            ) {
                return {grid: newGrid, selectedCase: null};
            } else {
                newGrid[row2][col2] = newGrid[row1][col1];
                newGrid[row1][col1] = temp;
                return {grid: prevState.grid, selectedCase: null};
            }
        });
    };

    /*
    * Vérifie si une case donnée crée un alignement horizontal ou vertical de TROIS cellules identiques ou plus.
    * Détail :
        *   Compte les cases identiques dans les deux directions (gauche/droite et haut/bas).
        *   Retourne true si au moins un alignement valide est trouvé.
    * */
    private checkMatch = (grid: any[][], row: number, col: number): boolean => {
        const image = grid[row][col];

        let horizontalCount = 1;
        for (let i = col - 1; i >= 0 && grid[row][i] === image; i--) horizontalCount++;
        for (let i = col + 1; i < GRID_SIZE && grid[row][i] === image; i++) horizontalCount++;

        if (horizontalCount >= 3) return true;

        let verticalCount = 1;
        for (let i = row - 1; i >= 0 && grid[i][col] === image; i--) verticalCount++;
        for (let i = row + 1; i < GRID_SIZE && grid[i][col] === image; i++) verticalCount++;

        return verticalCount >= 3;
    };

    /*
    * Chaque case :
        *   Est un bouton (TouchableOpacity) avec une image.
        *   Met en évidence (styles.selectedCase) la case sélectionnée.
    * */
    render() {
        const {grid, selectedCase} = this.state;

        return (
            <View style={styles.containerGrid}>
                {grid.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.grille}>
                        {row.map((image, colIndex) => {
                            const isSelected =
                                selectedCase?.row === rowIndex &&
                                selectedCase?.col === colIndex;

                            return (
                                <TouchableOpacity
                                    key={colIndex}
                                    style={[
                                        styles.case,
                                        isSelected && styles.selectedCase,
                                    ]}
                                    onPress={() => this.handleCasePress(rowIndex, colIndex)}
                                >
                                    <Image
                                        source={image}
                                        style={styles.imageGrid}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                ))}
            </View>
        );
    }
}
