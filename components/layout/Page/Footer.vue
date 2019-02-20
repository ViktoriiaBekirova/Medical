<template>
	<footer>
		<div class="footer">
			<div class="wrapper">
				<div class="row">
					<div class="col col--2 col-md--2 col-s--4">
						<div class="footer__products">
							<h6 class="footer__products_header">Top Products</h6>
							<ul class="footer__products_nav">
								<li><a href="#">Managed Website</a></li>
								<li><a href="#">Manage Reputation</a></li>
								<li><a href="#">Power Tools</a></li>
								<li><a href="#">Marketing Service</a></li>
							</ul>
						</div>
					</div>
					<div class="col col--4 col-md--2 col-s--4">
						<div class="footer__contact">
							<h6 class="footer__contact_header">Contact Us</h6>
							<p class="footer__contact_text">
								56/8, bir uttam qazi nuruzzaman road, west panthapath, kalabagan, Dhanmondi, Dhaka - 1205
							</p>
							<h3 class="footer__contact_tell">
								<a href="tel:012-6532-568-9746">012-6532-568-9746</a>
							</h3>
							<h3 class="footer__contact_tell">
								<a href="tel:012-6532-568-97468">012-6532-568-97468</a>
							</h3>
						</div>
					</div>
					<div class="col col--6 col-md--2 col-s--4">
						<div class="footer__newsletter">
							<h6 class="footer__newsletter_header">Newsletter</h6>
							<p class="footer__newsletter_text">You can trust us. we only send promo offers, not a single spam.</p>
							<form ref="form">
								<div class="row">
									<div class="col col--7 col-xs--2">
										<div class="form-application__data footer-email">
											<field label="Enter Email " class="input-form" id="email" v-model="data.email"
												   validate="required|email"></field>
										</div>
									</div>
									<div class="col col--5 col-xs--2">
										<v-button text="Subscribe" type="btn" @click.native="checkValidation"></v-button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="footer__bottom">
					<p>Copyright © {{date}} All rights reserved</p>
					<social></social>
				</div>
			</div>
		</div>
	</footer>
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
                    email: ''
                },
				date: null
            }
        },
		mounted() {
            this.Date()
		},
        methods: {
            checkValidation() {
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
            clearForm() {
                this.$refs.form.reset()
                this.data.email = ''
                this.$root.$emit('clearField')
            },
            Date: function () {
                let dateFull = new Date()
                this.date = dateFull.getFullYear()
            }
        }
	}
</script>
