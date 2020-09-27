class PongLayer extends cc.LayerColor{
    constructor(){
        super(cc.color(0,100,0,255), 800, 700);
        
        this.currH = 0;
        this.currW = 0;
        this.paused = false;
        
        this.paddle = new Paddle(100, 50);
        this.ball = new Ball(20, this.paddle);
        this.addComponent(new GameLayerResizer());
        this.addChild(this.paddle);
        this.addChild(this.ball);
    }

    updateBounds(){
        this.currH = this.height;
        this.currW = this.width;
        
        //Adjust paddle position to be same level (ish)
        this.paddle.adjustHeight(this.height);
        
        //Adjust ball starting position
        this.ball.adjustSpawnLoc(this.height, this.width);
    }
    
    updateScore(){
        //console.log("POTATO");
        this.getParent().addScore();
    }
    
    setPause(){
        //console.log("Carrots 2");
        this.paused = !this.paused;
    }
}