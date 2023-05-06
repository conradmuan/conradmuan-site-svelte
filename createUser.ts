import inquirer from 'inquirer';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();
const salt = bcrypt.genSaltSync(10);

console.log('\n\nNo validation in this script!\n\n');

inquirer
	.prompt([
		{
			type: 'input',
			message: 'Enter username',
			name: 'username'
		},
		{
			type: 'email',
			message: 'Enter email',
			name: 'email'
		},
		{
			type: 'password',
			message: 'Enter password',
			name: 'password'
		}
	])
	.then((answers) => {
		console.log('About to write these values to database.');
		const { password, ...rest } = answers;
		console.log(rest);

		inquirer
			.prompt([
				{
					type: 'confirm',
					message: 'Are you sure?',
					name: 'confirm'
				}
			])
			.then(async (answers2) => {
				if (!answers2.confirm) {
					console.log('Nothing to do!');
					return;
				}

				await prisma.users.create({
					data: {
						...rest,
						password: bcrypt.hashSync(password, salt)
					}
				});
			})
			.catch((error) => {
				console.error(error);
			});
	});
