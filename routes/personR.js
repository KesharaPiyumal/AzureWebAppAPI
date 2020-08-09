const express = require('express');
const router = express.Router();
const getAllPersonC = require('../controllers/person/personGetAllC');
// const checkToken = require('../../auth/checkToken');

router.get(
  '/',
  (req, res, next) => {
    next();
  },
  getAllPersonC.getAllPersons
);


module.exports = router;