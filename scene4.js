MyGame.scene4 = function(game) {

};


var isDrag = false;
MyGame.scene4.prototype = {
    create: function() {

        this.bg4 = this.add.image(0,0,'bg4');

        this.s4_t1 = this.add.image(MyGame.GAME_WIDTH/2,210,'s4_t1');
        this.s4_t1.anchor.set(0.5);

        this.s4_t2 = this.add.image(MyGame.GAME_WIDTH/2,260,'s4_t2');
        this.s4_t2.anchor.set(0.5);

        this.s4_t3 = this.add.image(MyGame.GAME_WIDTH/2,330,'s4_t3');
        this.s4_t3.anchor.set(0.5);

        this.s4_t4 = this.add.image(MyGame.GAME_WIDTH/2,150,'s4_t4');
        this.s4_t4.anchor.set(0.5);


        this.s4_top_1 = this.add.image(0,40,'s4_top_1');
        this.s4_top_0 = this.add.image(0,0,'s4_top_0');

        this.s4_bottom_1 = this.add.image(0,502,'s4_bottom_1')
        this.s4_bottom_0 = this.add.image(0,834,'s4_bottom_0')

        this.gearGroup = this.add.group();
        this.gear = this.gearGroup.create(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT/2, 'gear');
        this.gear.anchor.set(0.5);
        this.dock = this.gearGroup.create(263, 446, 'dock');
        this.dock_light = this.gearGroup.create(274, 459, 'dock-light');

        this.add.tween(this.dock_light).to({
            alpha:0
        },500,Phaser.Easing.Linear.Out,true,0,-1,true);


        //this.gear = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT/2,'gear');


        this.drag = this.add.image(MyGame.GAME_WIDTH - 170,-200,'drag');
        this.drag.inputEnabled = true;
        this.drag.input.enableDrag();
        this.drag.events.onDragUpdate.add(this.dragUpdate,this);





        this.add.tween(this.drag).to({y:MyGame.GAME_HEIGHT - 280,alpha:1},400,Phaser.Easing.Linear.none,true,2000).onComplete.add(function(){
            this.add.tween(this.drag).to({y:MyGame.GAME_HEIGHT - 310},150,Phaser.Easing.Linear.none,true).onComplete.add(function(){
                this.curr = this.add.sprite(MyGame.GAME_WIDTH/2+130,MyGame.GAME_HEIGHT/2+160, 'curr');
                this.curr.anchor.set(0.5);
                this.curr.animations.add('curr');
                this.curr.animations.play('curr',5,true);
                this.add.tween(this.curr).from({alpha:0},150,Phaser.Easing.Linear.none,true);

                this.time.events.add(Phaser.Timer.SECOND * 3, function(){
                    if(!isDrag)
                    {
                        this.curr.kill();
                        this.add.tween(this.drag).to({x:MyGame.GAME_WIDTH/2 - 45.5,y:MyGame.GAME_HEIGHT/2 - 45.5},1000,Phaser.Easing.Linear.none,true).onComplete.add(function(){
                            this.openDoor();
                        },this);
                    }
                }, this);

            },this)
        },this);


        var blink = this.add.sprite(0,0,"blink");
        var fadeTween = this.add.tween(blink);
        fadeTween.to({
            alpha:0
        },1500,Phaser.Easing.Cubic.Out,true);
    },
    dragUpdate : function(){
        this.curr.kill();
        isDrag = true;
        if(this.drag.x<=0) this.drag.x = 0;
        if(this.drag.x>=MyGame.GAME_WIDTH - 91) this.drag.x = MyGame.GAME_WIDTH - 91;
        if(this.drag.y<=0) this.drag.y = 0;
        if(this.drag.y>=MyGame.GAME_HEIGHT - 92) this.drag.y = MyGame.GAME_HEIGHT - 92;

        if(this.drag.x >= this.dock.x && this.drag.y >= this.dock.y && this.drag.x + 90 <= this.dock.x + 111 && this.drag.y + 90 <= this.dock.y + 111)
        {
            this.drag.inputEnabled = false;
            this.drag.x = this.dock.x + 12;
            this.drag.y = this.dock.y + 12;
            this.openDoor();
        }

    }, //550
    openDoor:function(){

        this.add.tween(this.gear).to({angle:90},500,Phaser.Easing.Linear.none,true).onComplete.add(function(){
            this.add.tween(this.s4_top_1).to({y:-200},800,Phaser.Easing.Cubic.Out,true,500).onComplete.add(function(){
                this.add.tween(this.s4_top_1).to({y:-550},800,Phaser.Easing.Cubic.Out,true,300)
                this.add.tween(this.s4_top_0).to({y:-175},400,Phaser.Easing.Cubic.Out,true,300);
            },this);


            this.add.tween(this.s4_bottom_1).to({y:550 + 152},800,Phaser.Easing.Cubic.Out,true,500).onComplete.add(function(){
                this.add.tween(this.s4_bottom_1).to({y:550 + 502},800,Phaser.Easing.Cubic.Out,true,300);
                this.add.tween(this.s4_bottom_0).to({y:175 + 834},400,Phaser.Easing.Cubic.Out,true,300);
            },this);


            this.add.tween(this.drag).to({alpha:0},200,Phaser.Easing.Cubic.Out,true,100).onComplete.add(function(){
                this.drag.kill();

                this.add.tween(this.s4_t4).from({alpha:0,y:160},1500,Phaser.Easing.Cubic.Out,true,1500)
                this.add.tween(this.s4_t1).from({alpha:0,y:220},1500,Phaser.Easing.Cubic.Out,true,2000)
                this.add.tween(this.s4_t2).from({alpha:0,y:270},1500,Phaser.Easing.Cubic.Out,true,2500)
                this.add.tween(this.s4_t3).from({alpha:0,y:340},1500,Phaser.Easing.Cubic.Out,true,3000).onComplete.add(function(){
                    this.time.events.add(Phaser.Timer.SECOND * 2, this.toScene5, this);
                },this)

            },this);

            this.add.tween(this.gearGroup).to({alpha:0},200,Phaser.Easing.Cubic.Out,true,100).onComplete.add(function(){
                this.gearGroup.forEach(function(item){
                    item.kill();
                })
            },this)

        },this);
    },
    toScene5 : function(){
        this.state.start('scene5');
    }
};

