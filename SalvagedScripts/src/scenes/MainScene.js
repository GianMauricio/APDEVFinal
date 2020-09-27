class MainScene extends cc.Scene{    
    constructor(){
        super();
        this.score = 0;
        this.Landscape = null;
        this.Portrait = null;
        this.Pong = null;
    }
    
    onEnter(){
        super.onEnter();
        
        let pongLayer = new PongLayer();
        this.addChild(pongLayer);
        let landscapeUI = new LandscapeLayout();
        let portraitUI = new PortraitLayout();
        //let popup = new NineSliceLayout();

        this.Landscape = landscapeUI;
        this.Portrait = portraitUI;
        this.Pong = pongLayer;
        
        this.addChild(landscapeUI)
        this.addChild(portraitUI)
        //this.addChild(popup);
    }
    
    addScore(){
        //console.log("POTATO 2");
        this.Landscape.addScoreLand();
        this.Portrait.addScorePort();
    }
    
    signalPopUp(){
        if(this.Pong.paused == false){
            let popup = new NineSliceLayout();
            this.addChild(popup);
            //console.log("Signal recieved");
            this.Pong.paused = !this.Pong.paused;
        }
    }
    
    releasePopUp(){
        this.Pong.paused = !this.Pong.paused;
    }
}