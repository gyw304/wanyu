MyGame.scene5 = function(game) {

};

var content1 = [
    "",
    "历经这么多天，\n这个奇迹终于发生了！",
    "",
    "在江宁高新园的核心，\n104国道淳化段，\n我们开辟了一个新世界。",
    "",
    "此外，纬七路东进贯通宁杭高速，\n淳化高速出口启动建设，\n15分钟可直达南京主城。"
];

var content2 = [
    "",
    "",
    "队长，你说的是？",
    "",
    "青龙山旁，梅龙湖边，\n这里毗邻宁杭高速，\n北接南京主城，西邻东山新城，\n与东麒路汽车4s园、众彩物流为邻。",
    "",
    "国际领先的80万㎡\n专业市场集群，立足南京，\n辐射安徽、苏北乃至长三角\n大局已定，大市已成。"
];

var text;
var index = 0;
var line = '';
var flag = content1;
var text1,text2;
var obj = 'qtz';
var n = 1;

MyGame.scene5.prototype = {
    create: function() {

        this.bg5 = this.add.image(0,0,'bg5');

        this.qtz = this.add.image(MyGame.GAME_WIDTH,10,'qtz');
        this.qtz.anchor.set(1,0);

        this.s5_bo = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT/2,'s5_bo');
        this.s5_bo.anchor.set(0.5);

        this.bo_a_group = this.add.group();

        this.s5_bo_a = this.bo_a_group.create(MyGame.GAME_WIDTH/2+30,MyGame.GAME_HEIGHT/2-10,'s5_bo_a')
        this.s5_bo_a.anchor.set(0.5);
        this.s5_bo_a_1 = this.bo_a_group.create(MyGame.GAME_WIDTH/2-35,MyGame.GAME_HEIGHT/2-10,'s5_bo_a_1')
        this.s5_bo_a_1.anchor.set(0.5);

        this.s5_bo_b = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT/2+40,'s5_bo_b');
        this.s5_bo_b.anchor.set(0.5);
        this.s5_bo_b.scale.x = 0;
        this.s5_bo_b.scale.y = 0;


        this.add.tween(this.s5_bo_a).from({
            x:this.s5_bo_a.x+550
        },500,Phaser.Easing.Cubic.Out,true,500).onComplete.add(function(){


                this.s5_bo_dian = this.add.image(MyGame.GAME_WIDTH/2+19,MyGame.GAME_HEIGHT/2-17,'s5_bo_dian');
                this.s5_bo_dian.anchor.set(0.5);
                this.s5_bo_dian.alpha = 1;

                this.dianTween1 = this.add.tween(this.s5_bo_dian.scale).to({
                    x:2,y:2
                },1000,Phaser.Easing.Cubic.Out,true,0,-1);

                this.dianTween2 = this.add.tween(this.s5_bo_dian).to({
                    alpha:0
                },1000,Phaser.Easing.Cubic.Out,true,0,-1)

            },this)

        this.add.tween(this.s5_bo_a_1).from({
            x:this.s5_bo_a_1.x-550
        },500,Phaser.Easing.Cubic.Out,true,8000).onComplete.add(function(){

                this.add.tween(this.s5_bo_a).to({
                    x:this.s5_bo_a.x+550
                },500,Phaser.Easing.Cubic.Out,true,5000);

                this.add.tween(this.s5_bo_a_1).to({
                    x:this.s5_bo_a_1.x-550
                },500,Phaser.Easing.Cubic.Out,true,5000);

                this.add.tween(this.s5_bo_dian).to({
                    alpha:0
                },500,Phaser.Easing.Cubic.Out,true,5000).onComplete.add(function(){
                        this.s5_bo_dian.kill()
                    },this)


        },this);
        this.add.tween(this.s5_bo_b.scale).to({
            x:1,y:1
        },500,Phaser.Easing.Cubic.Out,true,14000);


        this.s5_bo_btn = this.add.image(MyGame.GAME_WIDTH - 130,MyGame.GAME_HEIGHT/2+152,'s5_bo_btn');


        this.dhf = this.add.image(0,MyGame.GAME_HEIGHT,'dhf');
        this.dhf.anchor.set(0,1);

        this.style = { font: "20px Courier", fill: "#ffffff"};

        text1 = this.add.text(100, 130, '', this.style);
        text1.anchor.set(0,0.5);
        text1.lineSpacing = 10;

        text2 = this.add.text(MyGame.GAME_WIDTH - 370, MyGame.GAME_HEIGHT - 100, '', this.style);
        text2.anchor.set(0,0.5);
        text2.lineSpacing = 10;

        this.nextLine();

        var blink = this.add.sprite(0,0,"blink");
        var fadeTween = this.add.tween(blink);
        fadeTween.to({
            alpha:0
        },1500,Phaser.Easing.Cubic.Out,true);

    },
    nextLine : function(){
        index++;
        if (index < flag.length)
        {
            line = '';
            this.time.events.repeat(50, flag[index].length + 1, this.updateLine, this);
        }
        else
        {

            this.time.events.add(Phaser.Timer.SECOND * 3,function(){
                this.toScene6()
            }, this);


        }
    },
    updateLine : function(){
        if (line.length < flag[index].length)
        {
            line = flag[index].substr(0, line.length + 1);
            if(obj == 'qtz')
            {
                text1.setText(line);
            }
            else
            {
                text2.setText(line);
            }
        }
        else
        {
            this.time.events.add(Phaser.Timer.SECOND * 1, this.nextLine, this);
            if(n)
            {
                flag = content2;
                obj = 'dhf';
                n = 0;
            }
            else
            {
                flag = content1;
                obj = 'qtz';
                n = 1;
            }

        }
    },
    toScene6 : function(){
        this.state.start('scene6');
    }
};

