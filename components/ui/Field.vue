<template>
	<div :class="['field', {'is-focus': focused}, {'is-filled': filled}, {'error': !!computedError}]">
		<label :for="id" class="field__label" v-if="label">{{label}}</label>
		<input class="field__input"
		       type="text"
		       ref="input"
		       :id="id"
		       :name="id"
		       :value="value"
		       v-focus="focused"
		       @focus="onFocus()"
		       @blur="onBlur()"
		       @input="onInput"
		       v-validate="validate"
		       v-mask="mask">
		<transition name="fade">
			<span :class="['error-text']" v-if="!!computedError">{{ computedError }}</span>
		</transition>
	</div>

</template>

<script>
	import {mixin as focusMixin} from 'vue-focus'
	
	export default {
		mixins: [focusMixin],
		inject: ['$validator'],
		props: {
			label: {
				type: String,
				default: ''
			},
			id: {
				type: String,
				default: ''
			},
			value: {
				type: String,
				default: ''
			},
			validate: {
				type: String,
				default: ''
			},
			mask: {
				type: String,
				default: ''
			}
		},
		
		data () {
			return {
				focused: false,
				filled: false,
			}
		},
		
		computed: {
			computedError () {
				return this.validate && this.errors ? this.errors.first(this.id) : false
			}
		},
		
		//загрузка страницы
		mounted () {
			this.onBlur()
			this.$root.$on('clearField', () => {
				this.focused = false
				this.filled = false
			})
		},
		
		beforeDestroy () {
			this.$root.$off('clearField')
		},
		
		methods: {
			// фокус
			onFocus () {
				this.focused = true
				this.filled = false
			},
			// вне фокуса
			onBlur () {
				this.filled = this.value ? true : false
				this.focused = false
			},
			//ввод в поле символа
			onInput () {
				let val = event.target.value
				this.$emit('input', val)
			}
		}
	}
</script>

