const requireLogin = require('../middlewares/requireLogin'); 
const requiredCredits = require('../middlewares/requiredCredits'); 

module.exports = (app) => {

    app.post('./api/surveys', requireLogin, requiredCredits, (req, res) => {
        const { title, subject, body, recipients } = req.body; 
    }); 

};