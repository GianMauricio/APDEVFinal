class GameScene extends cc.Scene{
    constructor(){
        super();
        
        //this.layout = null;
        this.gameLayer = null;
    }
    
    onEnter(){
        super.onEnter();
        //Instance game layer
        let game = new GridLayer();
        this.gameLayer = game;
        this.addChild(game);
      
        let gameLayout = new GameLayout();
        this.layout = gameLayout;
        this.addChild(gameLayout);
    }
    
    gameOver(){
        //console.log("GameOver Signal recieved");
        let popup = new GameOverPopUp();
        this.addChild(popup);
    }
}