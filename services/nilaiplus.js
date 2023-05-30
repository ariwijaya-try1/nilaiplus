const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getSiswa(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * 
    FROM siswa LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}
async function addSiswa(siswa){
  const result = await db.query(
    `INSERT INTO siswa 
    (nama_siswa, nis, id_wali) 
    VALUES 
    ("${siswa.nama_siswa}", ${siswa.nis}, ${siswa.id_wali})`
  );

  let message = 'Error in inserting siswa';

  if (result.affectedRows) {
    message = 'siswa inserted successfully';
  }

  return {message};
}

async function updateSiswa(id_siswa, siswa){
  const result = await db.query(
    `UPDATE siswa 
    SET nama_siswa="${siswa.nama_siswa}", nis=${siswa.nis}, id_wali=${siswa.id_wali}
    WHERE id_siswa=${id_siswa}` 
  );

  let message = 'Error in updating programming language';

  if (result.affectedRows) {
    message = 'Programming language updated successfully';
  }

  return {message};
}

async function removeSiswa(id){
  const result = await db.query(
    `DELETE FROM siswa WHERE id_siswa=${id}`
  );

  let message = 'Error in deleting siswa';

  if (result.affectedRows) {
    message = 'Data Siswa deleted successfully';
  }

  return {message};
}

module.exports = {
    getSiswa,
	addSiswa,
	updateSiswa,
	removeSiswa
	
};