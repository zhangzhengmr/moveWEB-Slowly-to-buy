$(function () {

  $.ajax({
    url: url + "/api/getcategorytitle",
    success: function (data) {
      var html = template("getlist", data)
      $(".listcontent").html(html)
    }
  })

  $(".listcontent").on("click", "li>a", function () {
    var self = $(this)
    var title = self.attr("data-title-id")


    $.ajax({
      url: url + "/api/getcategory?titleid=" + title,
      dataType: "jsonp",
      success: function (data) {
        console.log(data)
        var html = template("getcontent", data)
        self.siblings().html(html).toggle().parent().siblings().find("ul").slideUp()
      }
    })
  })



})