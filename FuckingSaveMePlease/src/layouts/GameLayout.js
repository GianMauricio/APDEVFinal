class GameLayout extends ccui.RelativeBox{
    //Constructor
    constructor(){        
        super(cc.winSize);
        //Components and base classes
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());
        this.addComponent(new EnableOnLandscape());
        this.addComponent(new GameLayerResizer());
        
        //SCORE STUFF
        this.points = 0;
          //Score stuff
        this.points = 0;
        this.scoreStr = "Score: " + this.points.toString();
        this.score = new ccui.Text(this.scoreStr, "Pixel", 36);

        //Timer stuff
        this.clock = new ccui.Text("120", 'Pixel', 36);
        this.addChild(this.clock);
        
        //Timer conponent
        this.timer = new Countdown(this.clock);
        this.addComponent(this.timer);
        
        //Grid stuff
        this.createGrid(); //doesn't do shit yet
        
        //Title text
        let size = cc.winSize;
        let titleLabel = new cc.LabelTTF("Grid Game", 'Pixel', 36);
        titleLabel.x = size.width / 2;
        titleLabel.y = size.height;
        this.addChild(titleLabel);

      


    }
    
    onEnter(){
        super.onEnter();
        //CLOCK POS
        let clockPos = new ccui.RelativeLayoutParameter();
        clockPos.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_LEFT);
        this.clock.setLayoutParameter(clockPos);
        this.clock.setAnchorPoint(cc.p(0.0, 0.9));


        //SCORE POS
        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_RIGHT);
        this.score.setLayoutParameter(layoutParameter);
        this.score.setAnchorPoint(cc.p(0.5,0.9));
        this.addChild(this.score);
        this.timer.go();
    }
    
    //Make score
    trackScore(){
        
    }
    
    //Useless, but it makes stuff work
    updateBounds(){};
    
    //Set time func
    setTime(newTime){
        this.clock.setString(newTime.toFixed(2).toString());
    }
    

}