class Countdown extends cc.Component{
    constructor(clock){
        super();
        this.seconds = 0;
        this.startTime = 7200;
        this.time = clock;
        this.timeStart  = false;
        this.timeStop = false;
    }
    
    update(dt){
        if(this.timeStart && this.timeStop == false){
            this.seconds = this.startTime / 60;
            this.getOwner().setTime(this.seconds);
            this.startTime = this.startTime - 1;
        }
    }
    
    go(){
        this.timeStart = true;
    }

    stop(){
        this.timeStop = true;
    }
}