class TitleLayout extends ccui.RelativeBox{
    constructor(){        
        super(cc.winSize);
        //Components and base classes
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());
        this.addComponent(new EnableOnLandscape());
        this.addComponent(new GameLayerResizer());
        
        //Button stuff
        this.createButton();
        
        //Title text
        let size = cc.winSize;
        let titleLabel = new cc.LabelTTF("Grid Game", 'Pixel', 64);
        titleLabel.x = size.width / 2;
        titleLabel.y = size.height;
        this.addChild(titleLabel); 
    }
    
    createButton(){
        let button = new ccui.Button( res.Start_png, res.StartClick_png);

        //button.setScale9Enabled(true);
        //button.setCapInsets(cc.rect(20, 20, 20, 20));
        //button.setContentSize(cc.size(100,50));

        button.setTitleFontSize(26);
        button.setTitleFontName("Pixel");
        //button.setTitleText("Pause")

        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.CENTER_IN_PARENT);
        layoutParameter.setMargin(0,0,0,20);
        button.setLayoutParameter(layoutParameter);

        button.addClickEventListener(this.onClick.bind(this));
        this.addChild(button);
    }
    
    onClick(){
        console.log("ButtonClicked");
        cc.director.runScene(new GameScene());
    }
    
    updateBounds(){}
}