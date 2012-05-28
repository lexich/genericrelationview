/**
 * Created with PyCharm.
 * User: efremov
 * Date: 25.05.12
 * Time: 14:11
 * To change this template use File | Settings | File Templates.
 */
(function($){
    window.generic_view_json = function(self,url,selector){
        var init = $(self).data("init");

        var id = self.value;
        var drop = $("#"+selector);
        var value = null;
        if( init != null ){
            if( init['id'] == id ){
                value = init['value'];
            }
        } else {
            value = drop.val();
            $(self).data("init",{id:id,value:value});
        }

        var select = $("<select/>").attr({
            id : selector,
            name : drop.attr('name')
        });
        drop.replaceWith(select);

        select.html('<option value="">---------</option>');
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
                    select.append(option);
                }
            });
        }
    }

    $(document).ready(function(){
        $('.generic_view').change();
    });
})(jQuery);