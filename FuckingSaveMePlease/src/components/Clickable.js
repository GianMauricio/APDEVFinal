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
        /*
        this.Mouselistener = cc.EventListener.create({
            event:cc.EventListener.MOUSE,
            onMouseMove: this.onMouseMove.bind(this),
            onMouseUp: this.onMouseUp.bind(this),
            onMouseDown: this.onMouseDown.bind(this),
        })
        cc.eventManager.addListener(this.Mouselistener, this.getOwner());
        */
        
        this.Touchlistener = cc.EventListener.create({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchEnter: this.onTouchEnter.bind(this),
            onTouchBegan: this.onTouchBegan.bind(this),
        })
        cc.eventManager.addListener(this.Touchlistener, this.getOwner());
    }

    //Handle click logic (Deprecated)
    onMouseMove(event){
        this.MouseX = event.getLocationX();
        this.MouseY = event.getLocationY();
    }


    onMouseUp(event){
        //console.log("Mouse Up detected:");
        //console.log("MousePosition X: " + event.getLocationX() + "  Y:" + event.getLocationY());

        this.clicked = false;
        //console.log(this.clicked);
    }


    onMouseDown(event){
            this.clicked = true;
            this.getOwner().getTile(this.MouseX, this.MouseY);
            //console.log("Mouse Down detected:");
            //console.log("MousePosition X: " + event.getLocationX() + "  Y:" + event.getLocationY());
    }

    //Handle touch logic
    onTouchEnter(event){
        //console.log("Touch Up detected:");
        //console.log("TouchPosition X: " + event.getLocationX() + "  Y:" + event.getLocationY());

        this.touched = false;
    }
    
    onTouchBegan(event){
        //console.log("Touch Down detected:");
        //console.log("TouchPosition X: " + event.getLocationX() + "  Y:" + event.getLocationY());

        this.atX = event.getLocationX();
        this.atY = event.getLocationY();

        this.touched = true;
        this.getOwner().getTile(this.atX, this.atY);
    }
    
    update(dt){
        //console.log(this.clicked);
        if(this.clicked == true){
            this.clicked = false;
        }
        
        if(this.touched == true){
            this.touched = false;
        }

    }
}