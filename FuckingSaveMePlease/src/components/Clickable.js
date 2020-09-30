class Clickable extends cc.Component{
    constructor(){
        super();
        
        //Handle click logic
        this.clicked = false;
        this.MouseX = 0;
        this.MouseY = 0;
        
        //Handle touch logic
        this.touched = false;
        this.atX = 0;
        this.atY = 0;
    }

    onEnter(){
        super.onEnter();
      
        
        this.Touchlistener = cc.EventListener.create({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchEnter: this.onTouchEnter.bind(this),
            onTouchBegan: this.onTouchBegan.bind(this),
        })
        cc.eventManager.addListener(this.Touchlistener, this.getOwner());
    }

    //Handle touch logic
    onTouchEnter(event){
       
        this.touched = false;
    }
    
    onTouchBegan(event){
       
        this.atX = event.getLocationX();
        this.atY = event.getLocationY();

        this.touched = true;
        this.getOwner().getTile(this.atX, this.atY);
    }
    
    update(dt){
        
        if(this.touched == true){
            this.touched = false;
        }

    }
}