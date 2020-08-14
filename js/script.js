$(function() {
  $('#back a').on('click',function(event){
    // #back内の<a>タグがクリックされたときの処理
    $('body, html').animate({
      //scrollTop は、スクロール位置を取得できるメソッドです。
      //今回は「scrollTop:0」を指定しているので、「最上部に移動する」の意味になります。
      //また、アニメーションの動作時間を「800」で指定しているので、「800ミリ秒間（0.8秒間）かけてページの最上部まで移動する」の意味になります。
      scrollTop:0
    }, 800);
    //evnet.preventDefault(); は、aタグの機能を無効にするメソッド
    event.preventDefault();
  });
});