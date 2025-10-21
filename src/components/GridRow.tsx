import { FC } from "react";
import { ImageSourcePropType, View } from "react-native";
import { GridRowStyles as styles } from "@/theme";
import { GridCell } from "./GridCell";

// Interface pour les props de GridRow
interface GridRowProps {
    row: ImageSourcePropType[];
    rowIndex: number;
    selectedCase: { row: number; col: number } | null;
    onCaseSwipe: (row: number, col: number, direction: "up" | "down" | "left" | "right") => void;
}


// Composant représentant une ligne de la grille
export const GridRow: FC<GridRowProps> = ({ row, rowIndex, selectedCase, onCaseSwipe }) => {
    return (
        <View style={styles.grid}>
            {row.map((image, colIndex) => (
                <GridCell
                    key={colIndex}
                    image={image}
                    row={rowIndex}
                    col={colIndex}
                    selectedCase={selectedCase}
                    onCaseSwipe={onCaseSwipe}
                />
            ))}
        </View>
    );
};
