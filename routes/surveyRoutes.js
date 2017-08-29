const mongoose = require('mongoose'); 
const requireLogin = require('../middlewares/requireLogin'); 
const requiredCredits = require('../middlewares/requiredCredits');
const Mailer = require('../services/Mailer'); 

const surveyTemplate = require('../services/emailTemplates/surveyTemplate'); 

const Survey = mongoose.model('surveys'); 

module.exports = (app) => {

    app.post('./api/surveys', requireLogin, requiredCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body; 


        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(a => ({email: a.trim()})),
            _user: req.user.id,
            dateSent: Date.now()

        }); 

        const mailer = new Mailer(survey, surveyTemplate(survey));
        await mailer.send(); 
        await survey.save();
        req.user.credits -= 1;
        const user = await req.user.save();

        res.send(user); 
    }); 

};