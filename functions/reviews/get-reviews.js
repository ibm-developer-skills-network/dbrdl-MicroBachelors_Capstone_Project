const logger = require('pino')();
/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
function main(params) {
  return {
    reviews: [
      {
        "id": 1,
        "name": "Berkly Shepley",
        "dealership": 14,
        "review": "Total grid-enabled service-desk",
        "purchase": true,
        "purchase_date": "07/11/2020",
        "car_make": "Audi",
        "car_model": "A6",
        "car_year": 2010
      },
      {
        "id": 2,
        "name": "Gwenora Zettoi",
        "dealership": 14,
        "review": "Future-proofed foreground capability",
        "purchase": true,
        "purchase_date": "09/17/2020",
        "car_make": "Pontiac",
        "car_model": "Firebird",
        "car_year": 1995
      }
    ]
  };
}

exports.main = main;
