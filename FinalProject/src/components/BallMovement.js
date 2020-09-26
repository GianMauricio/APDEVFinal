class BallMovement extends cc.Component{
    constructor(){
        super();
        this.SPEEDX = 200;
        this.SPEEDY = 200;
        this.DirX = "right";
        this.DirY = "down";
        cc.director.getScheduler().scheduleUpdateForTarget(this,0,false);
      }
   
   
    onEnter(){
        super.onEnter();
    }

    update(dt){
        if(!this.getOwner().getParent().paused){
            if(this.DirX == "right"){
                this.getOwner().x += this.SPEEDX * dt;
            }

            else if(this.DirX == "left"){
                this.getOwner().x -= this.SPEEDX * dt;
            }

            if(this.DirY == "down"){
                this.getOwner().y -= this.SPEEDY * dt;
            }

            else if(this.DirY == "up"){
                this.getOwner().y += this.SPEEDY * dt;
            }

            let rightLimit = this.getOwner().getParent().currW - this.getOwner().radius - 2;
            let topLimit = this.getOwner().getParent().currH - this.getOwner().radius - 2;

            if(this.getOwner().x > rightLimit) { // right side
                this.DirX = "left";
            }

            else if(this.getOwner().y > topLimit){ // Top side 
                this.DirY = "down";
            }

            else if(this.getOwner().y <= this.getOwner().radius){ // respawn if hits floor
                this.DirX = "right";
                this.DirY = "down";
                this.getOwner().x = this.getOwner().startX;
                this.getOwner().y = this.getOwner().startY;
                
                //console.log(this.getOwner().startX);
                //console.log(this.getOwner().startY);
                this.SPEEDX  = 200;
            }

            else if(this.getOwner().x <= this.getOwner().radius){ // left side
                this.DirX = "right";
            }

            //Collision detection
            let paddleTop = this.getOwner().paddle.y + this.getOwner().paddle.height + this.getOwner().radius;
            let paddleMiddle = this.getOwner().paddle.y + this.getOwner().paddle.height - 2;
            let paddleBottom = this.getOwner().paddle.y;
            
            let paddleRightOuter = this.getOwner().paddle.x + this.getOwner().paddle.width + this.getOwner().radius;
            let paddleRightInner = this.getOwner().paddle.x + this.getOwner().paddle.width;

            let paddleLeftOuter = this.getOwner().paddle.x  -20;
            let paddleLeftInner = this.getOwner().paddle.x + this.getOwner().radius -20;

            //Check for paddle top
            //Check for X-intersect
            if(this.getOwner().x > paddleLeftOuter && this.getOwner().x < paddleRightOuter){
                //Check for Y-intersect
                if(this.getOwner().y < paddleTop && this.getOwner().y > paddleMiddle && this.DirY == "down"){
                    this.getOwner().getParent().updateScore();
                    this.DirY = "up";
                }
            }
            
            //Check for paddle sides
            if(this.getOwner().y < paddleMiddle && this.getOwner().y > paddleBottom) {
                //Left side
                if(this.getOwner().x > paddleLeftOuter && this.getOwner().x < paddleLeftInner && this.DirX == "right"){
                    this.DirX = "left";
                }
                
                //Right side
                if(this.getOwner().x > paddleRightInner && this.getOwner().x < paddleRightOuter && this.DirX == "left"){
                    this.DirX = "right";
                }
            }
            
            
        }/*this is the pause bracket*/
    }/*Update bracket*/
}/*DO NOT FUCKING TOUCH*/

