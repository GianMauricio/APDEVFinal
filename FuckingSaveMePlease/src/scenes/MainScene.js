class MainScene extends cc.Scene{    
    constructor(){
        super();
    }
    onEnter(){
        super.onEnter();
        
        //let pongLayer = new PongLayer();
        //this.addChild(pongLayer)
        let testUI = new PercentSizingLayout();
        this.addChild(testUI)
    }
}