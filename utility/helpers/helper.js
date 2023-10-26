const moment = require("moment");
const dateToIso=(date)=>{
    return moment(date,"DD/MM/YYYY hh:mm A").toISOString()
};

module.exports ={dateToIso}