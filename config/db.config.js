
//LOCAL SETTINGS
const LOCALUSER = "root5"; // Fedora user
const LOCALPASS = "pass"; // Fedora pass
const IP = "172.16.10.48"; // Local IP Fedora
const PORT = "27017"; // Mongo Compass Port
const LOCALDB = "movies_db"; //Mongo Compass database

//REMOTE SETTINGS (MONGO ATLAS)
const ATLASUSER = "George"; // Atlas username
const ATLASPASS = "G60183Trex**"; // Atlas password
const ATLASDB = "myFirstDatabase"; //Nombre base de datos Atlas

module.exports = {

  // URL Local host
  url: `mongodb://${LOCALUSER}:${LOCALPASS}@${IP}:${PORT}/${LOCALDB}?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`,

  // URL Heroku + Atlas
  url: `mongodb+srv://${ATLASUSER}:${ATLASPASS}@notflix.f5w6h.mongodb.net/${ATLASDB}?retryWrites=true&w=majority`

};

/*

otras ips:

ip clase: 172.16.11.65
ip clase: 172.16.10.48

ip casa: 192.168.1.55

*/