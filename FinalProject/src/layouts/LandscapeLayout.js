class LandscapeLayout extends ccui.RelativeBox{
    constructor(){
        super(cc.winSize);
        //Components and base classes
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());
        this.addComponent(new EnableOnLandscape());
        this.addComponent(new GameLayerResizer());
        
        //Score stuff
        this.points = 0;
        this.scoreStr = "Score: " + this.points.toString();
        this.score = new ccui.Text(this.scoreStr, "Pixel", 36);
        
        //Button stuff
        this.createButton();
    }
    
    onEnter(){
        super.onEnter();
        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_LEFT);
        this.score.setLayoutParameter(layoutParameter);
        this.score.setAnchorPoint(cc.p(0.0,0.9));
        this.addChild(this.score);
    }
    
    addScoreLand(){
        this.points++;
        //console.log(this.points);
        this.scoreStr = "Score: " + this.points.toString();
        
        this.score.setString(this.scoreStr);
    }
    
    createButton(){
        let button = new ccui.Button( res.Button9Slice_png, res.Button9SliceSelected_png);

        button.setScale9Enabled(true);
        button.setCapInsets(cc.rect(20, 20, 20, 20));
        button.setContentSize(cc.size(100,50));

        button.setTitleFontSize(26)
        button.setTitleFontName("Pixel")
        button.setTitleText("Pause")

        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_RIGHT);
        layoutParameter.setMargin(0,0,0,20);
        button.setLayoutParameter(layoutParameter);

        button.addClickEventListener(this.onClick.bind(this));
        this.addChild(button);
    }
    
    onClick(){
        //console.log("ButtonClicked");
        this.getParent().signalPopUp();
    }
    
    updateBounds(){}
}