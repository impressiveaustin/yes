document.getElementById('offertoro').src = generate_url(8)

function generate_url(string_length){
  var random_string = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'
  for(var i = 0; i < string_length; i++){
    random_string += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return `https://www.offertoro.com/ifr/show/24707/${random_string}/12471`
}
