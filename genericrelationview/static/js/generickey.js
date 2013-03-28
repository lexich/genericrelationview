(function($){

  window.generic_view_json = function(self,url,selector, content_type){
    var init = $(self).data("init");
    var contentID = self.id;
    var paramContenID = contentID.replace("id_","").replace("content_type","")
    var objectID = "id_" + paramContenID + selector;
    var id = self.value;

    var $drop = $("#"+objectID);
    var value = null;
    if( init != null ){
      if( init['id'] == id ){
        value = init['value'];
      }
    } else {
      value = $drop.val();
      $(self).data("init",{id:id,value:value});
    }

    var $select = $drop;

    if( !$select.is("select")){
      $select = $("<select/>").attr({
        id : objectID,
        name : $drop.attr('name')
      }).addClass("rel-generic");
      $drop.replaceWith($select);
    }

    $select.html('<option value="">---------</option>');
    if( id != "" ){
      var path = url + "?id=" + id;
      $.getJSON(path,function(data){
        for( var i=0; i<data.length;++i){
          var item = data[i];
          var val = item['pk'];
          var title = item['fields']['title'];
          var option = $("<option/>").val(val).text(title);
          if( value == val ){
            option.attr('selected','selected');
          }
          $select.append(option);
        }
        $select.trigger("generickey:list_update");
      });
    }
  };

  $(document).ready(function(){
    $('.generic_view').change();
  });
})(jQuery);