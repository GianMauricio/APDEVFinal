class Ball extends cc.DrawNode{
    constructor (radius,paddle){
        super();
        this.paddle = paddle;
        this.radius = radius;
        this.scheduleUpdate();
        this.startX = 0;
        this.startY = 0;
    }

    onEnter(){
        super.onEnter();
        this.drawDot(cc.p(0,0),this.radius, cc.color(0,0,255,255));
        
        this.startX = this.getParent().width / 9;
        this.startY = this.getParent().height - this.getParent().height / 9;
        
        this.x = this.getParent().width / 9;
        this.y = this.getParent().height - this.getParent().height / 9;

        let ballmove = new BallMovement();
        this.addComponent(ballmove);
    }
    
    adjustSpawnLoc(height, width){
        this.startX = width / 9;
        this.startY = height - height / 9;
    }
}