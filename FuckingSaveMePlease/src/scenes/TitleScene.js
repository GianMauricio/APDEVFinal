class TitleScene extends cc.Scene{    
    constructor(){
        super();
        
        this.layout = null;
    }
    
    onEnter(){
        super.onEnter();
        let titleLayout = new TitleLayout();
        this.layout = titleLayout;
        this.addChild(titleLayout);
    }
}