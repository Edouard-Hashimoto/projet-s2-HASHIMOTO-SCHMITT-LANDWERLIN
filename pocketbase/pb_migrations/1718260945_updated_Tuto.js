/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e0g6nbqh3tf4ypr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "izgvaub1",
    "name": "img",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e0g6nbqh3tf4ypr")

  // remove
  collection.schema.removeField("izgvaub1")

  return dao.saveCollection(collection)
})
