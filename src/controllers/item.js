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

async function UpdateItem(id_param, itemAtalualizado){

  const existeItem = await itemModel.findOne({ where: { id: `${id_param}` } });

  if (!existeItem) {
    throw new Error(`Item com ID ${id_param} nao foi encontrado`);
  }

  await itemModel.update(itemAtalualizado, { where: { id: `${id_param}` } });

  const atualizado = await itemModel.findOne({ where: { id: `${id_param}` } });

  return atualizado;
}





module.exports = {createItem, getItem, listItems, deleteItem,UpdateItem}