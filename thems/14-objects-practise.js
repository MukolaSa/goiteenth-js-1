const playlist = {
    name: 'play',
    passward: 128916296,
    stars: 5,
    colour: 'one',
  }
  console.log(playlist);
  
  // подивились що записано у name і colour
  console.log(playlist.name);
  console.log(playlist['colour']);
  
  // перезаписали
  playlist.name = 'logo'
  console.log(playlist); 
  
  // додали
  playlist.time = 'sdd'

// ==================================================================
const username = 'Mango';
const email = 'mango@gmail.com';

const signulData = {
    username: username,
    email: email
};
