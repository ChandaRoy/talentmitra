var express = require('express'),
    router = express.Router();
var mongoose = require('mongoose'),
    User = require('../models/user.js');
var nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
var bCrypt = require('bcrypt-nodejs');
var cred = require('../config/email-config');

const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    secure: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
        ciphers: 'SSLv3'
    },
    requireTLS: true,
    port: 465,
    debug: true,
    auth: {
        user: cred.email,
        pass: cred.pwd
    }
});


module.exports = function (passport) {

    //sends successful login state back to angular
    router.get('/success', function (req, res) {
        console.log(req.user);
        res.send({ error: null });
    });

    //sends failure login state back to angular
    router.get('/failure', function (req, res) {
        res.send({ error: "PASSWORD_ERR" });
    });
    router.get('/regfailure', function (req, res) {
        res.status(409).json({
            status: false,
            error: "User already exists",
            user: null
          })
    });



    router.post('/login', function (req, res, next) {
        passport.authenticate('local-login', { session: false }, (err, user, info) => {
            if (err || !user) {
                return res.status(400).json({
                    message: 'Something is not right',
                    user: user
                });
            }
            req.login(user, { session: false }, (err) => {
                if (err) {
                    res.send(err);
                }
                // generate a signed son web token with the contents of user object and return it in the response

                user = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    photo: user.photo,
                    aboutMe: user.aboutMe,
                    company: user.company,
                    id: user._id
                };
                const token = jwt.sign(user, 'techbirdies');
                return res.json({ token });
            });
        })(req, res);
    });

    //sign up
    router.use('/register', function (req, res, next) {
        console.log(req.body);
        console.log(req.body.user);
        next();
    });



    router.post('/register', passport.authenticate('sign-up', {
        failureRedirect: '/auth/regfailure'
    }), function (req, res) {
        userDetails = {
            firstName: req.user.firstName,
            lastName: req.user.lastName,
            email: req.user.email,
            photo: req.user.photo
        };
        console.log(userDetails);
        res.send({ "user": userDetails });
    });

    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/index.html');
    });
    router.get('/home', function (req, res) { });


    //login using facebook
    router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

    router.get('/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/home.html',
            failureRedirect: '/index.html'
        }));

    //login using google
    router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

    router.get('/google/callback',
        passport.authenticate('google', {
            successRedirect: '/home.html',
            failureRedirect: '/index.html'
        }));

    router.post('/register', passport.authenticate('sign-up', {
        successRedirect: '/auth/success',
        failureRedirect: '/auth/regfailure'
    }));
    // this is for resetting the password
    router.post('/resetPassword', function (req, res, next) {
        User.findOne({
            'email': req.body.email
        }).exec(function (err, user) {
            if (err) {
                console.log("In data base error ", err);
                res.send({ error: 'Something went wrong!!' })
            } else if (!user) {
                res.send({ error: 'User not found!' })
            } else {

                console.log("Everything's fine");
                user.password = createHash(req.body.password);
                user.save();

                res.send({});
                // next();
            }


        })

    });
    //verify new user starts
    router.post('/verifycode', function (req, res, next) {
        var email = req.body.email;
        var code = Math.floor(Math.random() * 90000) + 10000;
        User.findOne({ 'email': req.body.email }).exec(function (err, user) {
            if (err) {
                res.send({ error: "Something went wrong. Please try again." });
            } else if (user) {

                res.send({ error: "EMAIL_ERR" })
            } else {


                var mailOption = {
                    from: cred.from,
                    to: email,
                    subject: 'Welcome to DigiSkill Studio',
                    text: "Your verification code is " + code + "Enter this code to register.",
                    html: '<b>DigiSkill Studio </b>helps you to manage your project in better way.<h2>Verification code for registering to DigiSkill Studio </h2> Verification code :<b>' + code + '</b> <br><b>Enter this code in DigiSkill Studio App to register.</b>'
                }
                transporter.sendMail(mailOption, function (error, info) {
                    if (error) {
                        console.log(error);
                        res.redirect('/index.html')
                    } else {
                        console.log("success");
                        res.send({ code: code });
                    }
                });

            } //main else

        });


    });
    //verify new user ends
    //this is for forgot password
    router.post('/forgotpass', function (req, res, next) {
        var email = req.body.email;
        User.findOne({
            'email': req.body.email
        }).exec(function (err, user) {
            if (err) {
                res.send({ error: "Something went wrong. Please try again." });
            } else if (!user) {
                res.send({ error: "User not found. Please sign-up." });

            } else {
                var code = req.body.code;
                var content = `<title>Reset Password Email Template</title>
                <meta name="description" content="Reset Password Email Template.">
                <style type="text/css">
                    a:hover {text-decoration: underline !important;}
                </style>
            </head>
            
            <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
                <!--100% body table-->
                <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
                    style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
                    <tr>
                        <td>
                            <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                                align="center" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="height:80px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="text-align:center;">
                                      <a href="http://www.digiskillstudio.com" title="logo" target="_blank">
                                        <img width="60" src="https://res.cloudinary.com/techbirdies/image/upload/v1645979749/dslogo_kxmxpu.png" title="logo" alt="logo">
                                      </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:20px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>
                                        <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                            style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                            <tr>
                                                <td style="height:40px;">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td style="padding:0 35px;">
                                                    <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">You have
                                                        requested to reset your password</h1>
                                                    <span
                                                        style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                                    <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                        We cannot simply send you your old password. A unique code to reset your
                                                        password has been generated for you. To reset your password, enter the
                                                        following code in your app.
                                                    </p>
                                                    <a
                                                        style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">`+ code +`</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="height:40px;">&nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                <tr>
                                    <td style="height:20px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="text-align:center;">
                                        <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>www.digiskillstudio.com</strong></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:80px;">&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>`;

                var mailOption = {
                    from: cred.from,
                    to: email,
                    subject: 'Digiskill Studio Password Reset',
                    text: "We heard you need a password reset. Code is: " + code + "\nEnter this code to reset your password.",
                    html: content
                    // html: '<h2>Hello,</h2><h3>We heard you need a password reset. </h3><b>Enter this code to reset your password:' + code + '</b> '
                }
                transporter.sendMail(mailOption, function (error, info) {
                    if (error) {
                        console.log(error);
                        res.json({ 'sendStatus': false });
                    } else {
                        res.json({ 'sendStatus': true });
                    }
                });
            } //end of final else
        })
    });
    //forgot passwords ends here

    var createHash = function (password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };


    return router;

}