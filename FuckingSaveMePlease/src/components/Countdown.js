class Countdown extends cc.Component{
    constructor(clock){
        super();
        this.seconds = 0;
        this.startTime = 7200; //Time given to player 
        this.time = clock;
        this.timeStart  = false;
    }
    
    update(dt){
        if(this.timeStart){ //begins countdown
            this.seconds = this.startTime / 60;
            this.getOwner().setTime(this.seconds);
            this.startTime = this.startTime - 1;
        }
        
        if(this.startTime <= 0){ //signal game over
            this.getOwner().timeOut();
            this.timeStart = false;
            this.startTime = 0.001;
        }
    }
    
    go(){ //tell timer to start
        this.timeStart = true;
    }
}