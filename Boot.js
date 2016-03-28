
var MyGame = {};
MyGame.Boot = function(game) {
    MyGame.GAME_WIDTH = 640;
    MyGame.GAME_HEIGHT = 1008;


};
MyGame.Boot.prototype = {
    preload: function() {
        this.load.image('loadingBar_1', 'assets/loadingBar_1.png?1');
        this.load.image('loadingBar_0', 'assets/loadingBar_0.png?1');
        this.load.audio('music','assets/music.mp3');
        this.load.image('boot_bg', 'assets/boot_bg.jpg');
        this.load.atlasJSONHash('loading', 'assets/loading_json.png?1', 'assets/loading_json.json?2');
    },
    create: function() {
        this.input.maxPointers = 1;
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        /*this.scale.setScreenSize(true);*/
        this.state.start('Preloader');

        /*this.music = this.add.audio('music', true);
        /!*console.log(this.music)
        this.music.usingWebAudio = false;
        this.music.usingAudioTag = true;*!/
        this.music.play();*/


    }
};