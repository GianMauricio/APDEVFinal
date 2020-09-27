class Grid extends ccui.Layout{
    constructor(){
        super();
        
        this.Tiles = new Array(8);
        
        this.totalTiles = 0;
        
        for(var i = 0; i < this.Tiles.length; i++){
            this.Tiles[i] = new Array(8);
        }
        
        for(var i = 0; i < this.Tiles.length; i++){
            for(var j = 0; j < this.Tiles.length; j++){
                this.Tiles[i][j] = new Tile(35, Math.floor(Math.random() * 6), i * 100 + 40, j * 100 + 40); //new vec2(num, num)
                this.addChild(this.Tiles[i][j]);
            }
        }
    }

    onEnter(){
        super.onEnter();
        this.setContentSize(800, 800);
    }
}