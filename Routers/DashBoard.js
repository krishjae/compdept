const express = require('express');
router = express.Router();


router.get('/', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'admin') res.render('main', {user: req.session.user});
        else res.render('error');
        
    }
});


router.get('/teacher', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'teacher') res.render('teacher-dashboard', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/teacher/notes', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'teacher') res.render('notes', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/student/noteview', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'student') res.render('noteview', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/teacher/marklist', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'teacher') res.render('marklist', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/student/notes', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'student') res.render('notes', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/teacher/assignment', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'teacher') res.render('assignment', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/teacher/viewassignment', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'teacher') res.render('assignmentview', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/student/studassignment', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'student') res.render('assignment', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/teacher/list', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'teacher') res.render('teachers', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/hod/teacherlist', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'hod') res.render('teachers', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/teacher/attendance', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'teacher') res.render('attendance', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/hod/studentattd', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'hod') res.render('viewattendance', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/teacher/studentlist', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'teacher') res.render('students', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/hod/studentlist', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'hod') res.render('students', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/hod/studentedit', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'hod') res.render('edit-student', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/hod/teacheredit', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'hod') res.render('edit-teacher', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/admin/studentedit', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'admin') res.render('edit-student', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/admin/teacheredit', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'admin') res.render('edit-teacher', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/student', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'student') res.render('student-dashboard', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/hod', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'hod') res.render('hod-dashboard', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/hod/subject', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'hod') res.render('subject-choose', {user: req.session.user})
        else res.render('error');
    }
});
router.get('student/subjects', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'student') res.render('subjects', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/student/list', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'student') res.render('students', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/student/markview', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'student') res.render('markview', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/hod/markview', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'hod') res.render('markview', {user: req.session.user})
        else res.render('error');
    }
});
router.get('/student/list', function (req, res) {
    if (!req.session.loggedIn)
        res.redirect('/auth/login')
    else {
        if(req.session.user.Role == 'teacher') res.render('students', {user: req.session.user})
        else res.render('error');
    }
});
module.exports = router;