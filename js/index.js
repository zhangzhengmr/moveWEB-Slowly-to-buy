$(function () {
  $.ajax({
    url:url+'/api/getindexmenu',
    success:function (data) {
      var html=template("getMenu",data);
      $(".nav").html(html);
    }
  })

  $.ajax({
    url:url+'/api/getmoneyctrl',
    success:function (data) {
      var html=template("getaaa",data);
      $("#article").html(html);
    }
  })
})