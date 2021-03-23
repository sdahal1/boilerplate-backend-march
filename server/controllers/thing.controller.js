const Thing = require('../models/thing.model')

module.exports.findAllThings = (req, res)=>{
    Thing.find()
        .then(allthings => {
            console.log("TRYIING TO FIND ALL THE Thangggsss")
            res.json({results: allthings}) 
        })
        .catch(err => res.json(err))
}

module.exports.createOneThing = (req,res)=>{
    Thing.create(req.body)
        .then(newlyCreatedThanggg=> res.json({results: newlyCreatedThanggg}))
        .catch(err => res.json(err))
}


module.exports.findOneThing = (req,res)=>{
   Thing.findOne({_id: req.params.thingid})
        .then(oneThing => res.json({results: oneThing}))
        .catch(err => res.json(err))
}

module.exports.updateOneThing = (req,res)=>{
    Thing.findOneAndUpdate(
        {_id: req.params.thingid}, 
        req.body,
        {new:true, runValidators:true
        })
        .then(updatedThing => res.json({results: updatedThing}))
        .catch(err => res.json(err))
}


module.exports.deleteThing = (req,res)=>{
    Thing.deleteOne({_id: req.params.thingid})
        .then(deletedResult => res.json({results: deletedResult})  )
        .catch(err => res.json(err))
}
