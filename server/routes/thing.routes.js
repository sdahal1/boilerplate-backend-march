const ThingController = require("../controllers/thing.controller")

module.exports = app => {
    app.get("/api/things/all", ThingController.findAllThings)
    app.post("/api/things/create", ThingController.createOneThing)
    app.get("/api/things/:thingid", ThingController.findOneThing)
    app.put("/api/things/update/:thingid", ThingController.updateOneThing)
    app.delete("/api/things/delete/:thingid", ThingController.deleteThing)
}
