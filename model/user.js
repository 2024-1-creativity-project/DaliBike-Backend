"use strict";

const mysql = require('./config.js');

const user = {
    login : async function(id) {
        try {
            const [result] = await mysql.query("SELECT Password FROM USER WHERE USERId = ?", [id]);
            return [result];
        } catch (error) {
            console.log("유저 데이터베이스 조회 오류 발생");
        }
    },
    register : async function(id, pw, phone, name, nickname) {
        try {
            const [result] = await mysql.query("INSERT INTO USER (USERId, Password, PhoneNumber, Name, Nickname, Points, subDate)"
            + "VALUES (?, ?, ?, ?, ?, 0, NOW())", [id, pw, phone, name, nickname]);
            console.log("유저 회원가입 완료");
            return true;
        } catch (error) {
            console.log("유저 회원가입 오류 발생");
        }
    },
    myPage : async function(id) {
        try {
            const [result] = await mysql.query("SELECT * FROM USER WHERE USERId = ?", [id]);
            console.log("유저 마이페이지 조회 완료")
            return [result];
        } catch (error) {
            console.log("유저 데이터베이스 조회 오류 발생");
        }
    },
    idRedundancyCheck : async function(id) {
        try {
            const [result] = await mysql.query("SELECT COUNT(*) FROM USER WHERE USERId = ?", [id]);
            return [result];
        } catch (error) {
            console.log("유저 데이터베이스 조회 오류 발생");
        }
    },
    nicknameRedundancyCheck : async function(nickname) {
        try {
            const [result] = await mysql.query("SELECT COUNT(*) FROM USER WHERE Nickname = ?", [nickname]);
            return [result];
        } catch (error) {
            console.log("유저 데이터베이스 조회 오류 발생");
        }
    }
}

module.exports = user;