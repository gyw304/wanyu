MyGame.scene2 = function(game) {

};
MyGame.scene2.prototype = {
    create: function() {

        this.add.image(0,0,'bg2');

        this.s2_roundPep = this.add.image(MyGame.GAME_WIDTH/2,300,'s2_roundPep');
        this.s2_roundPep.anchor.set(0.5);
        this.s2_roundPep.alpha = 0;
        this.add.tween(this.s2_roundPep).to({alpha:1}, 1000, Phaser.Easing.Linear.None, true,500);

        this.blockGroup = this.add.group();

        this.s2_block_1 =this.blockGroup.create(170,160,'s2_block_1');
        this.s2_block_2 =this.blockGroup.create(470,160,'s2_block_2');
        this.s2_block_3 =this.blockGroup.create(170,460,'s2_block_3');
        this.s2_block_4 =this.blockGroup.create(470,460,'s2_block_4');



        this.blockGroup.forEach(function(item){
            item.anchor.set(0.5)
        });

        this.add.tween(this.s2_block_1.scale).from({x:0,y:0}, 500, Phaser.Easing.Linear.None, true,1000);
        this.add.tween(this.s2_block_1).to({angle:360}, 2000, Phaser.Easing.Linear.None, true,1000,-1)
        this.add.tween(this.s2_block_2.scale).from({x:0,y:0}, 500, Phaser.Easing.Linear.None, true,1100);
        this.add.tween(this.s2_block_2).to({angle:360}, 2000, Phaser.Easing.Linear.None, true,1300,-1);
        this.add.tween(this.s2_block_3.scale).from({x:0,y:0}, 500, Phaser.Easing.Linear.None, true,1200);
        this.add.tween(this.s2_block_3).to({angle:360}, 2000, Phaser.Easing.Linear.None, true,1500,-1)
        this.add.tween(this.s2_block_4.scale).from({x:0,y:0}, 500, Phaser.Easing.Linear.None, true,1300).onComplete.add(function(){

            this.s2_t1= this.add.image(MyGame.GAME_WIDTH/2,810,'s2_t1');
            this.s2_t1.anchor.set(0.5);

            this.s2_t2= this.add.image(MyGame.GAME_WIDTH/2,860,'s2_t2');
            this.s2_t2.anchor.set(0.5);

            this.s2_t3= this.add.image(MyGame.GAME_WIDTH/2,910,'s2_t3');
            this.s2_t3.anchor.set(0.5);

            this.add.tween(this.s2_t1).from({y: 820,alpha:0}, 1000, Phaser.Easing.Cubic.Out, true,1000)
            this.add.tween(this.s2_t2).from({y: 870,alpha:0}, 1000, Phaser.Easing.Cubic.Out, true,1500)
            this.add.tween(this.s2_t3).from({y: 920,alpha:0}, 1000, Phaser.Easing.Cubic.Out, true,2000)
        },this)
        this.add.tween(this.s2_block_4).to({angle:360}, 2000, Phaser.Easing.Linear.None, true,1700,-1)







        this.time.events.add(Phaser.Timer.SECOND * 7, this.toScene3, this);

        var blink = this.add.sprite(0,0,"blink");
        var fadeTween = this.add.tween(blink);
        fadeTween.to({
            alpha:0
        },2000,Phaser.Easing.Cubic.Out,true);
    },
    toScene3 : function(){
        this.state.start('scene3');
    }
};

