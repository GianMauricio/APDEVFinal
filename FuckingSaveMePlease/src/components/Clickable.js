class Clickable extends cc.Component{
    constructor(){
        super();
        this.clicked = false;
        this.MouseX = 0;
        this.MouseY = 0;
    }

    onEnter(){
        super.onEnter();
        this.listener = cc.EventListener.create({
            event:cc.EventListener.MOUSE,
            onMouseMove: this.onMouseMove.bind(this),
            onMouseUp: this.onMouseUp.bind(this),
            onMouseDown: this.onMouseDown.bind(this),
        })
        cc.eventManager.addListener(this.listener, this.getOwner());
    }

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
            console.log("Mouse Down detected:");
            //console.log("MousePosition X: " + event.getLocationX() + "  Y:" + event.getLocationY());
    }

    update(dt){
        //console.log(this.clicked);
        if(this.clicked == true){
            this.clicked = false;
        }

    }
}