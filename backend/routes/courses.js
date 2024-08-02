// routes/courses.js

const express = require('express');
const auth = require('../middleware/auth');
const Course = require('../models/Course');

const router = express.Router();

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Enroll in a course
router.post('/enroll', auth, async (req, res) => {
  try {
    const { courseId } = req.body;

    let course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ msg: 'Course not found' });
    }

    // Check if user is already enrolled
    if (course.students.includes(req.user.id)) {
      return res.status(400).json({ msg: 'User already enrolled' });
    }

    course.students.push(req.user.id);
    await course.save();

    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
