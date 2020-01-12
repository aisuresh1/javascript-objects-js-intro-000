var playlist = {};

function updatePlaylist(playlist, artist, title){
  return Object.assign({}, playlist, {[artist]: title })
}