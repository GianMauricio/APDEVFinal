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
    
    getTile(LocX, LocY){
        //Check if query is within any "tile" (measures square region despite tiles being circular)
        for(var i = 0; i < this.Tiles.length; i++){
            for(var j = 0; j < this.Tiles.length; j++){
                if(checkBounds(LocX, LocY, Tiles[i][j])){
                    Tiles[i][j].setColor(0);
                }
            }
        }
    }
    
    //Checks if the point passed was within the bounds of the sprite passed
    checkBounds(PosX, PosY, Tile){
        //Check horizontal bounds
        if(PosX > Tile.getData("PosX") && PosX < Tile.getData("PosX") + Tile.getData("Radius") * 2){
            //Check vertical bounds
            if(PosY > Tile.getData("PosY") && PosY < Tile.getData("PosY") + Tile.getData("Radius") * 2){
                console.log(Tile.getData("COLOR"));
            }
        }
        return true;
    }
}