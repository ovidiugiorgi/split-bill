const express = require('express');

const router = express.Router();

const BillController = require('../../controllers/bill.controller');

router.get('/', BillController.getBills);
router.post('/', BillController.createBill);

module.exports = router;