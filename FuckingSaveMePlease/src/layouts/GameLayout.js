class GameLayout extends ccui.RelativeBox{
    //Constructor
    constructor(){        
        super(cc.winSize);
        //Components and base classes
        this.scheduleUpdate();
        this.addComponent(new FitToWinldow());
        this.addComponent(new EnableOnLandscape());
        this.addComponent(new GameLayerResizer());
    
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
        let clockPos = new ccui.RelativeLayoutParameter();
        clockPos.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_LEFT);
        this.clock.setLayoutParameter(clockPos);
        this.clock.setAnchorPoint(cc.p(0.0, 0.9));
        this.timer.go();
    }
    
    //Make grid
    createGrid(){
        
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
    
    //Lament the fact that I cant sex anymore
    //Why???? I hate this stupid corona virus! I can't get my weekly dose of serotonin from my GF anymore! 
    //I needed that shit to live! This is so unfair! I curl up in a ball at night crying over the fact that
    //my GF is also likely feeling as alone (physically) as I am; honestly that makes me more sad than my own
    //loneliness. Ugh, I just want this stupid quarantine to be over faster :(
}