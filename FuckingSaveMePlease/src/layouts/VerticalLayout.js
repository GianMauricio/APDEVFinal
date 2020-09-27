class VerticalLayout extends ccui.VBox{
    constructor(){
        super(cc.winSize);
    }

    onEnter(){
        super.onEnter();
    }

    createText(message){
        let text = new ccui.Text(message, "Pixel", 32);
        
        let layoutParameter = new ccui.LinearLayoutParameter();
        layoutParameter.setGravity(ccui.LinearLayoutParameter.CENTER_HORIZONTAL);
        
        text.setLayoutParameter(layoutParameter);
        text.setAnchorPoint(1.0, 1.0);
        
        text.addComponent(new FitToParent());
        this.addChild(text);
    }

    createSprite(offset_x, offset_y){
        let sprite = new ccui.ImageView(res.JStar_png, 0);
        //let sprite1 = new ccui.ImageView(res.JStar_png, 0);
        //let sprite2 = new ccui.ImageView(res.JStar_png, 0);
        
        let layoutParameter = new ccui.LinearLayoutParameter();
        //let layoutParameter1 = new ccui.LinearLayoutParameter();
        //let layoutParameter2 = new ccui.LinearLayoutParameter();
        
        layoutParameter.setGravity(ccui.LinearLayoutParameter.LEFT);
        //layoutParameter1.setGravity(ccui.LinearLayoutParameter.CENTER_HORIZONTAL);
        //layoutParameter2.setGravity(ccui.LinearLayoutParameter.RIGHT);
        
        sprite.setLayoutParameter(layoutParameter);
        //sprite1.setLayoutParameter(layoutParameter1);
        //sprite2.setLayoutParameter(layoutParameter2);
        
        sprite.setAnchorPoint(offset_x, offset_y);
        //sprite1.setAnchorPoint(offset_x, offset_y);
        //sprite2.setAnchorPoint(offset_x, offset_y);
        
        sprite.ignoreContentAdaptWithSize(false);
        //sprite1.ignoreContentAdaptWithSize(false);
        //sprite2.ignoreContentAdaptWithSize(false);
        
        sprite.setContentSize(cc.size(50, 50));
        //sprite1.setContentSize(cc.size(50, 50));
        //sprite2.setContentSize(cc.size(50, 50));
        
        sprite.addComponent(new FitToParent());
        //sprite1.addComponent(new FitToParent());
        //sprite2.addComponent(new FitToParent());
        
        this.addChild(sprite);
        //this.addChild(sprite1);
        //this.addChild(sprite2);
    }
    
    createHorizontalLayout(index, divisions){
        let horiLayout = new HorizontalLayout();
        horiLayout.setSizeType(ccui.Widget.SIZE_PERCENT);
        horiLayout.setSizePercent(cc.p(1, 0.2));
        
        horiLayout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        horiLayout.setBackGroundColor(cc.color(200, 0, 200, 255));
        
        horiLayout.addComponent(new FitToParent());
        this.addChild(horiLayout);
    }
}