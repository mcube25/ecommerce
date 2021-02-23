var http = require('http');                         //connect withb http
var sql = require('mssql');                         //connect with sql
var express = require('express');                   //connect with express
var path = require('path');

const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

const products = {};
