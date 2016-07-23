$(document).ready(function(){
  $('#search').click(function(){
    var searchval=$('#searchval').val();
  var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchval+"&format=json&callback=?";
  $.ajax({
    type:"GET",
    url:url,
    async:false,
    dataType:"json",
    success:function(data){
      console.log(data[1][0]);
      console.log(data[2][0]);
      //console.log(data[3][0]);
      if(data[1][0]!=null){

    for(var i=0;i<data[1].length;i++){
      $('#output').prepend("<li><a target='_blank' href="+data[3][i]+"><h4>"+data[1][i]+"</h4><p>"+data[2][i]+"</p></a></li>");
    }
    }
    else{
      $('#output').html('');
        $('#output').prepend("<li><h4>No Result Found.</h4></li>");

    }
      $("#searchval").val('');
    },
    error:function(err){
    console.log(err);
  }
  });
  });
  $("#searchval").keypress(function(e){
    if(e.which==13){
      $('#search').click();
    }
  });
});
