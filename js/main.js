// this is your custom Javascript file

$(function () {
  // add any custom Javascript code below this line

  //changing the text of my first paragraph to something different
  $("p#disclaimer").click(function () {
    $("p#disclaimer").text("Disclaimer: I'm gonna tell you why I haven't punch needled a damn thing yet. It's because I'm forgetful. I found a bunch of kits on Etsy and they are incredibly cute. And then I would forget to put them in my cart. Then I went to Florida and I was real serious about this but I still didn't do it. I came home and this class started, so I lost focus. I even deleted the whole tab I had!! I'm a fool.")
  })

  //changes each individual image to a new image when mouse overed
  $("img#cloud").mouseover(function () {
    $("img#cloud").attr("src", "images/whale_punch.jpg");
  })

  $("img#whale").mouseover(function () {
    $("img#whale").attr("src", "images/leaf_punch.jpg");
  })

  $("img#leaf").mouseover(function () {
    $("img#leaf").attr("src", "images/cloud_punch.jpg");
  })

  //changes pictures to original when mouse is off
  $("img#whale").mouseout(function () {
    $("img#whale").attr("src", "images/whale_punch.jpg");
  })

  $("img#leaf").mouseout(function () {
    $("img#leaf").attr("src", "images/leaf_punch.jpg");
  })

  $("img#cloud").mouseout(function () {
    $("img#cloud").attr("src", "images/cloud_punch.jpg");
  })

  //animation of the youtube video and moving it to the center by 6 seconds
  $("iframe").animate({"left": "175px"}, 6000)

  // add any custom Javascript code above this line.
})
