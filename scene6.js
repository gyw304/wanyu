MyGame.scene6 = function(game) {

};



MyGame.scene6.prototype = {
    create: function() {

        this.bg6 = this.add.image(0,0,'bg6');

        this.s6_lou = this.add.image(0,MyGame.GAME_HEIGHT+400,'s6_lou');
        this.s6_lou.anchor.set(0,1);
        this.s6_lou.alpha = 0;

        this.s6_bottom = this.add.image(0,MyGame.GAME_HEIGHT,'s6_bottom');
        this.s6_bottom.anchor.set(0,1);

        this.add.tween(this.s6_lou).to({y:MyGame.GAME_HEIGHT-30,alpha:1},300,Phaser.Easing.Linear.Out,true,1500).onComplete.add(function(){
            this.add.tween(this.s6_lou).to({y:MyGame.GAME_HEIGHT},150,Phaser.Easing.Linear.Out,true)
        },this);


        this.s6_t1 = this.add.image(MyGame.GAME_WIDTH/2,160,'s6_t1');
        this.s6_t1.anchor.set(0.5);
        this.s6_t1.alpha = 0;
        this.add.tween(this.s6_t1).to({y:150,alpha:1},1000,Phaser.Easing.Linear.Out,true,1500)



        this.time.events.add(Phaser.Timer.SECOND * 2,function(){
            this.s6_t2 = this.add.image(MyGame.GAME_WIDTH/2,280,'s6_t2');
            this.s6_t2.anchor.set(0.5);
            this.add.tween(this.s6_t2.scale).from({x:5,y:5},500,Phaser.Easing.Linear.Out,true);
        }, this);

        this.time.events.add(Phaser.Timer.SECOND * 6,function(){
            this.toScene7();
        }, this);




        /*var blink = this.add.sprite(0,0,"blink");
        var fadeTween = this.add.tween(blink);
        fadeTween.to({
            alpha:0
        },3500,Phaser.Easing.Cubic.Out,true);*/
    },
    toScene7 : function(){
        this.state.start('scene7');
    }
};

