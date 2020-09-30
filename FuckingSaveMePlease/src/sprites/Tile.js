class Tile extends cc.DrawNode{
    constructor (radius, color, PosX, PosY){
        super();
        
        if(color == 0) {this.tileColor = cc.color(255, 0 ,0, 255);}
        if(color == 1) {this.tileColor = cc.color(0, 255 ,0, 255);}
        if(color == 2) {this.tileColor = cc.color(0, 0 ,255, 255);}
        if(color == 3) {this.tileColor = cc.color(255, 0 ,255, 255);}
        if(color == 4) {this.tileColor = cc.color(0, 255 ,255, 255);}
        if(color == 5) {this.tileColor = cc.color(255, 255, 0, 255);}
        
       
        
        this.colorNum = color;
        
        this.rad = radius;
        this.positionX = PosX;
        this.positionY = PosY;
        
        this.Dot = null;
        
        
        //This value will determine if the tile is in a matched state
        this.matched = false;
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
        if(color == 0) {this.tileColor = cc.color(255, 0 ,0, 255);}
        if(color == 1) {this.tileColor = cc.color(0, 255 ,0, 255);}
        if(color == 2) {this.tileColor = cc.color(0, 0 ,255, 255);}
        if(color == 3) {this.tileColor = cc.color(255, 0 ,255, 255);}
        if(color == 4) {this.tileColor = cc.color(0, 255 ,255, 255);}
        if(color == 5) {this.tileColor = cc.color(255, 255, 0, 255);}
        
        //Redraw geometry 
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
    
    match(){
        this.colorNum = -1;
    }
    
    setUnSelected(){
        if(this.colorNum == 0) {this.tileColor = cc.color(255, 0, 0, 155);}
        if(this.colorNum == 1) {this.tileColor = cc.color(0, 255, 0, 155);}
        if(this.colorNum == 2) {this.tileColor = cc.color(0, 0, 255, 155);}
        if(this.colorNum == 3) {this.tileColor = cc.color(255, 0, 255, 155);}
        if(this.colorNum == 4) {this.tileColor = cc.color(0, 255, 255, 155);}
        if(this.colorNum == 5) {this.tileColor = cc.color(255, 255, 0, 155);}
        
        this.clear();
        this.Dot = this.drawDot(cc.p(0.9, 0), this.rad, this.tileColor);
    }
    
    setSelected(){
        if(this.colorNum == 0) {this.tileColor = cc.color(255, 0 ,0, 255);}
        if(this.colorNum == 1) {this.tileColor = cc.color(0, 255 ,0, 255);}
        if(this.colorNum == 2) {this.tileColor = cc.color(0, 0 ,255, 255);}
        if(this.colorNum == 3) {this.tileColor = cc.color(255, 0 ,255, 255);}
        if(this.colorNum == 4) {this.tileColor = cc.color(0, 255 ,255, 255);}
        if(this.colorNum == 5) {this.tileColor = cc.color(255, 255, 0, 255);}
        
        this.clear();
        this.Dot = this.drawDot(cc.p(0.9, 0), this.rad, this.tileColor);
    }
}