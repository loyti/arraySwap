var playerFavs = ["Ted", "Pedro", "Wakefield", "Yastrzemski", "Bogaerts", 8, 9, 2];
var playerNums = [];
function getPlayerNumbers () {
    document.write();
    for (var i = 0; i < playerFavs.length; i++){
        if (typeof(playerFavs[i] === "number")){
            playerNums.push(i);
            document.write("<p class=\"number\">This is number: " + playerFavs[i] + "</p>")
            document.write("<p> This is the number" + playerNum[i] + "</p>");
        } else { 
            document.write("<p class=\"number\">Meet " + playerFavs[i] + ", he is one of my personal favorites.</p>")
        }
    }
}
getPlayerNumbers();
