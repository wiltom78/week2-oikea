'use strict';
// catController
const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
  res.json(cats);
};
const cat_get = (req, res) => {
  const cat = cats.filter((kissa) =>{
    if(kissa.id === req.params.id){
      return kissa;
    }
  });
  const cat_list_get = async (req, res) => {
    const cats = await catModel.getAllCats();
    res.json(cats);
  };

  res.json(cat[0]);
};

module.exports = {
  cat_list_get, cat_get,
};