import {FC} from "react";
import {ImageSourcePropType, View} from "react-native";
import {GridRowStyles as styles} from "@/theme";
import {GridCell} from "./GridCell";

// Interface pour les props de GridRow
interface GridRowProps {
    row: ImageSourcePropType[]; // L’image pour chaque cellule dans la ligne
    rowIndex: number; // L’index de la ligne
    selectedCase: { row: number; col: number } | null; // La case sélectionnée
    onCasePress: (row: number, col: number) => void; // Fonction pour gérer l'appui sur une case
}

// Composant représentant une ligne de la grille
export const GridRow: FC<GridRowProps> = ({row, rowIndex, selectedCase, onCasePress}) => {
    return (
        <View style={styles.grid}>
            {row.map((image, colIndex) => (
                <GridCell
                    key={colIndex} // Clé unique pour chaque cellule
                    image={image}
                    row={rowIndex} // Passer l'index de la ligne et de la colonne à GridCell
                    col={colIndex}
                    selectedCase={selectedCase}
                    onCasePress={onCasePress}
                />
            ))}
        </View>
    );
};
