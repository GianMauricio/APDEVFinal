class Grid extends ccui.Layout{
    constructor(){
        super();
        
        this.Tiles = new Array(8);
        this.totalTiles = 0;
        
        //Tile movement logic
        //Will be based on clicking for now
        this.tileClicked = false;
        
        for(var i = 0; i < this.Tiles.length; i++){
            this.Tiles[i] = new Array(8);
        }
        
        for(var i = 0; i < this.Tiles.length; i++){
            for(var j = 0; j < this.Tiles.length; j++){
                this.Tiles[i][j] = new Tile(35, Math.floor(Math.random() * 6), i * 100 + 40, j * 100 + 40); //new vec2(num, num)
                this.addChild(this.Tiles[i][j]);
            }
        }
        
        this.ClickListener = null;
        //this.addComponent(new GameLayerResizer());
        //this.addComponent(new FitToWindow());
        //this.addComponent(new EnableOnLandscape());
    }

    onEnter(){
        super.onEnter();
        this.setContentSize(800, 800);
        
        this.ClickListener = new Clickable();
        this.addComponent(this.ClickListener);
    }
    
    getTile(LocX, LocY){
        console.log("getTile called");
        //Check if query is within any "tile" (measures square region despite tiles being circular)
        for(var i = 0; i < this.Tiles.length; i++){
            for(var j = 0; j < this.Tiles.length; j++){
                if(this.checkBounds(LocX, LocY, this.Tiles[i][j])){
                    console.log("Tile found at: " + i + " , " + j);
                    //this.Tiles[i][j].setColor(0);
                }
            }
        }
    }
    
    //Checks if the point passed was within the bounds of the sprite passed
    checkBounds(PosX, PosY, Tile){
        //console.log("Comparing: " + PosX + ", " + PosY);
        //console.log("To: " + Tile.getData("PosX") + ", " + Tile.getData("PosY"));
        
        let WorldPos = cc.p(PosX, PosY);
        let NodePos = this.convertToNodeSpace(WorldPos);
        
        let currScale = this.getParent().getScale();
        console.log(currScale);
        
        //Check horizontal bounds
        if(NodePos.x > Tile.getData("PosX") && NodePos.x < Tile.getData("PosX") + Tile.getData("Radius") * 2 * currScale){
            //Check vertical bounds
            if(NodePos.y > Tile.getData("PosY") && NodePos.y < Tile.getData("PosY") + Tile.getData("Radius") * 2 * currScale){
                console.log(Tile.getData("COLOR"));
                return true;
            }
        }
        
        return false;
    }
    
    updateBounds(){}
}