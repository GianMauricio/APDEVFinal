class Tile extends cc.DrawNode{
    constructor (radius, color, PosX, PosY){
        super();
        
        //Inactive colors
        if(color == 0) {this.tileColor = cc.color(255, 0 ,0, 255);}
        if(color == 1) {this.tileColor = cc.color(0, 255 ,0, 255);}
        if(color == 2) {this.tileColor = cc.color(0, 0 ,255, 255);}
        if(color == 3) {this.tileColor = cc.color(255, 0 ,255, 255);}
        if(color == 4) {this.tileColor = cc.color(0, 255 ,255, 255);}
        if(color == 5) {this.tileColor = cc.color(255, 255, 0, 255);}
        
        //console.log(this.tileColor);
        
        this.colorNum = color;
        
        this.rad = radius;
        this.positionX = PosX;
        this.positionY = PosY;
        
        this.Dot = null;
        
        //console.log("TileX at: " + PosX);
        //console.log("TileY at: " + PosY);
    }

    onEnter(){
        super.onEnter();
        //this.setAnchorPoint(cc.p(0.5, 0.5));
        this.Dot = this.drawDot(cc.p(0.9, 0), this.rad, this.tileColor);
        
        this.x = this.positionX;
        this.y = this.positionY;
    }
    
    //Returns color
    getColor(){
        return this.colorNum;
    }
    
    //Sets new color
    setColor(color){
        if(color == 0) {this.tileColor = cc.color(255, 0 ,0, 255); console.log("RED");}
        if(color == 1) {this.tileColor = cc.color(0, 255 ,0, 255); console.log("GREEN");}
        if(color == 2) {this.tileColor = cc.color(0, 0 ,255, 255); console.log("BLUE");}
        if(color == 3) {this.tileColor = cc.color(255, 0 ,255, 255); console.log("PURPLE");}
        if(color == 4) {this.tileColor = cc.color(0, 255 ,255, 255); console.log("CYAN");}
        if(color == 5) {this.tileColor = cc.color(255, 255, 0, 255); console.log("YELLOW");}
        
        //Redraw geometry (Took me 3 fucking hours to get this I swear to god)
        this.clear();
        this.Dot = this.drawDot(cc.p(0.9, 0), this.rad, this.tileColor);
        
        this.colorNum = color;
    }
    
    //Returns data based on requested element
    getData(query){
        if(query == "PosX") {return this.x - 30;}
        if(query == "PosY") {return this.y - 30;}
        if(query == "Radius") {return this.rad;}
        if(query == "colorNum") {return this.colorNum;}
        if(query == "COLOR"){ 
            switch(this.colorNum){
                case 0:
                    return "RED";
                    break;
                case 1:
                    return "GREEN";
                    break;
                case 2:
                    return "BLUE";
                    break;
                case 3:
                    return "PURPLE";
                    break;
                case 4:
                    return "CYAN";
                    break;
                case 5:
                    return "YELLOW";
                    break;
                default:
                    return "NONE";
                    break;
            }
        }
        if(query = "h") {return this.height;}
        if(query = "w") {return this.width;}
    }
}