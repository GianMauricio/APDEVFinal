class PaddleMovement extends cc.Component{
  constructor(){
        super();
        PaddleMovement.SPEEDX = 400;
        PaddleMovement.ismoving = 0;
  }
  
  onEnter(){
        super.onEnter();
        this.listener = cc.EventListener.create({
            event:cc.EventListener.KEYBOARD,
            onKeyPressed: this.onKeyPressed,
            onKeyReleased: this.onKeyReleased
            //onKeyReleased
        })
        cc.eventManager.addListener(this.listener, this.getOwner());
    }

    onKeyPressed(key,event){
        //console.log(key);
       //console.log(event);
       
        var cChar = key;
        if (cChar == 68 ){
          PaddleMovement.ismoving = 1;
         
         //console.log(PaddleMovement.ismoving);
        }
        
        else if (cChar == 65) {
          PaddleMovement.ismoving = -1;
          //console.log(PaddleMovement.ismoving);
        }
    }

    onKeyReleased(key, event){
        if(key == 68 || key == 65){
          PaddleMovement.ismoving = 0;
        }
    }
   
    update(dt){
        if(!this.getOwner().getParent().paused){
            //Calculate for new window sizes
            let currW = this.getOwner().getParent().currW - this.getOwner().width - 4;

            if(PaddleMovement.ismoving == -1 && this.getOwner().x > 4){
              this.getOwner().x -= PaddleMovement.SPEEDX*dt;

            }

            if(PaddleMovement.ismoving == 1 && this.getOwner().x <= currW){
              this.getOwner().x += PaddleMovement.SPEEDX*dt;
            }
        }
    }
    
    //forceHeight(newHeight){
        //this.getOwner
    //}
}