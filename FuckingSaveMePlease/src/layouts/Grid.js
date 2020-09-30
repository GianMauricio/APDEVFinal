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
        
        //Inward switch
        let switchX = 0;
        let switchY = 0;
        let seekColor = 0;
        
        //Outwards switch
        let displacedX = 0;
        let displacedY = 0;
        let displacedColor = 0;
        
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
                            
                            //Save the active tile data to the displaced tile
                            displacedColor = this.Tiles[this.activeY][this.activeX].getColor();
                            displacedX = this.activeX;
                            displacedY = this.activeY;
                            
                            //Reset active Tile to false
                            this.tileActive = false;
                            this.activeX = 0;
                            this.activeY = 0;
                            
                            //Set Switch made to true
                            switchMade = true;
                            
                            //Gather switch data
                            switchX = j;
                            switchY = i;
                            seekColor = this.Tiles[i][j].getColor();
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
                            
                            //Save the active tile data to the displaced tile
                            displacedColor = this.Tiles[this.activeX][this.activeY].getColor();
                            displacedX = this.activeX;
                            displacedY = this.activeY;
                            
                            //Reset active Tile to false
                            this.tileActive = false;
                            this.activeX = 0;
                            this.activeY = 0;
                            
                            //Set switch made to true
                            switchMade = true;
                            
                            //Gather switch data
                            switchX = j;
                            switchY = i;
                            seekColor = this.Tiles[i][j].getColor();
                        }
                        
                        //If no adjacency detected, unselect tile
                        else{
                            console.log("No match found, unselecting tile");
                            this.tileActive = false;
                            this.activeX = 0;
                            this.activeY = 0;
                        }
                        
                        //Set all tiles to active state
                        for(var i = 0; i < this.Tiles.length; i++){
                            for(var j = 0; j < this.Tiles.length; j++){
                                this.Tiles[i][j].setSelected();
                            }
                        }
                    }
                    
                    //Otherwise set currently Selected tile
                    else{
                        //console.log("Setting new active tile");
                        this.tileActive = true;
                        this.activeX = j;
                        this.activeY = i;
                        
                        
                        //Set all tiles to inactive state
                        for(var i = 0; i < this.Tiles.length; i++){
                            for(var j = 0; j < this.Tiles.length; j++){
                                this.Tiles[i][j].setUnSelected();
                            }
                        }
                        
                        //Set active tile to active state
                        this.Tiles[this.activeY][this.activeX].setSelected();
                    }
                }
            }
        }

        //If a switch was made sucessfully
        if(switchMade){
            //Check the tile moved for matches
            this.checkGrid(switchX, switchY, seekColor);
            
            //Check the tile that got moved for matches
            this.checkGrid(displacedX, displacedY, displacedColor);
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
                //console.log(Tile.getData("COLOR"));
                return true;
            }
        }
        
        return false;
    }
    
    //Runs through the grid and checks for match 3's
    checkGrid(TileX, TileY, color){
        //This needs to be as efficient as possible...
        
        //Time complexity: 2(n^2) (Check the entire grid for triplicates)
        /*
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
        
        //Time complexity: 4log(n)
        //Uses recursion logic to check for matching tiles adjacent to current tile, and count matches found
        let upMatches = this.detectUp(color, TileX, TileY, 0);
        let leftMatches = this.detectLeft(color, TileX, TileY, 0);
        let rightMatches = this.detectRight(color, TileX, TileY, 0);
        let downMatches = this.detectDown(color, TileX, TileY, 0);
        
        //Gimme that sweet sweet data
        //console.log("Up: " + upMatches);
        //console.log("Left: " + leftMatches);
        //console.log("Right: " + rightMatches);
        //console.log("Down: " + downMatches);
        
        //If there are matches in any orientation...
        if(upMatches + downMatches - 1 > 2){
            //Schedule the tiles in those directions for replacement
            for(var i = 0; i < upMatches; i++){
                console.log("Scheduling tile at: " + i + ", " + TileX + " for replacement up matches");
                this.Tiles[TileY ][TileX + i].match();
            }

            for(var i = 0; i < downMatches; i++){
                console.log (i + " down");
                console.log("Scheduling tile at: " + i + ", " + TileX + " for replacement down matches");
                this.Tiles[TileY ][TileX - i].match();
            }
        }

        if(leftMatches + rightMatches - 1 > 2){
            //Schedule the tiles in those directions for replacement
            for(var i = 0; i < rightMatches; i++){
                console.log("Scheduling tile at: " + TileY + ", " + i + " for replacement right matches");
                this.Tiles[TileY + i][TileX].match();
            }

            for(var i = 0; i < leftMatches; i++){
                console.log("Scheduling tile at: " + TileY + ", " + i + " for replacement left matches");
                this.Tiles[TileY- i][TileX ].match();
            }
        }
    }
    
    //Detection alg for right
    detectRight(ColorCode, atX, atY, matchesFound){
        //Check if the tile currently being checked matches the color code needed
        if(this.Tiles[atY][atX].getColor() == ColorCode){
            matchesFound++;
            
            //Check if the tile being checked is already on the right most row
            if(atY == 7){
                return matchesFound
            }

            //Otherwise, iterate over to the next tile to the right
            else {
                return this.detectRight(ColorCode, atX, atY + 1, matchesFound);
            }
        }
        
        //Otherwise return matches found
        else {return matchesFound;}
    }
    
    //Detection alg for left
    detectLeft(ColorCode, atX, atY, matchesFound){
        //Check if the tile currently being checked matches the color code needed
        if(this.Tiles[atY][atX].getColor() == ColorCode){
            matchesFound++;
            
            //Check if the tile being checked is already on the left most row
            if(atY == 0){
                return matchesFound
            }

            //Otherwise, iterate over to the next to the left
            else {
                return this.detectLeft(ColorCode, atX, atY - 1, matchesFound);
            }
        }
        
        //Otherwise return matches found
        else {return matchesFound;}
    }
    
    //Detection alg for down
    detectDown(ColorCode, atX, atY, matchesFound){
        //Check if the tile currently being checked matches the color code needed
        if(this.Tiles[atY][atX].getColor() == ColorCode){
            matchesFound++;
            
            //Check if the tile being checked is already on the bottom row
            if(atX == 0){
                return matchesFound
            }

            //Otherwise, iterate over to the next tile down
            else {
                return this.detectDown(ColorCode, atX - 1, atY, matchesFound);
            }
        }
        
        //Otherwise return matches found
        else {return matchesFound;}
    }
    
    //Detection alg for up
    detectUp(ColorCode, atX, atY, matchesFound){
        //Check if the tile currently being checked matches the color code needed
        if(this.Tiles[atY][atX].getColor() == ColorCode){
            matchesFound++;
            
            //Check if the tile being checked is already on the up most row
            if(atX == 7){
                return matchesFound
            }

            //Otherwise, iterate over to the next tile up
            else {
                return this.detectUp(ColorCode, atX + 1, atY, matchesFound);
            }
        }
        
        //Otherwise return matches found
        else {return matchesFound;}
    }
    updateBounds(){}
}