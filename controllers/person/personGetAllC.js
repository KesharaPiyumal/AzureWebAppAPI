const Person = require('../../models/person');

exports.getAllPersons = (req, res) => {
    Person.findAll({
    order: [['id', 'DESC']]
  })
    .then(usersList => {
      if (usersList.length > 0) {
        res.status(200).json({
          data: usersList,
          message: 'Get all persons successfully!',
          statusCode: 200
        });
      } else {
        res.status(200).json({
          data: [],
          message: 'No Entries Found',
          statusCode: 200
        });
      }
    })
    .catch(e => {
      log.error(e);
      return res.status(200).json({
        data: null,
        message: 'Get all persons list DB error!',
        statusCode: 501
      });
    });
};