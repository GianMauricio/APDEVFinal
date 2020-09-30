class TitleLayoutPortrait extends ccui.RelativeBox{
    constructor(){        
        super(cc.winSize);
        //Components and base classes
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());
        this.addComponent(new EnableOnPortrait());
        this.addComponent(new GameLayerResizer());
        
        //Button stuff
        this.createButton();
        
        //Title text
        let size = cc.winSize;
        let titleLabel = new ccui.Text("MAXIMUM COLORED POTATOES", 'Pixel', 48);

        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_CENTER_HORIZONTAL);
        layoutParameter.setMargin(0,0,0,40);
        titleLabel.setLayoutParameter(layoutParameter);


        this.addChild(titleLabel); 
    }
    
    createButton(){
        let button = new ccui.Button( res.Start_png, res.StartClick_png);

        button.setTitleFontSize(26);
        button.setTitleFontName("Pixel");
        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.CENTER_IN_PARENT);
        layoutParameter.setMargin(0,0,0,20);
        button.setLayoutParameter(layoutParameter);

        button.addClickEventListener(this.onClick.bind(this));
        this.addChild(button);
    }
    
    onClick(){
        cc.director.runScene(new GameScene());
    }
    
    updateBounds(){}
}