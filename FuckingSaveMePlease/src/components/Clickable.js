class Clickable extends cc.Component{
    constructor(){
        super();
        this.clicked = false;
        //this.scheduleUpdate();
    }
    
    onEnter(){
        cc.eventManager.addListener({
	    event: cc.EventListener.MOUSE,
	    onMouseMove: function(event){
		    console.log("MousePosition X: " + event.getLocationX() + "  Y:" + event.getLocationY());
		    // do something...
	    },
	    onMouseUp: function(event){
		    console.log("Mouse Up detected, Key: " + event.getButton());
		    // do something...
	    },
	    onMouseDown: function(event){
		    console.log("Mouse Down detected, Key: " + event.getButton());
		    // do something...
	    }
        }, this.getOwner());
    }
}