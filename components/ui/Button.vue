<template>
    <div>
        <div v-if="type === 'btn'" :class="['btn', {'is-disable': disable}, computedClass]">
            <span class="btn__text">{{ text }}</span>
        </div>

        <nuxt-link v-if="type === 'link'" :to="link" :class="['btn', computedClass]">
            <span class="btn__text">{{ text }}</span>
        </nuxt-link>

    </div>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: 'link'
		},
		text: {
			type: String,
			default: null
		},
		link: {
			type: String,
			default: ''
		},
		disable: {
			type: Boolean,
			default: false,
		},
		mod: {
			type: String,
			default: ''
		},
	},
	computed: {
		computedClass () {
			if (this.mod) {
				let mods = ''

				this.mod.split(' ').forEach(mod => {
					mods += `btn--${mod} `
				})

				return mods
			}
		}
	}
}
</script>
