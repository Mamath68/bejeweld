import {useState} from 'react';
import {Image, LayoutAnimation, Platform, UIManager, View} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {GridStyles} from '../../theme';

const icons = [
    require('../../assets/img/black.webp'),
    require('../../assets/img/green.webp'),
    require('../../assets/img/red.webp'),
    require('../../assets/img/water.webp'),
    require('../../assets/img/white.webp'),
    require('../../assets/img/incolor.png'),
    require('../../assets/img/nissa.png'),
    require('../../assets/img/chandra.png'),
];

// Enable animation on android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Create a grid with random icons
const customGrid = (rows, cols) =>
    Array.from({length: rows}, () =>
        Array.from({length: cols}, () => icons[Math.floor(Math.random() * icons.length)])
    );

export const Grid = ({onScoreUpdate}) => {
    const numRows = 8;
    const numCols = 8;
    const [grid, setGrid] = useState(() => customGrid(numRows, numCols));

    const swapCells = (row1, col1, row2, col2) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const newGrid = grid.map(row => [...row]);
        [newGrid[row1][col1], newGrid[row2][col2]] = [newGrid[row2][col2], newGrid[row1][col1]];
        setGrid(newGrid);
        setTimeout(() => processMatchesAsync(newGrid), 300);
    };

    const processMatchesAsync = (currentGrid) => {
        const matches = findMatches(currentGrid);
        let matchedCount = 0;
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                if (matches[row][col]) matchedCount++;
            }
        }
        if (matchedCount > 0 && onScoreUpdate) {
            onScoreUpdate(matchedCount);
        }
        const {newGrid, matchFound} = removeMatches(currentGrid, matches);
        if (!matchFound) {
            setGrid(currentGrid);
            return;
        }
        LayoutAnimation.configureNext({
            duration: 300,
            update: {type: LayoutAnimation.Types.easeInEaseOut},
            delete: {type: LayoutAnimation.Types.easeInEaseOut, property: LayoutAnimation.Properties.opacity},
        });
        setGrid(newGrid);
        setTimeout(() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            const droppedGrid = dropCells(newGrid);
            const filledGrid = fillEmptyCells(droppedGrid);
            setGrid(filledGrid);
            setTimeout(() => processMatchesAsync(filledGrid), 300);
        }, 300);
    };

    const findMatches = (grid) => {
        const matches = grid.map(row => row.map(() => false));
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                const icon = grid[row][col];
                if (!icon) continue;
                // Horizontal matches
                if (col <= numCols - 3 &&
                    grid[row][col + 1] === icon &&
                    grid[row][col + 2] === icon) {
                    let c = col;
                    while (c < numCols && grid[row][c] === icon) {
                        matches[row][c] = true;
                        c++;
                    }
                }
                // Vertical matches
                if (row <= numRows - 3 &&
                    grid[row + 1][col] === icon &&
                    grid[row + 2][col] === icon) {
                    let r = row;
                    while (r < numRows && grid[r][col] === icon) {
                        matches[r][col] = true;
                        r++;
                    }
                }
            }
        }
        return matches;
    };

    const removeMatches = (grid, matches) => {
        const newGrid = grid.map(row => row.slice());
        let matchFound = false;
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                if (matches[row][col]) {
                    newGrid[row][col] = null;
                    matchFound = true;
                }
            }
        }
        return {newGrid, matchFound};
    };

    const dropCells = (grid) => {
        const newGrid = grid.map(row => row.slice());
        for (let col = 0; col < numCols; col++) {
            for (let row = numRows - 1; row >= 0; row--) {
                if (newGrid[row][col] === null) {
                    for (let above = row - 1; above >= 0; above--) {
                        if (newGrid[above][col] !== null) {
                            newGrid[row][col] = newGrid[above][col];
                            newGrid[above][col] = null;
                            break;
                        }
                    }
                }
            }
        }
        return newGrid;
    };

    const fillEmptyCells = (grid) => {
        const newGrid = grid.map(row => row.slice());
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                if (newGrid[row][col] === null) {
                    newGrid[row][col] = icons[Math.floor(Math.random() * icons.length)];
                }
            }
        }
        return newGrid;
    };

    return (
        <View style={GridStyles.gridContainer}>
            {grid.map((row, rowIndex) => (
                <View style={GridStyles.row} key={rowIndex}>
                    {row.map((imagePath, colIndex) => (
                        <GestureRecognizer
                            key={`${rowIndex}-${colIndex}`}
                            onSwipeLeft={() =>
                                colIndex > 0 && swapCells(rowIndex, colIndex, rowIndex, colIndex - 1)
                            }
                            onSwipeRight={() =>
                                colIndex < numCols - 1 && swapCells(rowIndex, colIndex, rowIndex, colIndex + 1)
                            }
                            onSwipeUp={() =>
                                rowIndex > 0 && swapCells(rowIndex, colIndex, rowIndex - 1, colIndex)
                            }
                            onSwipeDown={() =>
                                rowIndex < numRows - 1 && swapCells(rowIndex, colIndex, rowIndex + 1, colIndex)
                            }
                            style={GridStyles.cell}
                        >
                            {imagePath && <Image source={imagePath} style={GridStyles.image}/>}
                        </GestureRecognizer>
                    ))}
                </View>
            ))}
        </View>
    );
};
