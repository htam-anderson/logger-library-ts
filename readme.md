# A Simple Log Library

Hi! I'm was learning about TypeScript and come up with this small project about logging, i got the idea from many log libraries and packages out there but, i try to keep it simple, just to write log into the console. So i hope this could be used in your side-project for controlling your logging system. Thank you.

## Install and usage
### Install
You can get it to your project simply by install it from my git repository

	npm install git+https://github.com/htam-anderson/logger-library-ts.git
(so sorry for this inconvenience since this is just my side-project so i didn't publish it on npm)
### Usage
After install, for TypeScript you simply just need to import it in where you want to use, for example:

	import {Logger} from  'logger-library-ts';
	export  class  BaseController {
		const logger =  new  Logger();
		// I make the default level is ALL
		// But you can change it to new  Logger('warn')

		logger.debug('SOME THING ABOUT LOGGING DEBUG');
		logger.info('SOME THING ABOUT LOGGING INFO');
		logger.warn('SOME THING ABOUT LOGGING WARNING');
		logger.error('SOME THING ABOUT LOGGING ERROR');

		try {
			throw  HttpErrors(500)
		} catch (error) {
			logger.error('LOG ERROR WITH TRACE', [error]);
		}
	}

The output you have for the code about will appear like this:

	[2020-04-07 00:58:32] | [DEBUG] | SOME THING ABOUT LOGGING DEBUG
	[2020-04-07 00:58:32] | [INFO] | SOME THING ABOUT LOGGING INFO
	[2020-04-07 00:58:32] | [WARNING] | SOME THING ABOUT LOGGING WARNING
	[2020-04-07 00:58:32] | [ERROR] | SOME THING ABOUT LOGGING ERROR
	[2020-04-07 00:58:32] | [ERROR] | LOG ERROR WITH TRACE
	[2020-04-07 00:58:32] | [ERROR] | InternalServerError: Internal Server Error,
	Error:
    at Logger.createStack (C:\Users\bla\trial-api\node_modules\logger-library-ts\lib\logger.js:46:19)
    at Logger.error (C:\Users\bla\trial-api\node_modules\logger-library-ts\lib\logger.js:27:33)
    at PingController.trial (C:\Users\bla\trial-api\src\controllers\ping.controller.ts:71:11)
    ......

There are several Log Level that i provide in this library, such as:

	↓ ALL
	↓ DEBUG
	↓ INFO
	↓ WARN
	↓ ERROR
	↓ OFF
An in every type of log you can adding the detail by adding the content to the [] of the last parameter such as:

	logger.debug('SOME THING ABOUT LOGGING DEBUG', ['THIS IS THE DETAIL']);
The result will be:

	[2020-04-07 01:06:33] | [DEBUG] | SOME THING ABOUT LOGGING DEBUG
	[2020-04-07 01:06:33] | [DEBUG] | THIS IS THE DETAIL

## References:
Special thanks to these developers, who bring me a good concept and ideas about Logging:
[logger](https://github.com/TypedProject/logger)
[simple-node-logger](https://github.com/darrylwest/simple-node-logger)
[log4js-node](https://github.com/log4js-node/log4js-node)
[Building an efficient logger in typescript](https://adrianhall.github.io/cloud/2019/06/30/building-an-efficient-logger-in-typescript/)
