$(()=>{

  //navの位置
  const $nav = $("nav").offset().top

  //各要素の位置(navが固定されるのでnavの高さ(60px)分引く)
  const $div1 = $(".div1").offset().top - 60
  const $div2 = $(".div2").offset().top - 60
  const $div3 = $(".div3").offset().top - 60
  const $div4 = $(".div4").offset().top - 60
  const $div5 = $(".div5").offset().top - 60


  //　スクロールした時、ロードした時に発火
  $(window).on("scroll load", function() {
      //スクロール値
      let $scroll = $(window).scrollTop()

      //.scrollにスクロール位置を表示
      $(".scroll").text($scroll)

      //navの固定
      if($nav < $scroll){
        $("nav").addClass("fixed")
      }else{
        $("nav").removeClass("fixed")
      }

      if($div1 < $scroll && $div2 > $scroll){
        //スクロールがdiv1に到達したら
        $(".msg").text("div1")
      }else if($div2 < $scroll && $div3 > $scroll){
        //スクロールがdiv2に到達したら
        $(".msg").text("div2")
      }else if($div3 < $scroll && $div4 > $scroll){
        //スクロールがdiv3に到達したら
        $(".msg").text("div3")
      }else if($div4 < $scroll && $div5 > $scroll){
        //スクロールがdiv4に到達したら
        $(".msg").text("div4")
      }else if($div5 < $scroll){
        //スクロールがdiv5に到達したら
        $(".msg").text("div5")
      }
  })

})
