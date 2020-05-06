function play(idPlayer, control) {
    var player = document.querySelector('#' + idPlayer);

    if (player.paused) {
        player.play();

    } else {
        player.pause();
        
    }
}

function resume(idPlayer) {
    var player = document.querySelector('#' + idPlayer);

    player.currentTime = 0;
    player.pause();
}
