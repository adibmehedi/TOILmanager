"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let toilSchema = new Schema({
    submittedBy: String,
    metaData: {
        date:Date,
        type:String,
        pdmEmail:String
    },
    status:String,
    ApprovedByPdm:String,
    ApprovedByPdmDate:Date,
    ApprovalByAdmin:String,
    ApprovalByAdminDate:Date
});

let Toil=mongoose.model('Toil',toilSchema);

module.exports=Toil;