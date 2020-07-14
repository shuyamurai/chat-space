function buildHTML(message){
  // 「もしメッセージに画像が含まれていたら」という条件式
  if (message.image) {
    let html = //メッセージに画像が含まれる場合のHTMLを作る
      `<div class="chat-main__message-list">
        <div class="chat-main__message-list__box">
          <div class="chat-main__message-list__box__text">
            <div class="chat-main__message-list__box__text__name">
              ${message.user_name}
            </div>
            <div class="chat-main__message-list__box__text__time">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-main__message-list__box__message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="/uploads/message/image/3/staff2.jpg">
          </div>
        </div>
      </div>`
      return html;
  } else {
    let html = //メッセージに画像が含まれない場合のHTMLを作る
      `<div class="chat-main__message-list">
        <div class="chat-main__message-list__box">
          <div class="chat-main__message-list__box__text">
            <div class="chat-main__message-list__box__text__name">
              ${message.user_name}
            </div>
            <div class="chat-main__message-list__box__text__time">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-main__message-list__box__message">
            <p class="Message__content">
              ${message.content}
            </p>
          </div>
        </div>
      </div>`
      return html;
    };
  }

$(function(){
  $('.chat-main__message-form__form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.chat-main__message-list').append(html);    
      $('form')[0].reset();
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $('.chat-main__message-form__form__send').prop('disabled', false);  
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});