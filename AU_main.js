// ヤダを再生
window.addEventListener ('load',function(){
        const se1 = document.querySelector('#play_no');
        document.querySelector("#btn_no").addEventListener("click", () => {
            se1.play();
        });
    });
// ナニを再生
window.addEventListener ('load',function(){
        const se2 = document.querySelector('#play_what');
        document.querySelector("#btn_what").addEventListener("click", () => {
            se2.play();
        });
    });
// ﾃﾞﾓﾀﾞｲｼﾞｮｳﾌﾞを再生
window.addEventListener ('load',function(){
        const se3 = document.querySelector('#play_okay');
        document.querySelector("#btn_okay").addEventListener("click", () => {
            se3.play();
        });
    });
// ｱｧｰｲｯﾀｲ!を再生
window.addEventListener ('load',function(){
        const se4 = document.querySelector('#play_ouch');
        document.querySelector("#btn_ouch").addEventListener("click", () => {
            se4.play();
        });
    });
// ランダム再生
const playlist = [ "ouch.wav", "okay.wav", "what.wav","no.wav" ];
const myaudio = new Audio( playlist );
function randomplay( list ){ myaudio.src = list[ Math.floor( Math.random()*list.length ) ]; myaudio.play();}
