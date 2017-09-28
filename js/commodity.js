$(function () {

  //地址栏中的id
  var id=GetQueryString("categoryid")
  
  //替换物品名称文字
  $.ajax({
    url:url+"/api/getcategorybyid?categoryid="+id,
    success:function (data) {
      console.log(data)
     $(".commodity .tv").html(data.result[0].category)
    }
  })

  //物品

  var pageid=GetQueryString("pageid")-0
  console.log(pageid)
  $.ajax({
    url:url+"/api/getproductlist",
    data:{
      categoryid:id,
      pageid:pageid||1
    },
    success:function (data) {
      var html=template("getprodect",data)
      $(".product ul").html(html)
      var pagesize=data.pagesize
      var totalCount=data.totalCount
      var page=parseInt(Math.ceil(totalCount/pagesize))
      var option=""
      for (var i = 0; i < page; i++) {
        if((i+1)==pageid){
          option+='<option selected value="'+(i+1)+'">'+(i+1)+'</option>'
        }else{
          option+='<option value="'+(i+1)+'">'+(i+1)+'</option>'
        }
        
      }

      $(".fy select").html(option)

      $(".fy select").on("change",function () {
        console.log($(this).val())
        window.location.href="./list.html?categoryid="+id+"&pageid="+$(this).val()
      })


      var pre="./list.html?categoryid="+id+"&pageid="+(pageid-1)
      var nex="./list.html?categoryid="+id+"&pageid="+(pageid+1)
      if (pageid==1) {
        pre="./list.html?categoryid="+id+"&pageid=1"
      }
      if(pageid==page){
        nex="./list.html?categoryid="+id+"&pageid="+page
      }
      $(".pre").attr("href",pre)
      $(".nex").attr("href",nex)
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