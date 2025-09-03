import { FC } from "react";
import { Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import { GridCellStyles as styles } from "@/themes";

// Interface pour les props de GridCell
interface GridCellProps {
    image: ImageSourcePropType; // L'image de la cellule
    row: number; // Le numéro de la ligne
    col: number; // Le numéro de la colonne
    selectedCase: { row: number; col: number } | null; // La case sélectionnée
    onCasePress: (row: number, col: number) => void; // Fonction qui gère le pressage d'une case
}

// Composant représentant une case individuelle de la grille
export const GridCell: FC<GridCellProps> = ({ image, row, col, selectedCase, onCasePress }) => {
    const isSelected = selectedCase?.row === row && selectedCase?.col === col; // Vérifier si la case est sélectionnée

    return (
        <TouchableOpacity
            style={[styles.case, isSelected && styles.selectedCase]} // Appliquer un style supplémentaire si la case est sélectionnée
            onPress={() => onCasePress(row, col)} // Appeler onCasePress avec les indices de la case lorsque la case est pressée
        >
            <Image source={image} style={styles.image} resizeMode="contain" /*afficher l'image de la case*/ />
        </TouchableOpacity>
    );
};