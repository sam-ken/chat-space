$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
       `<div class="main-chat_messages_message">
          <div class="main-chat_messages_message_upper_info">
            <div class="main-chat_messages_message_upper_info_talker">
              ${message.user_name}
            </div>
            <div class="main-chat_messages_message_upper_info_date">
              ${message.created_at}
            </div>
          </div>
          <div class="main-chat_messages_message_lower">
            <p class="main-chat_messages_message_text">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
       `<div class="main-chat_messages_message">
          <div class="main-chat_messages_message_upper_info">
            <div class="main-chat_messages_message_upper_info_talker">
              ${message.user_name}
            </div>
            <div class="main-chat_messages_message_upper_info_date">
              ${message.created_at}
            </div>
          </div>
          <div class="main-chat_messages_message_lower">
            <p class="main-chat_messages_message_text">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main-chat_messages').append(html);
      $('form')[0].reset();
      $('.main-chat_messages').animate({ scrollTop: $('.main-chat_messages')[0].scrollHeight});
      $('.main-chat_form_send_btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
});
});
