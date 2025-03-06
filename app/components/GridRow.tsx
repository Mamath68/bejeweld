import {FC} from "react";
import {View} from "react-native";
import {GridRowStyles as styles} from "@/theme";
import {GridCell} from "./GridCell";

interface GridRowProps {
    row: any[];
    rowIndex: number;
    selectedCase: { row: number; col: number } | null;
    onCasePress: (row: number, col: number) => void;
}

export const GridRow: FC<GridRowProps> = ({row, rowIndex, selectedCase, onCasePress}) => {
    return (
        <View style={styles.grille}>
            {row.map((image, colIndex) => (
                <GridCell key={colIndex} image={image} row={rowIndex} col={colIndex} selectedCase={selectedCase}
                          onCasePress={onCasePress}/>
            ))}
        </View>
    );
};
