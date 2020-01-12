var playlist = {AJR: 'Three-Thirty'};

function updatePlaylist(playlist, artist, title){
  return Object.assign(playlist, {[artist]: title })
}
