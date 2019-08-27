const cleaner = require("knex-cleaner");

let options = {
  mode: 'delete', // Valid options 'truncate', 'delete'
  restartIdentity: true // Used to tell PostgresSQL to reset the ID counter
}

exports.seed = function(knex, options) {

  return cleaner.clean(knex).then( ()=>{
    console.log("Your database is now Clean!!!!!!")
  })
};
