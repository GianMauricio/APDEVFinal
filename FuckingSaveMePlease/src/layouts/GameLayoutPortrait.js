class GameLayoutPortrait extends ccui.RelativeBox{
    //Constructor
    constructor(){        
        super(cc.winSize);
        //Components and base classes
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());
        this.addComponent(new EnableOnPortrait());
        this.addComponent(new GameLayerResizer());
    
        //Timer stuff
        this.clock = new ccui.Text("120", 'Pixel', 36);
        this.addChild(this.clock);
        
        //Timer conponent
        this.timer = new Countdown(this.clock);
        this.addComponent(this.timer);
        
        //Title text
        let size = cc.winSize;
        this.titleLabel = new ccui.Text("MCP", 'Pixel', 64);
        this.addChild(this.titleLabel);
        
        //Score stuff
        this.points = 0;
        this.scoreStr = "Score: " + this.points.toString();
        this.score = new ccui.Text(this.scoreStr, "Pixel", 36);
        this.addChild(this.score);
    }
    
    onEnter(){
        //Timer setup
        super.onEnter();
        let clockPos = new ccui.RelativeLayoutParameter();
        clockPos.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_LEFT);
        this.clock.setLayoutParameter(clockPos);
        this.clock.setAnchorPoint(cc.p(0.0, 0.9));
        this.timer.go();
        
        //Title setup
        let titlePos = new ccui.RelativeLayoutParameter();
        titlePos.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_RIGHT);
        this.titleLabel.setLayoutParameter(titlePos);
        this.titleLabel.setAnchorPoint(cc.p(0.0, 0.0));
        
        //Score setup
        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_RIGHT_BOTTOM);
        this.score.setLayoutParameter(layoutParameter);
        this.score.setAnchorPoint(cc.p(0.5,0.9));
    }
    
   
    updateBounds(){};
    
    //Set time func
    setTime(newTime){
        this.clock.setString(newTime.toFixed(2).toString());
    }
    
    //TimeOut function
    timeOut(){
        this.getParent().gameOver();
    }
    
    //Score stuff
    addScore(pointToAdd){
        console.log("Adding " + pointToAdd + " to score");
        
        this.points += pointToAdd;
        this.scoreStr = "Score: " + this.points.toString();
        this.score.setString(this.scoreStr);
    }
    
    getScore(){
        return this.points;
    }
}