class GridUtils {
    static GRID_SIZE = 8;

    static IMAGES = [
        require("@/assets/images/stones/green.webp"),
        require("@/assets/images/stones/red.webp"),
        require("@/assets/images/stones/water.webp"),
        require("@/assets/images/stones/white.webp"),
        require("@/assets/images/stones/black.webp"),
        require("@/assets/images/stones/incolor.png"),
        require("@/assets/images/stones/chandra.png"),
        require("@/assets/images/stones/nissa.png"),
    ];

    static generateGrid(): any[][] {
        return Array.from({ length: GridUtils.GRID_SIZE }, () =>
            Array.from({ length: GridUtils.GRID_SIZE }, () =>
                GridUtils.IMAGES[Math.floor(Math.random() * GridUtils.IMAGES.length)]
            )
        );
    }
}

export default GridUtils;
