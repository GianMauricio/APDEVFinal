class PercentSizingLayout extends ccui.HBox{
    constructor(){
        super(cc.winSize);
    }

    onEnter(){
    super.onEnter();
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());
        let divisions = 3
        
        //this.createHorizontalLayout();
        
        for(let i = 0; i < divisions; i++){
            this.createVerticalLayout(i , divisions);
        }
    }

    createVerticalLayout(index, divisions){
        let vertLayout = new VerticalLayout();
        vertLayout.setSizeType(ccui.Widget.SIZE_PERCENT);
        vertLayout.setSizePercent(cc.p(1/divisions, 1.0));
        
        vertLayout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        
        if(index == 1){
            vertLayout.setBackGroundColor(cc.color(0, 200, 200, 255));
            let hdiv = 7
            for(let i = 0; i < hdiv; i++){
                let newHLayer = new HorizontalLayout(); 
                
                switch(i){
                    case 1: // Margin
                        newHLayer.setSizeType(ccui.Widget.SIZE_PERCENT);
                        newHLayer.setSizePercent(cc.p(1.0 ,1/hdiv));
                        newHLayer.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
                        newHLayer.setBackGroundColor(cc.color(40, 200, 160, 255));
                        break;
                    case 2: // Result
                        newHLayer.setSizeType(ccui.Widget.SIZE_PERCENT);
                        newHLayer.setSizePercent(cc.p(1.0 ,1/hdiv));
                        newHLayer.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
                        newHLayer.setBackGroundColor(cc.color(40, 200, 160, 255));
                        
                        newHLayer.createText("Results");
                        break;
                    case 3: // Score
                        newHLayer.setSizeType(ccui.Widget.SIZE_PERCENT);
                        newHLayer.setSizePercent(cc.p(1.0 ,1/hdiv));
                        newHLayer.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
                        newHLayer.setBackGroundColor(cc.color(40, 200, 160, 255));
                        
                        newHLayer.createText("Score: 999");
                        break;
                    case 4: // Stars
                        newHLayer.setSizeType(ccui.Widget.SIZE_PERCENT);
                        newHLayer.setSizePercent(cc.p(1.0 ,1/hdiv));
                        newHLayer.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
                        newHLayer.setBackGroundColor(cc.color(40, 200, 160, 255));
                        
                        newHLayer.createSprite(res.JStar_png, 50, 50);
                        newHLayer.createSprite(res.JStar_png, 50, 50);
                        newHLayer.createSprite(res.JStar_png, 50, 50);
                        break;
                    case 5: // Buttons
                        newHLayer.setSizeType(ccui.Widget.SIZE_PERCENT);
                        newHLayer.setSizePercent(cc.p(1.0 ,1/hdiv));
                        newHLayer.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
                        newHLayer.setBackGroundColor(cc.color(40, 200, 160, 255));
                        
                        newHLayer.createSprite(res.Exit_png, 75, 50);
                        newHLayer.createSprite(res.Retry_png, 75, 50);
                        break;
                    default:
                        newHLayer.setSizeType(ccui.Widget.SIZE_PERCENT);
                        newHLayer.setSizePercent(cc.p(1.0 ,1/hdiv));
                        newHLayer.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
                        newHLayer.setBackGroundColor(cc.color(0, 0, 0, 255));
                        break;
                }
                vertLayout.addChild(newHLayer);
            }
        }
        else {vertLayout.setBackGroundColor(cc.color(0, 0, 0, 255));}
        this.addChild(vertLayout);
    }
}

















            //let Buttons = new HorizontalLayout();
            //Buttons.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
            //Buttons.setBackGroundColor(cc.color(200, 200, 0, 255));
            //Buttons.createText("Button1", ccui.LinearLayoutParameter.TOP);
            //Buttons.createText("Button2", ccui.LinearLayoutParameter.BOTTOM);
            //vertLayout.addChild(Buttons);
            
            //let Stars = new HorizontalLayout();
            //vertLayout.createText("Results");
            //vertLayout.createText("");
            //vertLayout.createText("Score: 999");
            //vertLayout.createText("");
            //vertLayout.createSprite(1.0, 1.0);
            //vertLayout.createHorizontalLayout();