import React, { FC, useRef, useEffect } from "react";
import { Animated, Image, ImageSourcePropType, PanResponder } from "react-native";
import { GridCellStyles as styles } from "@/theme";

interface GridCellProps {
    image: ImageSourcePropType;
    row: number;
    col: number;
    selectedCase: { row: number; col: number } | null;
    onCaseSwipe: (row: number, col: number, direction: "up" | "down" | "left" | "right") => void;
    isSwapping?: boolean; // 👈 indique si cette case est en animation
}

export const GridCell: FC<GridCellProps> = ({ image, row, col, selectedCase, onCaseSwipe, isSwapping }) => {
    const isSelected = selectedCase?.row === row && selectedCase?.col === col;

    // Animation de position
    const translateX = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(0)).current;

    // Réinitialiser après un swap
    useEffect(() => {
        if (!isSwapping) {
            Animated.timing(translateX, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true,
            }).start();
            Animated.timing(translateY, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true,
            }).start();
        }
    }, [isSwapping]);

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderRelease: (evt, gestureState) => {
                const { dx, dy } = gestureState;
                const absDx = Math.abs(dx);
                const absDy = Math.abs(dy);

                if (Math.max(absDx, absDy) > 20) {
                    let direction: "up" | "down" | "left" | "right" | null = null;

                    if (absDx > absDy) {
                        direction = dx > 0 ? "right" : "left";
                    } else {
                        direction = dy > 0 ? "down" : "up";
                    }

                    if (direction) {
                        onCaseSwipe(row, col, direction);
                    }
                }
            },
        })
    ).current;

    return (
        <Animated.View
            {...panResponder.panHandlers}
            style={[
                styles.case,
                isSelected && styles.selectedCase,
                {
                    transform: [
                        { translateX },
                        { translateY }
                    ],
                },
            ]}
        >
            <Image source={image} style={styles.image} resizeMode="contain" />
        </Animated.View>
    );
};
