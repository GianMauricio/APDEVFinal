class TitleLayer extends cc.LayerColor{
    constructor(){
        super();
        
        this.Tiles = new Array(8);
        
        for(var i = 0; i < this.Tiles.length; i++){
            Tiles[i] = new Array(8);
        }
        
        for(var i = 0; i < this.Tiles.length; i++){
            for(var j = 0; j < this.Tiles.length; j++){
                Tiles[i][j] = i + j;
            }
        }
    }
    
    displayTiles(){
        for(var i = 0; i < this.Tiles.length; i++){
            for(var j = 0; j < this.Tiles.length; j++){
                console.log(Tiles[i][j]);
            }
            console.log("\n");
        }
    }
}