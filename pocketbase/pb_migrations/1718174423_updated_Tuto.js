/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e0g6nbqh3tf4ypr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ebbsomhl",
    "name": "file",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e0g6nbqh3tf4ypr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ebbsomhl",
    "name": "img",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
