import {useState} from "react";
import {ImageBackground, View} from "react-native";
import {GridStyles as styles} from "@/theme";
import GridUtils from "@/utils/GridUtils";
import {GridRow} from "./GridRow";

export const Grid = () => {
    const background = require("@/assets/img/kyler.png");
    const [grid, setGrid] = useState(GridUtils.generateGrid());
    const [selectedCase, setSelectedCase] = useState<{ row: number; col: number } | null>(null);

    const handleCasePress = (row: number, col: number) => {
        if (selectedCase) {
            const {row: selectedRow, col: selectedCol} = selectedCase;
            const isAdjacent =
                (Math.abs(selectedRow - row) === 1 && selectedCol === col) ||
                (Math.abs(selectedCol - col) === 1 && selectedRow === row);

            if (isAdjacent) {
                switchCase(selectedRow, selectedCol, row, col);
            } else {
                setSelectedCase(null);
            }
        } else {
            setSelectedCase({row, col});
        }
    };

    const switchCase = (row1: number, col1: number, row2: number, col2: number) => {
        const newGrid = grid.map((r) => [...r]);
        [newGrid[row1][col1], newGrid[row2][col2]] = [newGrid[row2][col2], newGrid[row1][col1]];

        if (checkMatch(newGrid, row1, col1) || checkMatch(newGrid, row2, col2)) {
            setGrid(newGrid);
        } else {
            setGrid(grid);
        }
        setSelectedCase(null);
    };

    const checkMatch = (grid: any[][], row: number, col: number): boolean => {
        const image = grid[row][col];
        let horizontalCount = 1;
        for (let i = col - 1; i >= 0 && grid[row][i] === image; i--) horizontalCount++;
        for (let i = col + 1; i < GridUtils.GRID_SIZE && grid[row][i] === image; i++) horizontalCount++;
        if (horizontalCount >= 3) return true;

        let verticalCount = 1;
        for (let i = row - 1; i >= 0 && grid[i][col] === image; i--) verticalCount++;
        for (let i = row + 1; i < GridUtils.GRID_SIZE && grid[i][col] === image; i++) verticalCount++;

        return verticalCount >= 3;
    };

    return (
        <View style={styles.containerGrid}>
            <ImageBackground source={background} resizeMode="cover" style={styles.image}>
                {grid.map((row, rowIndex) => (
                    <GridRow key={rowIndex} row={row} rowIndex={rowIndex} selectedCase={selectedCase}
                             onCasePress={handleCasePress}/>
                ))}
            </ImageBackground>
        </View>
    );
};
