class Grid extends ccui.Layout{
    constructor(){
        super();
        
        this.totalTiles = 0;
        
        //Tracks currently selected tile
        this.tileActive = false;
        this.activeX = 0;
        this.activeY = 0;
        
        //Board creation
        this.Tiles = new Array(8);
        for(var i = 0; i < this.Tiles.length; i++){
            this.Tiles[i] = new Array(8);
        }
        
        //Board Initialization
        for(var i = 0; i < this.Tiles.length; i++){
            for(var j = 0; j < this.Tiles.length; j++){
                this.Tiles[i][j] = new Tile(35, Math.floor(Math.random() * 6), i * 100 + 40, j * 100 + 40); //new vec2(num, num)
                this.addChild(this.Tiles[i][j]);
            }
        }
        
        //Make sure that the board doesn't start with pre-matched tiles
        for(var i = 0; i < this.Tiles.length; i++){
            for(var j = 0; j < this.Tiles.length; j++){
                //Check all adjacent tiles and if the color matches, randomize the tile
                //Check tiles across
                if(i < 7 && i > 0){
                    while(this.Tiles[i][j].getColor() == this.Tiles[i + 1][j].getColor() ||
                       this.Tiles[i][j].getColor() == this.Tiles[i - 1][j].getColor()){
                        this.Tiles[i][j].setColor(Math.floor(Math.random() * 6));
                    }
                }
                
                //Check tiles above and below
                if(j < 7 && j > 0){
                    //Do until not matching any
                    while(this.Tiles[i][j].getColor() == this.Tiles[i][j + 1].getColor() ||
                       this.Tiles[i][j].getColor() == this.Tiles[i][j - 1].getColor()){
                        this.Tiles[i][j].setColor(Math.floor(Math.random() * 6));
                    }
                }
            }
        }
        
        this.ClickListener = null;
        this.TouchListener = null;
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
        let switchMade = false;
        //Check if query is within any "tile" (measures square region despite tiles being circular)
        for(var i = 0; i < this.Tiles.length; i++){
            for(var j = 0; j < this.Tiles.length; j++){
                if(this.checkBounds(LocX, LocY, this.Tiles[i][j])){
                    //Check for active tile
                    if(this.tileActive){
                        //console.log("Attempting to switch...");
                        
                        //Data check
                        //console.log("Active tile at: " + this.activeY + ", " + this.activeX);
                        //console.log("Tile to swtich at: " + i + ", " + j);
                        
                        //Check for vertical adjacency
                        if(this.activeX == j - 1 && this.activeY == i || 
                           this.activeX == j + 1 && this.activeY == i){
                            //console.log("Vertical Match found!");
                            
                            //Switch tile colors (Needed to write down the steps coz I am small brain)
                            //Set variable to hold current tile color
                            let currTileColor = this.Tiles[this.activeY][this.activeX].getColor();
                            
                            //Set current tile color to other tile color
                            this.Tiles[this.activeY][this.activeX].setColor(this.Tiles[i][j].getColor());
                            
                            //Set other tile color to current tile color (from stored variable)
                            this.Tiles[i][j].setColor(currTileColor);
                            
                            //Reset active Tile to false
                            this.tileActive = false;
                            this.activeX = 0;
                            this.activeY = 0;
                            
                            //Set Switch made to true
                            switchMade = true;
                        }
                        
                        //Check for horizontal adjacency
                        else if(this.activeY == i - 1 && this.activeX == j || 
                                this.activeY == i + 1 && this.activeX == j){
                            //console.log("Horizontal Match found!");
                            
                            //Switch tile colors (Needed to write down the steps coz I am small brain)
                            //Set variable to hold current tile color
                            let currTileColor = this.Tiles[this.activeY][this.activeX].getColor();
                            
                            //Set current tile color to other tile color
                            this.Tiles[this.activeY][this.activeX].setColor(this.Tiles[i][j].getColor());
                            
                            //Set other tile color to current tile color (from stored variable)
                            this.Tiles[i][j].setColor(currTileColor);
                            
                            //Reset active Tile to false
                            this.tileActive = false;
                            this.activeX = 0;
                            this.activeY = 0;
                            
                            //Set switch made to true
                            switchMade = true;
                        }
                        
                        //If no adjacency detected, unselect tile
                        else{
                            console.log("No match found, unselecting tile");
                            this.tileActive = false;
                            this.activeX = 0;
                            this.activeY = 0;
                        }
                    }
                    
                    //Otherwise set currently Selected tile
                    else{
                        //console.log("Setting new active tile");
                        this.tileActive = true;
                        this.activeX = j;
                        this.activeY = i;
                    }
                }
            }
        }

        //If a switch was made sucessfully
        if(switchMade){
            //Check the grid for matches
            //this.checkGrid();
        }
    }
    
    //Checks if the point passed was within the bounds of the sprite passed
    checkBounds(PosX, PosY, Tile){
        //Take the world Pos of the mouse...
        let WorldPos = cc.p(PosX, PosY);
        
        //Convert it to nodespace using the layout as the reference
        let NodePos = this.convertToNodeSpace(WorldPos);
        
        //Get the current scale factor of the layer
        let currScale = this.getParent().getScale();
        
        //Check horizontal bounds
        if(NodePos.x > Tile.getData("PosX") && NodePos.x < Tile.getData("PosX") + Tile.getData("Radius") * 2 * currScale + 30){
            //Check vertical bounds
            if(NodePos.y > Tile.getData("PosY") && NodePos.y < Tile.getData("PosY") + Tile.getData("Radius") * 2 * currScale + 30){
                
                //Verify tile color
                console.log(Tile.getData("COLOR"));
                return true;
            }
        }
        
        return false;
    }
    
    //Runs through the grid and checks for match 3's
    checkGrid(TileX, TileY){
        //This needs to be as efficient as possible...
        
        /*
        //Time complexity: 2(n^2) (Check the entire grid for triplicates)
        //Search rows
        for(var i = 0; i < this.Tiles.length; i++){
            for(var j = 0; j < this.Tiles.length; j++){
                //Check that current tile isn't near the right most edge
                if(j < 6){
                    //Check if both tiles (to the right) are the same color as the current tile
                    if(this.Tiles[i][j].getColor() == this.Tiles[i][j + 1].getColor() == this.Tiles[i][j + 2].getColor()){
                        this.Tiles[i][j].match();
                        this.Tiles[i][j + 1].match();
                        this.Tiles[i][j + 2].match();
                    }
                }
            }
        }
        
        //Search columns
        for(var i = 0; i < this.Tiles.length; i++){
            for(var j = 0; j < this.Tiles.length; j++){
                //Check that current tile isn't on the top
                if(i < 6){
                    //Check if both tiles (to the right) are the same color as the current tile
                    if(this.Tiles[i][j].getColor() == this.Tiles[i + 1][j].getColor() == this.Tiles[i + 2][j].getColor()){
                        this.Tiles[i][j].match();
                        this.Tiles[i + 1][j].match();
                        this.Tiles[i + 2][j].match();
                    }
                }
            }
        }
        */
        
        //Time complexity: C
        //Uses different logic depending on how close the tile is to the side of the grid
    }
    
    updateBounds(){}
}