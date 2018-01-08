var apiKey = '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';
var newsletterSuccess = document.getElementById('newsletter-success');
var newsletterError = document.getElementById('newsletter-error');

var newsletter = document.getElementById('newsletter-form');

var ambassadorSuccess = document.getElementById('ambassador-success');
var ambassadorError = document.getElementById('ambassador-error');

var ambassador = document.getElementById('mc-embedded-subscribe-form');

newsletter.addEventListener('submit', function(event) {
  event.preventDefault();

  var email = document.getElementById('newsletter-email');
  fetch('https://api.sendgrid.com/v3/contactdb/recipients', {
    method: 'POST',
    body: JSON.stringify(
      [
        {
          email: email.value,
        },
      ]
    ),
    headers: {
      'Authorization': 'Bearer ' + apiKey,
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
    return response.json();
  }).then(function(response) {
    newsletterSuccess.setAttribute('style', 'display: block');
    newsletterError.setAttribute('style', '');
  }).catch(function() {
    newsletterError.setAttribute('style', 'display: block');
    newsletterSuccess.setAttribute('style', '');
  })
});

ambassador.addEventListener('submit', function(event) {
  event.preventDefault();

  var email = document.getElementById('ambassador-email');
  var name = document.getElementById('ambassador-name');
  var phone = document.getElementById('ambassador-phone');
  fetch('https://api.sendgrid.com/v3/contactdb/recipients', {
    method: 'POST',
    body: JSON.stringify(
      [
        {
          email: email.value,
          first_name: name.value,
          phone: phone.value,
          ambassador: 1,
        },
      ]
    ),
    headers: {
      'Authorization': 'Bearer ' + apiKey,
      'Content-Type': 'application/json',
    },
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    ambassadorSuccess.setAttribute('style', 'display: block');
    ambassadorError.setAttribute('style', '');
  }).catch(function () {
    ambassadorError.setAttribute('style', 'display: block');
    ambassadorSuccess.setAttribute('style', '');
  })
})