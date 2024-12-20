import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

const GRID_SIZE = 8;

// Palette de couleurs possibles
const COLORS = [
    '#FF5733',
    '#33FF57',
    '#3357FF',
    '#FF33A8',
    '#FFD433'
];

interface GridState {
    grid: string[][]; // Chaque cellule contient une couleur
}

export default class Grid extends Component<{}, GridState> {
    constructor(props: {}) {
        super(props);

        // Génère une grille 8×8 avec des couleurs aléatoires
        this.state = {
            grid: this.generateGrid(),
        };
    }

    // Méthode pour générer une grille avec des couleurs aléatoires
    private generateGrid(): string[][] {
        return Array.from({length: GRID_SIZE}, () =>
            Array.from({length: GRID_SIZE}, () =>
                COLORS[Math.floor(Math.random() * COLORS.length)]
            )
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.grid.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map((color, colIndex) => (
                            <View
                                key={colIndex}
                                style={[styles.cell, {backgroundColor: color}]} // Applique une couleur unique
                            />
                        ))}
                    </View>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        width: 40,
        height: 40,
        margin: 2,
    },
});
