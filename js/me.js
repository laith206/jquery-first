//  $("#btn").click(function() {
//      $("#btn ").hide(3000, function() {
//          $("#aaa ").fadeOut(4000, function() {
//              $("#aaa ").fadeIn(4000);
//  
//          })
//      })
//  
//  
//  $("#btn").click(function() {
//      $("#aaa ").hide(3000).show(3000).fadeOut(3000)


//  $("#btn").click(function(){
//      $("#aaa").animate({left: '250px'});
//    }); 
//  
//  
//    $("#btn").click(function() {
//      $("#btn ").hide(3000, function() {
//          $("#aaa ").fadeOut(4000, function() {
//              $("#aaa ").animate({left: '250px'});
//  
//          })
//      })
//  })



$("#test").click(function () {
    $("#test").animate({ width: "100%" }, 2000)
    $("#test").animate({ height: "100vh" }, 2000, function () {
        $("#test h1").fadeIn(2000, function () {
            $("#test .col-md-4").show(2000, function () {
                $("#img").show(2000, function () {
                    $("#test p").show(2000)
                })
            })
        })

    })
})