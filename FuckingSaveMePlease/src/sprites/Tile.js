class Tile extends cc.DrawNode{
    constructor (radius, color, PosX, PosY){
        super();
        
        if(color == 0) {this.tileColor = cc.color(255, 0 ,0, 255); console.log("RED");}
        if(color == 1) {this.tileColor = cc.color(0, 255 ,0, 255); console.log("GREEN");}
        if(color == 2) {this.tileColor = cc.color(0, 0 ,255, 255); console.log("BLUE");}
        if(color == 3) {this.tileColor = cc.color(255, 0 ,255, 255); console.log("PURPLE");}
        if(color == 4) {this.tileColor = cc.color(0, 255 ,255, 255); console.log("CYAN");}
        if(color == 5) {this.tileColor = cc.color(255, 255, 0, 255); console.log("YELLOW");}
        
        //console.log(this.tileColor);
        
        this.colorNum = color;
        
        this.scheduleUpdate();
        
        this.rad = radius;
        this.positionX = PosX;
        this.positionY = PosY;
    }

    onEnter(){
        super.onEnter();
        this.drawDot(cc.p(0,0), this.rad, this.tileColor);
        
        this.x = this.positionX;
        this.y = this.positionY;
        
        console.log(this.x);
        console.log("\n");
        console.log(this.y);
    }
    
    getColor(){
        return this.colorNum;
    }
    
    setColor(color){
        if(color == 0) this.tileColor = cc.color(255, 0 ,0, 255);
        if(color == 1) this.tileColor = cc.color(0, 255 ,0, 255);
        if(color == 2) this.tileColor = cc.color(0, 0 ,255, 255);
        
        this.colorNum = color;
    }
}