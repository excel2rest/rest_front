(function($){
  $(function(){
    var rand = function() {
        return Math.random().toString(36).substr(2); // remove `0.`
    }
    
    var token = function() {
        return rand() + rand(); // to make it longer
    }
    
    $('.sidenav').sidenav();

    $('#upload').click(() => {
      $('#file').click()
      return false
    })

    $('#file').change(() => {
      $('#form').submit()
    })

    var token_value = token();
    var url = "http://localhost:9000/apis/upload/" + token_value
    var href = "http://localhost:9000/apis/" + token_value
    $("#link").attr("href", href)
    $("#link").text(url)

    $('#form').ajaxForm({
      url: url,

      beforeSend: function(xhr) {
        var authRequest = 'Bearer TnEhFkofFySkKBZfJQhTco39xErLwFU0'
        xhr.setRequestHeader('Authorization', authRequest);
        $('#upload').attr("disabled", "disabled")
        $("#loading").show()
      },

      success: () => {
        $("#url").show()
        $('#upload').removeAttr("disabled")
        $("#loading").hide()
      }, 

      error: () => {
        $('#upload').removeAttr("disabled")
        $("#loading").hide()
      }
    })
  }); // end of document ready
})(jQuery); // end of jQuery name space
