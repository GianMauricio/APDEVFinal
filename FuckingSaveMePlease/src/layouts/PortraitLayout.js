class PortraitLayout extends ccui.RelativeBox{
    constructor(){
        super(cc.winSize);
        this.points = 0;
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());
        this.addComponent(new EnableOnPortrait());
        this.addComponent(new GameLayerResizer());
        this.scoreStr = "Score: " + this.points.toString();
        this.scheduleUpdate();
        this.score = new ccui.Text(this.scoreStr, "Pixel", 36);
        
        this.createButton();
    }
    
    onEnter(){
        super.onEnter();
        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_CENTER_HORIZONTAL);
        this.score.setLayoutParameter(layoutParameter);

        this.addChild(this.score);
    }
    
    addScorePort(){
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
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_BOTTOM_CENTER_HORIZONTAL);
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