const cleaner = require("knex-cleaner");

exports.seed = function(knex) {
  return cleaner.clean(knex).then( ()=>{
    console.log("Your database is now Clean!!!!!!")
  })
};
