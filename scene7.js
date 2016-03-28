MyGame.scene7 = function(game) {

};



MyGame.scene7.prototype = {
    create: function() {

        this.bg7 = this.add.image(0,0,'bg7');

        this.s7_bot = this.add.image(MyGame.GAME_WIDTH,MyGame.GAME_HEIGHT,'s7_bot');
        this.s7_bot.anchor.set(1,1);

        this.add.tween(this.s7_bot).from({x:MyGame.GAME_WIDTH+640,y:MyGame.GAME_HEIGHT+300},300,Phaser.Easing.Cubic.Out,true,1000);

        this.s7_bottom = this.add.image(0,MyGame.GAME_HEIGHT,'s7_bottom');
        this.s7_bottom.anchor.set(0,1);


        this.time.events.add(Phaser.Timer.SECOND * 1.2,function(){
            this.s7_t1 = this.add.image(130,95,'s7_t1');
            this.add.tween(this.s7_t1.scale).from({x:7,y:7},300,Phaser.Easing.Linear.Out,true);
        }, this);

        this.time.events.add(Phaser.Timer.SECOND * 1.5,function(){
            this.s7_t2 = this.add.image(535,95,'s7_t2');
            this.s7_t2.anchor.set(1,0);
            this.add.tween(this.s7_t2.scale).from({x:7,y:7},300,Phaser.Easing.Linear.Out,true);
        }, this);

        this.time.events.add(Phaser.Timer.SECOND * 1.7,function(){
            this.s7_t3 = this.add.image(335,215,'s7_t3');
            this.s7_t3.anchor.set(0.5,0);
            this.add.tween(this.s7_t3.scale).from({x:7,y:7},300,Phaser.Easing.Linear.Out,true);
        }, this);

        this.time.events.add(Phaser.Timer.SECOND * 5,function(){
            this.toScene8();
        }, this);




        var blink = this.add.sprite(0,0,"blink");
        var fadeTween = this.add.tween(blink);
        fadeTween.to({
            alpha:0
        },3500,Phaser.Easing.Cubic.Out,true);
    },
    toScene8 : function(){
        this.state.start('scene8');
    }
};

