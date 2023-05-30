const express = require('express');
const router = express.Router();
const nilaipluss = require('../services/nilaiplus');

/* GET siswa. */
router.get('/getSiswa', async function(req, res, next) {
  try {
    res.json(await nilaipluss.getSiswa(req.query.page));
  } catch (err) {
    console.error(`Error while getting Data Siswa `, err.message);
    next(err);
  }
});

/* POST programming language */
router.post('/addSiswa', async function(req, res, next) {
  try {
    res.json(await nilaipluss.addSiswa(req.body));
  } catch (err) {
    console.error(`Error while creating Data Siswa`, err.message);
    next(err);
  }
});

/* PUT programming language */
router.put('/updateSiswa/:id', async function(req, res, next) {
  try {
    res.json(await nilaipluss.updateSiswa(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating Data Siswa`, err.message);
    next(err);
  }
});

/* DELETE programming language */
router.delete('/removeSiswa/:id', async function(req, res, next) {
  try {
    res.json(await nilaipluss.removeSiswa(req.params.id));
  } catch (err) {
    console.error(`Error while deleting Data Siswa`, err.message);
    next(err);
  }
});

module.exports = router;
