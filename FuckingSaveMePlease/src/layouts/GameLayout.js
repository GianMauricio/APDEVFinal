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
        
        //Title text
        let size = cc.winSize;
        this.titleLabel = new ccui.Text("Grid Game", 'Pixel', 36);
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
        
        //Title setup
        let titlePos = new ccui.RelativeLayoutParameter();
        titlePos.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_RIGHT);
        this.titleLabel.setLayoutParameter(titlePos);
        this.titleLabel.setAnchorPoint(cc.p(0.0, 0.0));
        
        //Score setup
        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_RIGHT_BOTTOM);
        //layoutParameter.setMargin(0,0,0,90);
        this.score.setLayoutParameter(layoutParameter);
        this.score.setAnchorPoint(cc.p(0.5,0.9));
    }
    
    //Useless, but it makes stuff work
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
    
    //Lament the fact that I cant sex anymore
    //Why???? I hate this stupid corona virus! I can't get my weekly dose of serotonin from my GF anymore! 
    //I needed that shit to live! This is so unfair! I curl up in a ball at night crying over the fact that
    //my GF is also likely feeling as alone (physically) as I am; honestly that makes me more sad than my own
    //loneliness. Ugh, I just want this stupid quarantine to be over faster :(
}