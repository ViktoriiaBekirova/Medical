<template>
	<header class="default-header">
        <div class="wrapper">
            <div class="header">
                <div class="header__logo">
                    <a href="#home" @click="closeMenu">
                        <img src="/img/logo.png" alt="logo">
                    </a>
                </div>
                <div class="header-menu">
                    <transition name="slide-fade">
                        <div class="header__nav" v-if="menu">
                            <nav>
                                <a href="#home" @click="closeMenu">home</a>
                                <a href="#services" @click="closeMenu">services</a>
                                <a href="#appoinment" @click="closeMenu">appoinment</a>
                                <a href="#consultants" @click="closeMenu">consultants</a>
                            </nav>
                        </div>
                    </transition>
                    <div class="header__control">
                        <div class="header__control_open" ref="open" @click="openMenu">
                            <img src="/img/open.svg" alt="open menu">
                        </div>
                        <div class="header__control_close" ref="close" @click="closeMenu">
                            <img src="/img/close.svg" alt="close menu">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                menu: false
            }
        },
        methods: {
            openMenu() {
                this.menu = true
                this.$refs.open.classList.add('hide')
                this.$refs.close.classList.add('show')
            },
            closeMenu() {
                this.menu = false
                this.$refs.open.classList.remove('hide')
                this.$refs.close.classList.remove('show')
            }
        }
	}
</script>

