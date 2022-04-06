
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var comp_choice = Math.floor(Math.random() * 26);
 

document.body.addEventListener("keydown", process_press);
function process_press()
{
  if(alphabet[comp_choice] === event.key)
  {
    const message_node = document.createTextNode("SECRET KEY PRESSED " + alphabet[comp_choice]);
    var message_p =  document.createElement("p");
    message_p.appendChild(message_node);
    

    var body_tag = document.querySelector("body");
    body_tag.appendChild(message_p);

     comp_choice = Math.floor(Math.random() * 26);
    
  }
  
   
}

