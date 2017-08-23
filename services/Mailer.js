const sendgrid = require('sendgrid');
const helper = sendgrid.mail; 
const keys = require('../config/keys'); 

class Mailer extends helper.Mail {
    constructor({subject, recipients}, content){

        super(); 

        this.sgApi = ssendgrid(keys.sendGridKey); 
        this.from_email = new helper.Email('no-relply@emaily.com'); 
        this.subject = subject;
        this.body = new helper.Content('text/html', content); 
        this.recipients = this.formatAddresses(recipients); 

        this.addContent(this.body); //function from Mail 
        this.addClickTracking(); 
        this.addRecipients(); 
    }       

    formatAddresses(recipients){
        return recipients.map(({email}) => {
            return new helper.Email(email); 
        })
    }

    addClickTracking(){
        const trackingSetting = new helper.trackingSetting();
        const clickTricking = new helper.ClickTracking(true, true); 

        trackingSetting.setClickTracking(clickTricking); 
        this.addTrackingSettings(trackingSetting); 
    }

    addRecipients() {
        const personalize = new helper.Personalization(); 
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });
        this.addPersonalization(personalize); //functionin mail class 
    }

    async send() {
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON
        });

        const response = await this.sgApi.API(request); 
        return resposne; 
    }
}

module.exports = Mailer; 