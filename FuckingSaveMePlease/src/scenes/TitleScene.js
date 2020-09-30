class TitleScene extends cc.Scene{    
    constructor(){
        super();
        
        this.portraitlayout = null;
        this.landscapelayout = null;
    }
    
    onEnter(){
        super.onEnter();
        let titleLayoutportrait = new TitleLayoutPortrait();
        this.portraitlayout = titleLayoutportrait;
        this.addChild(titleLayoutportrait);

        let titleLayoutlandscape = new TitleLayoutLandscape();
        this.landscapelayout = titleLayoutlandscape;
        this.addChild(titleLayoutlandscape);

    }
}