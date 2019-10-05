var Associate = require('../models/associate');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var async = require('async');

exports.index = function(req, res) {
    res.render('index', {});
};

exports.associate_list = function(req, res, next) {
    Associate.find()
    .exec(function (err, list_associates) {
        if (err) { return next(err); }
        res.render('associate_list', {associate_list: list_associates });
    });
};

exports.associate_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: associate detail: ' + req.params.id);
};

exports.associate_create_get = function(req, res, next) {
    res.render('associate_form', {});
};

exports.associate_create_post = [

    // Validate fields.
    body('name').isLength({ min: 1 }).trim().withMessage('Name must be specified.'),
    body('capacity').isLength({ min: 1 }).trim().withMessage('Capacity must be specified.'),
    body('shareholder').isLength({ min: 1 }).trim().withMessage('Shareholder must be specified.'),
        
    // Sanitize fields.
    sanitizeBody('name').escape(),
    sanitizeBody('capacity').escape(),
    sanitizeBody('shareholder').escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('associate_form', { title: 'ASSOCIATE CAPACITY', associate: req.body, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Create an Author object with escaped and trimmed data.
            var associate = new Associate(
                {
                    name: req.body.name,
                    email: req.body.email,
                    capacity: req.body.capacity,
                    shareholder: req.body.shareholder,
                });
            associate.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new author record.
                res.render('success');
            });
        }
    }
];

exports.associate_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: associate delete GET');
};

exports.associate_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: associate delete POST');
};

exports.associate_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: associate update GET');
};

exports.associate_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: associate update POST');
};
