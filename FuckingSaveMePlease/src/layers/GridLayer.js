class GridLayer extends cc.LayerColor{
    constructor(){
        super(cc.color(128, 128, 128, 255), 800, 800);
        
        //Grid handles tile logic
        //GridLayer handles scaling
        //reason:layout does not have direct reference to node documentation had unclear access routes
        this.grid = new Grid();
        this.addChild(this.grid);
        this.addComponent(new GameLayerResizer());
        
    }
    
    //uses Query logic
    getOffset(query){
        if(query == "PosX"){return this.x}
        if(query == "PosY"){return this.y}
    }
    
    //Score functionality
    addScore(pointsToAdd){
        this.getParent().addScore(pointsToAdd);
    }
    
    updateBounds(){}
}