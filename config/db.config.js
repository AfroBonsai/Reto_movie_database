
//LOCAL SETTINGS
const LOCAL_USER = "root5"; // Fedora user
const LOCAL_PASS = "pass"; // Fedora pass
const IP = "192.168.1.55"; // Local IP Fedora
// const IP = "172.16.10.48"; // Local IP Fedora
const PORT = "27017"; // Mongo Compass Port
const LOCAL_DB = "movies_db"; //Mongo Compass database

//REMOTE SETTINGS (MONGO ATLAS)
const ATLAS_USER = "George"; // Atlas username
const ATLAS_PASS = "G60183Trex**"; // Atlas password
const ATLAS_DB = "myFirstDatabase"; //Nombre base de datos Atlas

module.exports = {

  // URL Local host
  url: `mongodb://${LOCAL_USER}:${LOCAL_PASS}@${IP}:${PORT}/${LOCAL_DB}?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`,

  // URL Deployed (Heroku + Atlas)
  // url: `mongodb+srv://${ATLAS_USER}:${ATLAS_PASS}@notflix.f5w6h.mongodb.net/${ATLAS_DB}?retryWrites=true&w=majority`,

  // Export IP to index.js to display it on console
  IP
};

// export default {IP}; //experimento ES6

/*

otras ips:

ip clase:
  172.16.11.65
  172.16.10.48

ip casa:
  192.168.1.55

*/