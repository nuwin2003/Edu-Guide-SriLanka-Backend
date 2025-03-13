const express = require('express');
const { signIn, signUp } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/sign-in', signIn);
router.post('/sign-up', signUp);

router.get('/dashboard', protect, (req, res) => {
    res.status(200).json({ message: `Welcome, User: ${req.user.email}` });
});

module.exports = router;