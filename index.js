const axios = require('axios'); 
const { standardPhoneNumberArray, standardPhoneNumber } = require('./middleware/standard');

class IveaSMS {
    constructor(username, password) {
        this.Username = username;
        this.Password = password;
        this.url = 'https://sms.iveasms.ir/webservice/url/send.php?format=json&username=' + username + '&password=' + password;
    }
    async sendManual(options, text) {   
        const number = options.number || '+98500046320';
        let type = options.type || 0;
        if (type == 'flash' || type == '1') {
            type = 1
        }
        let to = options.to;
        if (typeof(to) == 'string') {
            to = standardPhoneNumber(to);
        } else if (typeof(to) == 'object') {
            to = standardPhoneNumberArray(to);
        }
        const url = this.url + `&method=SendSMS&type=${type}&to=${to}&from=${number}&text=${encodeURI(text)}`;
        const data = await axios.get(url);
        return data.data;
    }
    async sendManualMulti(options, text) {   
        let number = options.number || '+98500046320';
        let str = '';
        if (typeof(text) == 'object') {
            for (const i in text) {
                if (i != text.length -1) {
                    str += text[i] + ',';
                } else {
                    str += text[i]
                }
            }
        }
        let type = options.type || 0;
        if (type == 'flash' || type == '1') {
            type = 1
        }
        let to = options.to;
        if (typeof(to) == 'string') {
            to = standardPhoneNumber(to);
        } else if (typeof(to) == 'object') {
            to = standardPhoneNumberArray(to);
        }
        const url = this.url + `&method=SendMultiSMS&type=${type}&to=${to}&from=${number}&text=${encodeURI(str)}`;
        const data = await axios.get(url);
        return data.data;
    }
    async getCredit() {   
        const url = this.url + '&method=GetCredit';
        const data = await axios.get(url);
        return data.data;
    }
    async getStatus(id) {   
        const url = this.url + '&method=GetStatus&id=' + id;
        const data = await axios.get(url);
        return data.data;
    }
}

module.exports = IveaSMS;