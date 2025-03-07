class GridUtils {
    static GRID_SIZE = 8;

    static IMAGES = [
        require("@/assets/img/green.webp"),
        require("@/assets/img/red.webp"),
        require("@/assets/img/water.webp"),
        require("@/assets/img/white.webp"),
        require("@/assets/img/black.webp"),
        require("@/assets/img/incolor.png"),
        require("@/assets/img/chandra.png"),
        require("@/assets/img/nissa.png"),
    ];

    static generateGrid(): any[][] {
        return Array.from({length: GridUtils.GRID_SIZE}, () =>
            Array.from({length: GridUtils.GRID_SIZE}, () =>
                GridUtils.IMAGES[Math.floor(Math.random() * GridUtils.IMAGES.length)]
            )
        );
    }
}

export default GridUtils;
