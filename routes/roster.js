var express = require('express');
var router = express.Router();

var associate_controller = require('../controllers/associateController');

router.get('/', associate_controller.index);

router.get('/associate/create', associate_controller.associate_create_get);

router.get('/associates', associate_controller.associate_list);

router.get('/associate/:id', associate_controller.associate_detail);

router.post('/associate/create', associate_controller.associate_create_post);

router.get('/associate/:id/delete', associate_controller.associate_delete_get);

router.post('/associate/:id/delete', associate_controller.associate_delete_post);

router.get('/associate/:id/update', associate_controller.associate_update_get);

router.post('/associate/:id/update', associate_controller.associate_update_post);

module.exports = router;
