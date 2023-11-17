const express = require('express');
router = express.Router();
var passwordHash = require('password-hash');
const UserDB = require('../DbModel/user');
 
router.get('/', (req, res) => {
    return res.redirect('/auth/login');
});
 
router.get('/login', function (req, res) {
    if (req.session.loggedIn)
        res.redirect('/dashboard')
    else res.render('login', { query: req.query })
});

router.get('/signup', function (req, res) {
    if (req.session.loggedIn)
        res.redirect('/dashboard')
    else res.render('register', { query: req.query })
});
 
router.get('/logout', (req, res) => {
    req.session.destroy((err) => { })
    res.redirect('/auth/login');
})

router.post('/signup', async function (req, res, next) {
    if (req.body.password != req.body.cpassword) return res.redirect('/auth/login?path=signup&err=passnotmatch');
    const user = await UserDB.findOne({ "Email": req.body.email });
    if (user) return res.redirect('/auth/login?err=userexist');
    next();
}, (req, res) => {
    const newUser = new UserDB({
        "Email": req.body.email,
        "Password": passwordHash.generate(req.body.password),
        "FirstName": req.body.firstname,
        "LastName": req.body.lastname,
        "Role": "admin"
    });
    newUser.save((err, user) => {
        if (err) return res.redirect('/auth/login?path=signup&err=dberror');
        req.session.loggedIn = true
        req.session.username = user.FirstName;
        req.session.user = user;
        res.redirect('/dashboard');
    })
})

router.post('/login', async function (req, res, next) {
    const user = await UserDB.findOne({"Email": req.body.email});
    if (user) {
        if(passwordHash.verify(req.body.password, user.Password)){
            res.locals.username = user.FirstName;
            res.locals.user = user;
            next();
        } else res.redirect('/auth/login?err=failed');
    } else {
        res.redirect('/auth/login?err=failed');
    }
}, (req, res) => {
    req.session.loggedIn = true
    req.session.username = res.locals.username;
    req.session.user = res.locals.user;

    if(req.session.user.Role == 'student') res.redirect('/dashboard/student');
    else if(req.session.user.Role == 'teacher') res.redirect('/dashboard/teacher');
    else if(req.session.user.Role == 'hod') res.redirect('/dashboard/hod');
    else if(req.session.user.Role == 'admin') res.redirect('/dashboard');
    else res.redirect('/dashboard/student');
})
 
module.exports = router;