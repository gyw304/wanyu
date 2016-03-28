MyGame.Preloader = function(game){
};
MyGame.Preloader.prototype = {
    preload: function() {
        this.boot_bg = this.add.image(0,0,'boot_bg');
        this.loading = this.add.sprite(MyGame.GAME_WIDTH/2,430, 'loading');
        this.loading.anchor.set(0.5);
        this.loading.animations.add('loading');
        this.loading.animations.play('loading',10,true);
    },
    start : function(){
        this.load.image('bg1','assets/bg1.jpg');
        this.load.image('s1_t1','assets/s1_t1.png?1');
        this.load.image('s1_t2','assets/s1_t2.png?1');
        this.load.image('s1_t3','assets/s1_t3.png?1');
        this.load.image('s1_fire','assets/s1_fire.png');
        this.load.image('s1_light','assets/s1_light.png');
        this.load.image('blink','assets/blink.png');

        this.load.image('bg2','assets/bg2.jpg');
        this.load.image('s2_roundPep','assets/s2_roundPep.png');
        this.load.image('s2_t1','assets/s2_t1.png?1');
        this.load.image('s2_t2','assets/s2_t2.png?1');
        this.load.image('s2_t3','assets/s2_t3.png?1');
        this.load.image('s2_block_1','assets/s2_block_1.png');
        this.load.image('s2_block_2','assets/s2_block_2.png');
        this.load.image('s2_block_3','assets/s2_block_3.png');
        this.load.image('s2_block_4','assets/s2_block_4.png');

        this.load.image('bg3','assets/bg3.jpg?1');
        this.load.image('bg3_a','assets/bg3_a.jpg?2');
        this.load.image('robot','assets/robot.png');
        this.load.image('bot_light','assets/bot_light.png');
        this.load.image('star', 'assets/block.png');
        this.load.image('mask', 'assets/mask.png?3');
        this.load.image('s3_t1', 'assets/s3_t1.png');

        this.load.image('bg4','assets/bg4.jpg');
        this.load.image('drag','assets/drag.png');
        this.load.image('s4_top_1','assets/s4_top_1.png');
        this.load.image('s4_bottom_1','assets/s4_bottom_1.png');
        this.load.image('s4_top_0','assets/s4_top_0.png');
        this.load.image('s4_bottom_0','assets/s4_bottom_0.png');
        this.load.image('gear','assets/gear.png');
        this.load.image('dock','assets/dock.png');
        this.load.image('dock-light','assets/dock-light.png?1');
        this.load.image('s4_t1','assets/s4_t1.png?2');
        this.load.image('s4_t2','assets/s4_t2.png?2');
        this.load.image('s4_t3','assets/s4_t3.png?2');
        this.load.image('s4_t4','assets/s4_t4.png?2');

        this.load.image('bg5','assets/bg5.jpg?1');
        this.load.image('s5_bo','assets/s5_bo.png?1');
        this.load.image('s5_bo_btn','assets/s5_bo_btn.png');
        this.load.image('s5_bo_dian','assets/s5_bo_dian.png');
        this.load.image('s5_bo_a','assets/s5_bo_a.png?1');
        this.load.image('s5_bo_a_1','assets/s5_bo_a_1.png?1');
        this.load.image('s5_bo_b','assets/s5_bo_b.png');
        this.load.image('dhf','assets/dhf.png');
        this.load.image('qtz','assets/qtz.png');

        this.load.image('bg6','assets/bg6.jpg');
        this.load.image('s6_bottom','assets/s6_bottom.png');
        this.load.image('s6_lou','assets/s6_lou.png');
        this.load.image('s6_t1','assets/s6_t1.png');
        this.load.image('s6_t2','assets/s6_t2.png');

        this.load.image('bg7','assets/bg7.jpg');
        this.load.image('s7_bottom','assets/s7_bottom.png');
        this.load.image('s7_bot','assets/s7_bot.png');
        this.load.image('s7_t1','assets/s7_t1.png');
        this.load.image('s7_t2','assets/s7_t2.png');
        this.load.image('s7_t3','assets/s7_t3.png');

        this.load.image('bg8','assets/bg8.jpg?1');
        this.load.image('s8_t1','assets/s8_t1.png');
        this.load.image('s8_t2','assets/s8_t2.png');
        this.load.image('s8_t3','assets/s8_t3.png');

        this.load.image('s8_sha','assets/s8_sha.png');
        this.load.atlasJSONHash('fire_logo', 'assets/fireLogo_json.png?10', 'assets/fireLogo_json.json?11');
        this.load.atlasJSONHash('curr', 'assets/curr_json.png', 'assets/curr_json.json');

        this.load.start();

    },

    fileComplete : function(progress){
        this.text.setText( + progress + "%");
    },
    loadComplete : function(){
        this.state.start('scene1');
    },
    create: function() {
        this.start();
        this.load.onFileComplete.add(this.fileComplete, this);
        this.load.onLoadComplete.add(this.loadComplete, this);
        this.text = this.add.text(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT/2+70, '', { fill: '#ffffff' });
        this.text.anchor.set(0.5);
    }
};