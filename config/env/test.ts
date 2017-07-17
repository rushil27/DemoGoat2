/*
======================================================================================
Used when process.env.NODE_ENV is equal to 'test'
======================================================================================
//This file adds config settings and overwrites config settings in the ./default.ts file
//process.env.NODE_ENV is utilized in config/config.ts
*/

export const testEnv = {
	port: process.env.PORT || 7001,
	mongo: {
	  uri: 'mongodb://localhost/test',
	  options: {
	    user: '',
	    pass: ''
	  },
	  // Enable mongoose debug mode
	  debug: process.env.MONGODB_DEBUG || false
	},
	seedDB: true
};
