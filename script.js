  console.log(create_random_string(8))

function create_random_string(string_length){
  var random_string = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'
  for(var i, i = 0; i < string_length; i++){
    random_string += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return random_string
}
