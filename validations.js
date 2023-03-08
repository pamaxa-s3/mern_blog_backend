import {
	body
} from 'express-validator';

export const loginVlidation = [
	body('email', 'Неверный формат Email').isEmail(),
	body('password', 'Пароль должен быть минимум 5 символов').isLength({
		min: 5
	}),
	// body('fullName', 'Укажите имя').isLength({
	// 	min: 3
	// }),
	body('avatarUrl', 'Неверная ссылка на аватарку').optional().isURL()
];

export const registerVlidation = [
	body('email', 'Неверный формат Email').isEmail(),
	body('password', 'Пароль должен быть минимум 5 символов').isLength({
		min: 5
	}),
	body('fullName', 'Укажите имя').isLength({
		min: 3
	}),
	body('avatarUrl', 'Неверная ссылка на аватарку').optional().isURL()
];

export const postCreateVlidation = [
	body('title', 'Введите заголовок статьи').isLength({
		min: 3
	}).isString(),
	body('text', 'Введите текст статьи').isLength({
		min: 10
	}).isString(),
	body('tags', 'Не верный формат тегов (укажите массив)').optional().isString(),
	body('imageUrl', 'Не верная ссылка на изображение').optional().isString(),

];