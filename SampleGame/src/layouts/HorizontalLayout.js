class HorizontalLayout extends ccui.HBox{
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
        text.setAnchorPoint(1.0, 0.0);
        
        text.addComponent(new FitToParent());
        this.addChild(text);
    }

    createSprite(image, w, h){
        let sprite = new ccui.ImageView(image, 0);
        
        let layoutParameter = new ccui.LinearLayoutParameter();
        layoutParameter.setGravity(ccui.LinearLayoutParameter.CENTER_VERTICAL);
        
        sprite.setLayoutParameter(layoutParameter);
        sprite.setAnchorPoint(0.0, 0.0);
        
        sprite.ignoreContentAdaptWithSize(false);
        sprite.setContentSize(cc.size(w, h));
        
        sprite.addComponent(new FitToParent());
        this.addChild(sprite);
    }
}