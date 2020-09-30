class GameScene extends cc.Scene{
    constructor(){
        super();
        
        this.layoutLandscape = null;
        this.layoutPortrait = null;
        this.gameLayer = null;
    }
    
    onEnter(){
        super.onEnter();
        
        //Instance game layer
        let game = new GridLayer();
        this.gameLayer = game;
        this.addChild(game);
        
        //Instance game layout
        let gameLayoutLand = new GameLayoutLandscape();
        this.layoutLandscape = gameLayoutLand;
        this.addChild(gameLayoutLand);

        let gameLayoutPort = new GameLayoutPortrait();
        this.layoutPortrait = gameLayoutPort;
        this.addChild(gameLayoutPort);

    }
    
    gameOver(){
        let popup = new GameOverPopUp();
        this.addChild(popup);
        popup.showScore(this.getScore());
    }
    
    addScore(pointsToAdd){
        this.layoutLandscape.addScore(pointsToAdd);
        this.layoutPortrait.addScore(pointsToAdd);
    }
    
    getScore(){
        return this.layoutLandscape.getScore();
    }
}