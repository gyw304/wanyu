MyGame.scene8 = function(game) {

};



MyGame.scene8.prototype = {
    create: function() {

        this.bg8 = this.add.image(0,0,'bg8');


        this.fire_logo = this.add.sprite(MyGame.GAME_WIDTH/2,430, 'fire_logo');
        this.fire_logo.anchor.set(0.5);

        this.s8_sha = this.add.image(0,0,'s8_sha');


        this.time.events.add(Phaser.Timer.SECOND * 1.5,function(){
            this.fire_logo.animations.add('fire_logo');
            this.fire_logo.animations.play('fire_logo',10,false);

            this.add.tween(this.s8_sha).to({alpha:0},2000,Phaser.Easing.Linear.Out,true)
        }, this);



        this.s8_t3 = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 100,'s8_t3');
        this.s8_t3.anchor.set(0.5);
        this.s8_t2 = this.add.image(MyGame.GAME_WIDTH/2,100,'s8_t2');
        this.s8_t2.anchor.set(0.5);



        this.time.events.add(Phaser.Timer.SECOND * 1.5,function(){
            this.s8_t1 = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 275,'s8_t1');
            this.s8_t1.anchor.set(0.5);
            this.add.tween(this.s8_t1.scale).from({x:7,y:7},200,Phaser.Easing.Linear.Out,true)
        }, this);


        this.shake(this,this.s8_t3,10,1700);
        //this.shake(this,this.s8_logo,10,1700);


        this.time.events.add(Phaser.Timer.SECOND * 5,function(){
            document.getElementById('signup-page').style.display = 'block'
        }, this);


        var blink = this.add.sprite(0,0,"blink");
        var fadeTween = this.add.tween(blink);
        fadeTween.to({
            alpha:0
        },3500,Phaser.Easing.Cubic.Out,true);
    },

    shake : function(self,obj,shakeSpeed,later){

        var oX = obj.x;
        var oY = obj.y;

        self.add.tween(obj).to({
            x:oX+2,y:oY-7,angle:1.5
        },shakeSpeed,Phaser.Easing.Cubic.Out,true,later).onComplete.add(function(){
                self.add.tween(obj).to({
                    x:oX-8,y:oY-8,angle:.5
                },shakeSpeed,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
                        self.add.tween(obj).to({
                            x:oX-8,y:oY+5,angle:-.5
                        },shakeSpeed,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
                                self.add.tween(obj).to({
                                    x:oX-7,y:oY+1,angle:-3.5
                                },shakeSpeed,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
                                        self.add.tween(obj).to({
                                            x:oX-7,y:oY+5,angle:-2.5
                                        },shakeSpeed,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
                                                self.add.tween(obj).to({
                                                    x:oX-3,y:oY+2,angle:-.5
                                                },shakeSpeed,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
                                                        self.add.tween(obj).to({
                                                            x:oX-8,y:oY-1,angle:-3.5
                                                        },shakeSpeed,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
                                                                self.add.tween(obj).to({
                                                                    x:oX-5,y:oY+3,angle:2.5
                                                                },shakeSpeed,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
                                                                        self.add.tween(obj).to({
                                                                            x:oX+2,y:oY+7,angle:.5
                                                                        },shakeSpeed,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
                                                                                self.add.tween(obj).to({
                                                                                    x:oX,y:oY,angle:0
                                                                                },shakeSpeed,Phaser.Easing.Cubic.Out,true)
                                                                            })
                                                                    })
                                                            })
                                                    })
                                            })
                                    })
                            })
                    })
            })
    }

};

