const express = require('express');
const router = express.Router();
const { addCourse, getCourses } = require('../controllers/courseController');
const auth = require('../middleware/authMiddleware');

router.post('/add', auth, addCourse);
router.get('/', getCourses);

module.exports = router;
