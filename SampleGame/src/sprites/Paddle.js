class Paddle extends cc.DrawNode{
    constructor (width, height){
        super();
        this.width = width;
        this.height = height;
        
        this.paddleMove = new PaddleMovement();
        this.addComponent(this.paddleMove);
        this.scheduleUpdate();
    }

    onEnter(){
        super.onEnter();
        let size = cc.winSize;

        this.drawRect(cc.p(0,0),cc.p(this.width,this.height), cc.color(255,0,0,255));
        this.x = this.getParent().width / 9;
        this.y = this.getParent().height / 9;
    }
    
    adjustHeight(newHeight){
        this.y = newHeight / 9;
    }
}