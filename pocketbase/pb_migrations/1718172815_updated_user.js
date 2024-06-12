/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1rghxt1ua3lvkx")

  collection.name = "utilisateur"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1rghxt1ua3lvkx")

  collection.name = "user"

  return dao.saveCollection(collection)
})
