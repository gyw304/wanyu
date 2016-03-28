MyGame.scene3 = function(game) {

};

var bmd;
var pixels = [];
var temp = [];
var cropRect;
var pic;

MyGame.scene3.prototype = {
    create: function() {


        this.bg3 = this.add.image(0,0,'bg3')
        this.bot = this.add.image(MyGame.GAME_WIDTH/2,100,'robot');
        this.bot.anchor.set(0.5,0.08);





        this.s3_t1 = this.add.image(MyGame.GAME_WIDTH/2,910,'s3_t1');
        this.s3_t1.anchor.set(0.5);
        this.s3_t1.alpha = 0;
        this.add.tween(this.s3_t1).to({y: 900,alpha:1}, 1000, Phaser.Easing.Linear.None, true,500)


        this.add.tween(this.bg3).to({y: -1264}, 2000, Phaser.Easing.Cubic.Out, true);

        this.add.tween(this.bot.scale).from({x:0,y:0}, 2000, Phaser.Easing.Cubic.Out, true).onComplete.add(function(){
            this.bot_light = this.add.image(325,600,'bot_light');
            this.bot_light.anchor.set(0.5);
            this.add.tween(this.bot_light).to({y: 340}, 1500, Phaser.Easing.Linear.None, true,0);
            this.add.tween(this.bot_light.scale).to({x:0,y:0}, 1500, Phaser.Easing.Linear.None, true,0).onComplete.add(function(){
                this.time.events.add(Phaser.Timer.SECOND * 1,function(){
                    this.toScene4()
                }, this);
            },this)

        },this)


        var blink = this.add.sprite(0,0,"blink");
        var fadeTween = this.add.tween(blink);
        fadeTween.to({
            alpha:0
        },3500,Phaser.Easing.Cubic.Out,true);
    },
    update : function(){


    },
    toScene4:function(){
        this.state.start('scene4');
    }
};

