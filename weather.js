#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue} from './services/storage.service.js';

const saveToken = async (token) => {
	try {
		await saveKeyValue('token', token);
		printSuccess('Токен сохранён');
	} catch (e) {
		printError(e.message);
	}
}

const initCLI = () => {
	const args = getArgs(process.argv);
	console.log(args);
	if (args.h) {
		return printHelp();
	}
	if (args.s) {
		//город
	}
	if (args.t) {
		return saveToken(args.t);
	}
};

initCLI();