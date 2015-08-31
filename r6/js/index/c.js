require.config({
    baseUrl:'js/index'
});
define(['b'],function(b){
    console.log('run c.js :'+b.color+','+b.width);
});