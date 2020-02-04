const express = require('express');
const ArticuleServices  = require ('../services/articule');

function articuleApi(app) {
  const router = express.Router();
  app.use("/api/articule",router);

  const articuleServices = new  ArticuleServices();

  router.get("/",async function (req, res, next){
    const {tags} = req.query;
    try {
      const articules = await articuleServices.getArticules({tags});

      res.status(200).json({
        data: articules ,
        message:'articules up',
      })

    } catch (error) {
        next(error)
    }
  }
  )

  router.get("/:articuleId",async function (req, res, next){
    const {articuleId} = req.params;
    try {
      const articule = await articuleServices.getArticule({articuleId});

      res.status(200).json({
        data: articule ,
        message:'articule listed',
      })

    } catch (error) {
        next(error)
    }
  }
  )

  router.post("/",async function (req, res, next){
    const {body:articule} = req;
    try {
      const createArticuleId = await articuleServices.createArticule({articule});

      res.status(201).json({
        data: createArticuleId ,
        message:'articule created',
      })
    } catch (error) {
        next(error)
    }
  }
  )

  router.patch("/:articuleId",async function (req, res, next){
    const {articuleId} = req.params;
    const {body:articule} = req;

    try {
      const patchedarticule = await articuleServices.patchedArticule({articuleId,articule});

      res.status(200).json({
        data: patchedarticule ,
        message:'articule patched',
      })

    } catch (error) {
        next(error)
    }
  }
  )


  router.put("/:articuleId",async function (req, res, next){
    const {articuleId} = req.params;
    const {body:articule} = req;
    try {
      const updatedArticuleId = await articuleServices.updatedArticule({articuleId,articule});

      res.status(200).json({
        data: updatedArticuleId ,
        message:'articule updated',
      })

    } catch (error) {
        next(error)
    }
  }
  )

  router.delete("/:articuleId",async function (req, res, next){
    const {articuleId} = req.params;
    try {
      const deletedArticule = await articuleServices.deletedArticule({articuleId})

      res.status(200).json({
        data: deletedArticule ,
        message:'articule deleted',
      })

    } catch (error) {
        next(error)
    }
  }
  )


}

module.exports = articuleApi;