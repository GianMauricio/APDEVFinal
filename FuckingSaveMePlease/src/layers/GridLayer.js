class GridLayer extends cc.LayerColor{
    constructor(){
        super(cc.color(128, 128, 128, 255), 800, 800);
        
        /*
        this.Tiles = new Array(8);
        this.totalTiles = 0;
        
        for(var i = 0; i < this.Tiles.length; i++){
            this.Tiles[i] = new Array(8);
        }
        
        for(var i = 0; i < this.Tiles.length; i++){
            for(var j = 0; j < this.Tiles.length; j++){
                this.Tiles[i][j] = i + j;
            }
        }
        */
        
        //Grid now has sole responsibility for the tiles
        //Clickability will be handled by the layer and passed as position to the Grid Layout
        this.grid = new Grid();
        this.addChild(this.grid);
        this.addComponent(new GameLayerResizer());
        
        //this.height = 800;
        //this.width = 800;
    }
    
    //Deprecated
    displayTiles(){
        for(var i = 0; i < this.Tiles.length; i++){
            for(var j = 0; j < this.Tiles.length; j++){
                this.totalTiles++;
                console.log(this.totalTiles);
            }
            console.log("\n");
        }
    }
    
<<<<<<< HEAD
    onMouseDown(event){
        if(event == cc.Node.EventType.MOUSE_DOWN){

        console.log(event.x);
        console.log(event.y);
        }

    }
    
=======
>>>>>>> 1005b2d431b1540b250ab34ebb2002f0ec48ade9
    updateBounds(){}
}