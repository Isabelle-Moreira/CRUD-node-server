const itemModel = require('../models/item')

async function listItems(){
  const items = await itemModel.findAll();
  return items;
}

async function createItem(item){
    return await itemModel.create(item);
}

async function getItem(id_parame){
  return await itemModel.findOne({where: {id:`${id_parame}`}})
}



async function deleteItem(id_parame){
  await itemModel.destroy({where: {id:`${id_parame}`}})
}

async function UpdateItem(id_parame){
   return await itemModel.update({where: {id:`${id_parame}`}})
}






module.exports = {createItem, getItem, listItems, deleteItem}