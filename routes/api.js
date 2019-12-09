
'use strict';

const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// Cogemos las apps de la base de datos
router.get('/apps', async (req, res, next) => {
  try {
    const listApps = await Application.find();
    res.status(200).json({ listApps });
  } catch (error) {
    next(error);
  }
});
// Cogemos una app
router.get('/apps/:id/detail', async (req, res, next) => {
  const { id } = req.params;
  try {
    const detail = await Application.findById(id);
    res.status(200).json(detail);
  } catch (error) {
    next(error);
  }
});
// Creamos nuevas apps
router.post('/apps/new', async (req, res, next) => {
  const newApp = req.body;
  try {
    const createdApp = await Application.create(newApp);
    res.status(200).json(createdApp);
  } catch (error) {
    next(error);
  }
});
// Modificamos apps ya existentes
router.put('/apps/:id/update', async (req, res, next) => {
  const { id } = req.params;
  const appUpadated = req.body;
  try {
    const updatedApp = await Application.findByIdAndUpdate(id, appUpadated, { new: true });
    res.status(200).json(updatedApp);
  } catch (error) {
    next(error);
  }
});
// Eliminamos apps de la base de datos
router.delete('/apps/:id/delete', async (req, res, next) => {
  const { id } = req.params;
  try {
    await Application.findByIdAndDelete(id);
    res.status(200).json({ message: 'App deleted' });
  } catch (error) {
    next(error);
  }
});
// Buscar app por nombre
router.post('/apps/search', async (req, res, next) => {
  try {
    const query = {};
    // for (const key in req.body) {
    //   if(req.body[key]) {
    //     query[key] = ["precio"].includes(key) ? {$lte: req.body[key]} : req.body[key]
    //   }
    // }
    const name = await Application.find(query);
    res.status(200).json(name);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
