"use strict";

const mysql = require('./config.js');
const multer = require('multer');

const report = {
    getReportList : async function() {
        try {
            const [result] = await mysql.query("SELECT ReportId, Latitude, Longitude FROM report WHERE DispStatus = 1");
            return result;
        } catch (error) {
            console.log("report: map list 조회 오류 발생");
        }
    },
    getReportDetails : async function(id) {
        try {
            const [result] = await mysql.query("SELECT type, image FROM Store WHERE reportId = ?", [id]);
            return result;
        } catch (error) {
            console.log("report: detail 조회 오류 발생");
        }
    },
    addReport : async function() {
        
    }
}

module.exports = report;