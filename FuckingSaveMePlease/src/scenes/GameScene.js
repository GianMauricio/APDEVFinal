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
        
<<<<<<< HEAD
        
        
        let gameLayout = new GameLayout();
        this.layout = gameLayout;
        this.addChild(gameLayout);
=======
        //let gameLayout = new GameLayout();
        //this.layout = gameLayout;
        //this.addChild(gameLayout);
>>>>>>> 1005b2d431b1540b250ab34ebb2002f0ec48ade9
    }
}