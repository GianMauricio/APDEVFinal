class Clickable extends cc.Component{
    constructor(){
        super();
        this.clicked = false;
        this.MouseX = 0;
        this.MouseY = 0;
    }
    
    onEnter(){
        super.onEnter();
        cc.eventManager.addListener({
	    event: cc.EventListener.MOUSE,
	    onMouseMove: function(event){
		    
            this.MouseX = event.getLocationX();
            this.MouseY = event.getLocationY();
	    },
	    onMouseUp: function(event){
		    //console.log("Mouse Up detected:");
            //console.log("MousePosition X: " + event.getLocationX() + "  Y:" + event.getLocationY());
            
            this.clicked = false;
	    },
	    onMouseDown: function(event){
		    console.log("Mouse Down detected:");
            console.log("MousePosition X: " + event.getLocationX() + "  Y:" + event.getLocationY());
            
            this.clicked = true;
            console.log(this.clicked);
	    }
        }, this.getOwner());
    }
    
    update(dt){
        console.log(this.clicked);
        if(this.clicked == true){
            this.getOwner().getTile(this.MouseX, this.MouseY);
        }
    }
}