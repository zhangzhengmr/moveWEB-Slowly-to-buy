$(function () {
  var productId= GetQueryString("productId")
  // console.log(productId)
  //http://182.254.146.100:3000
  
  $.ajax({
    url:url+"/api/getproduct?productid="+productId,
    success:function (data) {
      var name=data.result[0].categoryId
      $.ajax({
        url:url+"/api/getcategorybyid?categoryid="+name,
        success:function (data) {
          //console.log(data) category
          $(".tv").html(data.result[0].category)
        }
      })
     // console.log(data)
      // $(".tv").html(data.result[0].productName.split(" ")[0])
      //console.log(data.result[0].productName.split(" ",)[0])
      var html=template("getconcreteness",data)
      $(".concreteness").html(html)
    }
  })


    
  $.ajax({
    url:url+"/api/getproductcom?productid="+productId,
    success:function (data) {
      var html=template("gettake",data)
      $(".take").html(html)
    }
  })













})

 // js获取地址栏参数
 function GetQueryString(name){
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r!=null)return  unescape(r[2]); return null;
 //  if(r!=null)return  decodeURI(r[2]); return null;
}
