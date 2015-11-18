#!/usr/bin/env node
var fs = require('fs');
var util = require('util');
var Promise = require("bluebird");
var log_file = fs.createWriteStream('co-test.log', {flags : 'w'});
var log_stdout = process.stdout;
var exec = require('child_process').exec;

	execPromise('co -h')
		.then(function(){
			return execPromise('co -V');
		})
		.then(function(){
			return execInit();
		})
		.then(function(){
			return execPromise('co slide');
		})
/*		.then(function(){
			return execPromise('co debug --live');
		})*/

		


	function execPromise(cmd){
		return new Promise(function(resolve, reject){
			exec(cmd, function(err, stdout, stdin, stderr) {
				console.log(stdout);
				err ? reject(err) : resolve(stdout);
			});
		});	
	}


	function execInit(){
		return new Promise(function(resolve, reject){
			var childInit = exec('co debug --live');

			// TODO: Parse test.json and add name, clm and lang from there
			childInit.stdin.write('name' + '\n');
			childInit.stdin.write('en' + '\n');
			childInit.stdin.write('spa' + '\n');
			childInit.stdout.on('data', function(data) {
    			console.log('stdout: ' + data);
			});
			childInit.stderr.on('data', function(data) {
    			console.log('stdout: ' + data);
			});
			childInit.on('close', function(code) {
    			console.log('closing code: ' + code);
			});
			/*childInit.stdout.pipe(process.stdout);*/
		});
	}

	console.log = function(d) { 
  			log_file.write(util.format(d) + '\n');
  			log_stdout.write(util.format(d) + '\n');
		};