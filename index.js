#!/usr/bin/env node
var fs = require('fs');
var util = require('util');
var Promise = require("bluebird");
var log_file = fs.createWriteStream('co-test.log', {flags : 'w'});
var log_stdout = process.stdout;
var exec = require('child_process').exec;
var coV = 'co -V',
	coH = 'co -h',
	coInit = 'co init',
	coShot = 'co screen'
	coLogin = 'co login',
	coDebug = 'co debug',
	coSlide = 'co slide slider --nocss',
	coBuild = 'co build --clm spa' /*&& co build --clm irep && co build --clm viseven && co build --clm mitouch && co build --clm iplanner'*/,
	coWhoami = 'co -whoami';


	var coZ = function() {
		exec(coV, function(error, stdout, stdin, stderr) {
			console.log(stdout);
		});
	};


		
	coZ();
	

/*	coZ.then( function (){
			console.log('2');
		});*/
/*		.then(function (stdout){
			exec('co -V')
			console.log(stdout);
		});*/ 
	

/*	coHelp = exec(coH, function(error, stdout, stdin, stderr) {
		console.log(stdout);
	});*/

/*	var coWhoami = exec(coWhoami, function(error, stdout, stdin, stderr) {
		console.log(stdout);
	});*/

/*	coSlide = exec(coSlide, function(error, stdout, stderr, stdin) {
		console.log(stdout);
	}).then (exec(coBuild, function(error, stdout, stderr) {
			console.log(stdout);
			console.log(stderr);
	})).then (exec(coH, function(error, stdout, stderr) {
			console.log(stdout);
			console.log(stderr);
	}));*/
			
/*	exec(coVersion, coHelp, coWhoami, function(error, stdout, stderr, stdin){
		coVersion.then(coHelp).then(coWhoami);
		console.log(stdout);
	});*/


/*	var childInit = exec(coInit, function(error, stdout, stderr, stdin) {
			console.log(stdout);
	});
	
	
	exec(childInit, function(error, stdout, stderr, stdin) 
		{
			console.log('WAIT');
			for (var i = 0; i < 3; i++) {
				setTimeout(function() {
				childInit.stdin.write('\n');
				
			}, 100);
		}
		childInit.stdout.pipe(process.stdout);
		});*/



	

/*	exec(coLogin, function(error, stdout, stderr, stdin) {
		console.log(stdout);
	});*/

/*	exec(coDebug, function(error, stdout, stderr, stdin) {
		console.log(stdin);
		console.log(stderr);
	});*/

/*	coScreen = exec(coShot, function(error, stdout, stdin, stderr) {
		console.log(stdout);
	});*/

/*	console.log = function(d) { 
  			log_file.write(util.format(d) + '\n');
  			log_stdout.write(util.format(d) + '\n');
		};*/
