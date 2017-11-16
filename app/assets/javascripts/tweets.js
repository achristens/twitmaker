// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('#new_tweet');

  form.addEventListener('submit', function (e){
    e.preventDefault();

    $.ajax({
      url: form.getAttribute('action'),
      method: form.getAttribute('method'),
      dataType: 'json',
      data: $(form).serialize()
    }).done(function(data){
      console.log(data);
      //HTML: $('#tweets').append(data)
      var listItem = document.createElement('li');
      var p        = document.createElement('p');
      p.innerText  = data.message;
      var time     = document.createElement('time');
      time.innerHTML   = data.created_at;
      listItem.className = "tweet"
      listItem.append(p)
      listItem.append(time)

      var tweetList = document.querySelector('.tweets');
      tweetList.insertBefore(listItem, tweetList.firstChild);
      // tweetList.append(listItem);
    });
  });

});
