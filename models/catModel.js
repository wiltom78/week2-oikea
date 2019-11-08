'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getCat = async (id) => {
  try {
    const [rows] = await promisePool.execute('SELECT * FROM wop_cat WHERE cat_id = ?;', [id]);
    return rows;
  } catch (e) {
    console.log('error', e.message);
    return ({error:'voisiko tää jo toimia?'})
  }
};
const getAllCats = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM wop_cat');
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};

module.exports = {
  getAllCats,
  getCat
};
