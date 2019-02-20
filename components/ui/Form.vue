<template>
    <div class="main-form">
        <form action="" ref="form">
            <div class="form-application" v-if="!applicationForm">
                <div class="row">
                    <div class="col col--12">
                        <div class="form-application__data">
                            <field label="Patient name" class="input-form" id="name" v-model="data.name"
                                   validate="required|alpha_spaces"></field>
                        </div>
                    </div>
                    <div class="col col--6 col-md--4 col-s--2 col-xs--2">
                        <div class="form-application__data">
                            <field label="Phone" class="input-form" id="phone" v-model="data.phone"
                                   validate="required|phone"
                                   mask="+7 (###) ###-##-##"></field>
                        </div>
                    </div>
                    <div class="col col--6 col-md--4 col-s--2 col-xs--2">
                        <div class="form-application__data">
                            <field label="E-mail" class="input-form" id="email" v-model="data.email"
                                   validate="required|email"></field>
                        </div>
                    </div>
                    <div class="col col--12">
                        <div class="form-application__comment">
                            <v-textarea label="Message" id="comment" v-model="data.comment"></v-textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-button" v-if="!applicationForm">
                <v-button text="confirm booking" type="btn" @click.native="checkValidation"></v-button>
            </div>
            <transition name="fade" mode="in-out">
                <div class="application-form" v-if="applicationForm">
                <div class="wrapper">
                    <h3>{{responseMessage.title}}</h3>
                    <v-button text="Main page" link="/" @click.native="mainPage"></v-button>
                </div>
            </div>
            </transition>
        </form>
    </div>
</template>

<script>
    export default {
        $_veeValidate: {
            validator: 'new'
        },
        data () {
            return {
                inputValue: '',
                data: {
                    name: '',
                    phone: '',
                    email: '',
                    comment: '',
                },
                responseMessage: {
                    title: ''
                },
                applicationForm: false,
                startSending: false,
            }
        },
        methods: {
            checkValidation () {
                if (this.firstClick) {
                    this.$validator.resume()
                }

                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.clearForm()
                    }
                }).catch((e) => {
                    console.log('validation error', e)
                })
            },
            clearForm () {
                this.$refs.form.reset()

                this.data.name = ''
                this.data.phone = ''
                this.data.email = ''
                this.data.comment = ''

                this.$root.$emit('clearFile')
                this.$root.$emit('clearField')
                this.$root.$emit('clearTextarea')
                this.applicationForm = true
                this.responseMessage.title = 'Application sent. Wait for a call'
            },
            mainPage () {
                this.applicationForm = false
            }
        }
    }
</script>

