import Vue                      from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import {VueMaskDirective}       from 'v-mask'

Vue.use(VeeValidate, {
	inject: false,
	events: 'input',
	dictionary: {
		en: {
			messages: {
				required: 'Obligatory field', //обязательное поле
				email: 'The entered email address does not look like a real one.', // Введенный адрес почты не похож на настоящий
				alpha_spaces: 'Your name should be similar to the present.' //Ваше имя должно быть похоже на настоящее
			}
		}
	}
})

Validator.localize('en')

Validator.extend('phone', {
	getMessage: 'Phone number is incorrect', //телефон указан неверно
	validate: value => {
		let reg = new RegExp('^((\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{10}$')
		return reg.test(value)
	}
})


Vue.directive('mask', VueMaskDirective)