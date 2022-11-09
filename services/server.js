const express = require('express');
const cors = require('cors');
const routerApi = require( "../routes" );
const {config} = require('../config/config')

class Server {
  constructor() {

    this.app = express();
    this.middleware();
    this.app.use(express.json());
    this.routes();

  }
  middleware() {

    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: false }));

  }
  routes() {

    routerApi(this.app);
  }

  listen () {

    this.app.listen(config.app.port, async () => {
      await  sequelizeSGA.authenticate().then(() => {
          console.log(`Server port: ${config.app.port} - Connected to database ${config.db.db}`);
        }).catch(err =>{
        console.log({error: 'Error trying to connect to database', err});
      })
    })
  }
}
module.exports = Server;
