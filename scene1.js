MyGame.scene1 = function(game) {};
var scene1;
MyGame.scene1.prototype = {
    create: function() {
        scene1 = this;
        this.bg1 = this.add.image(0,0,'bg1');
        this.s1_t1 = this.add.image(MyGame.GAME_WIDTH/2,190,'s1_t1');
        this.s1_t1.anchor.set(0.5);
        this.s1_t2 = this.add.image(MyGame.GAME_WIDTH/2,240,'s1_t2');
        this.s1_t2.anchor.set(0.5);
        this.s1_t3 = this.add.image(MyGame.GAME_WIDTH/2,290,'s1_t3');
        this.s1_t3.anchor.set(0.5);


        this.s1_fire = this.add.image(640,300,'s1_fire');
        this.s1_light = this.add.image(190,900,'s1_light');
        this.s1_light.anchor.set(0.5);
        this.s1_light.width = 0;
        this.s1_light.height = 0;

        this.add.tween(this.s1_t1).from({y: 200,alpha:0}, 700, Phaser.Easing.Cubic.Out, true);
        this.add.tween(this.s1_t2).from({y: 250,alpha:0}, 700, Phaser.Easing.Cubic.Out, true,500);
        this.add.tween(this.s1_t3).from({y: 300,alpha:0}, 700, Phaser.Easing.Cubic.Out, true,1000).onComplete.add(function(){
            this.fireTween = this.add.tween(this.s1_fire).to({y: 750,x :140}, 450, Phaser.Easing.Linear.None, true,1000).onComplete.add(function(){
                this.add.tween(this.s1_fire).to({alpha: 0}, 150, Phaser.Easing.Linear.None, true);
                this.add.tween(this.s1_light).to({width:777,height:77}, 1000, Phaser.Easing.Linear.None, true);
                this.blink = this.add.sprite(0, 0,'blink');
                this.blink.alpha = 0;
                this.add.tween(this.blink).to({alpha: 1}, 100, Phaser.Easing.Linear.None, true).onComplete.add(function(){
                    scene1.state.start('scene2');
                });
            },this)
        },this)






    },

};