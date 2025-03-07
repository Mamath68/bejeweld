import {FC} from "react";
import {Image, TouchableOpacity} from "react-native";
import {GridCellStyles as styles} from "@/theme";

interface GridCellProps {
    image: any;
    row: number;
    col: number;
    selectedCase: { row: number; col: number } | null;
    onCasePress: (row: number, col: number) => void;
}

export const GridCell: FC<GridCellProps> = ({image, row, col, selectedCase, onCasePress}) => {
    const isSelected = selectedCase?.row === row && selectedCase?.col === col;

    return (
        <TouchableOpacity style={[styles.case, isSelected && styles.selectedCase]} onPress={() => onCasePress(row, col)}>
            <Image source={image} style={styles.imageGrid} resizeMode="contain"/>
        </TouchableOpacity>
    );
};
