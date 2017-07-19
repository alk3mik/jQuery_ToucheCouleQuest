// Met à jour le message affiché à l´adversaire à chaque nouvelle
// lettre saisie dans l´input ´Mon nom´

$(document).ready(function () {
	
  var boats = {
  	boat1: ['b4', 'b5', 'b6'],
    boat2: ['d9', 'e9', 'f9']
  };
  var boatsNum = Object.keys(boats).length;
  var len1 = 0;
  var len2 = 0;
  var myName = "";
  var hitCase = "";
  var win = false;
  
	$("#moi").keyup(function(event) {
  	myName = $("#moi").val();
  	$("#megaphone").text(promptMessage(myName));
	});

	$('#canon').on('keyup', function(event) {
  
		if (event.keyCode === 13) {
  		hitCase = $("#canon").val().toLowerCase();
    
     	$('#' + hitCase).css("background-color", "red");
     	
      if ($('#' + hitCase).text() === "X") {
      	
      	if (boats.boat1.indexOf(hitCase) > -1) {
        
        	len1++;
          if (len1 === boats.boat1.length) {
          	if (len2 === boats.boat2.length) {
            	win = true;
            	$('#history').append(hitCase + " - WIN - " + myName + "<br>");
          	} else {
          		$('#history').append(hitCase + " - COULE - " + myName + "<br>");
            }
          } else {
          	$('#history').append(hitCase + " - TOUCHE - " + myName + "<br>");
          }
          
        } else {
        
        	len2++;
          if (len2 === boats.boat2.length) {
          	if (len1 === boats.boat1.length) {
            	win = true;
            	$('#history').append(hitCase + " - WIN - " + myName + "<br>");
            } else {
          		$('#history').append(hitCase + " - COULE - " + myName + "<br>");
            }
          } else {
          	$('#history').append(hitCase + " - TOUCHE - " + myName + "<br>");
          }
 
        }

     	} else {
     		$('#history').append(hitCase + " - PLOUF - " + myName + "<br>");
     	}
  	}
	});
  
  $('div#no-mans-land').click(function () {
  	if (win) {
    	$('div#no-mans-land').html("<code>NO MAN'S LAND</code>");
    	$('div#no-mans-land').css("background", 'url("https://s1.postimg.org/hcfleh18f/giphy-downsized.gif") no-repeat left 100%');
    } else {
    	$('div#no-mans-land').html("<code>This is not a NO MAN'S LAND... yet!</code>");
    }
  });
  
});

// Génère le message diffusé à l´adversaire
function promptMessage(playerName) {
 	if (playerName.length > 0) {
   	return ">> " + playerName + " va attaquer en ...";
 	} else {
   	return "> En attente d'un joueur";
 	}
}