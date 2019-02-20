<template>
  <div>
    <section class="main">
      <div class="wrapper">
        <div class="main-block">
          <h1 class="main-block__header">We are the team of excellence</h1>
          <p class="main-block__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua.</p>
          <v-button mod="black" text="Get Started" link="/"></v-button>
        </div>
      </div>
      <div class="main-image">
        <div class="main-image__img">
          <picture>
            <source media="(max-width: 480px)" srcset="/img/header-img.png">
            <img class="" src="/img/header-img.png" data-src="" alt="bg">
          </picture>
        </div>
      </div>
    </section>

    <section class="services" id="services">
      <div class="wrapper">
        <div class="row">
          <div class="col col--6 col-s--4">
            <div class="services-content">
              <div class="services-content__icon">
                <span class="lnr lnr-rocket"></span>
              </div>
              <div class="services-content__text">
                <h4>24/7 emergency</h4>
                <p>
                  inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.
                </p>
              </div>
            </div>
            <div class="services-content">
              <div class="services-content__icon">
                <span class="lnr lnr-chart-bars"></span>
              </div>
              <div class="services-content__text">
                <h4>2X-Ray Service</h4>
                <p>
                  inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.
                </p>
              </div>
            </div>
            <div class="services-content">
              <div class="services-content__icon">
                <span class="lnr lnr-bug"></span>
              </div>
              <div class="services-content__text">
                <h4>Intensive Care</h4>
                <p>
                  inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.
                </p>
              </div>
            </div>
          </div>
          <div class="col col--6 col-s--4">
            <div class="services-content">
              <div class="services-content__icon">
                <span class="lnr lnr-heart-pulse"></span>
              </div>
              <div class="services-content__text">
                <h4>24/7 emergency</h4>
                <p>
                  inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.
                </p>
              </div>
            </div>
            <div class="services-content">
              <div class="services-content__icon">
                <span class="lnr lnr-paw"></span>
              </div>
              <div class="services-content__text">
                <h4>2X-Ray Service</h4>
                <p>
                  inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.
                </p>
              </div>
            </div>
            <div class="services-content">
              <div class="services-content__icon">
                <span class="lnr lnr-bug"></span>
              </div>
              <div class="services-content__text">
                <h4>Intensive Care</h4>
                <p>
                  inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="appoinment" id="appoinment">
      <div class="appoinment-img">
        <picture>
          <source media="(max-width: 480px)" srcset="/img/about-img.jpg">
          <img src="/img/about-img.jpg" data-src="" alt="about">
        </picture>
      </div>
      <div class="appoinment-form">
        <h3>Book an Appoinment</h3>
        <v-form></v-form>
      </div>
    </section>

    <section class="consultants" id="consultants">
      <div class="wrapper">
        <div class="consultants__text">
          <h2>Our Consultants</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut  labore  et dolore magna aliqua.
          </p>
        </div>
        <div class="consultants__block">
          <div class="consultants__block_img"
               v-for="(item, i) in info" :key="`item_${i}`"
               @mouseover="openInfo(i)"
               @mouseleave="closeInfo"
               >
            <img :src="item.img.src" :alt="item.img.alt">
              <transition name="fade">
                <div class="content-overlay" v-show="showedReadmore === i"></div>
              </transition>
              <transition name="fade-fast">
                <div class="content-text" v-show="showedReadmore === i">
                  <h3>{{item.header}}</h3>
                  <h4>{{item.text}}</h4>
                </div>
              </transition>
          </div>
        </div>
      </div>
    </section>

    <section class="facts">
      <div class="wrapper">
        <div class="row">
          <div class="col col--3 col-s--2 col-xs--2 center-pos">
            <no-ssr>
              <animated-number class="facts__number"
                      :value="value_1"
                      :formatValue="formatToPrice"
                      :duration="3000"/>
            </no-ssr>
            <p class="facts__text">Clients Served</p>
          </div>
          <div class="col col--3 col-s--2 col-xs--2 center-pos">
            <no-ssr>
              <animated-number class="facts__number"
                      :value="value_2"
                      :formatValue="formatToPrice"
                      :duration="3000"/>
            </no-ssr>
            <p class="facts__text">X-rays Done</p>
          </div>
          <div class="col col--3 col-s--2 col-xs--2 center-pos">
            <no-ssr>
              <animated-number class="facts__number"
                      :value="value_3"
                      :formatValue="formatToPrice"
                      :duration="3000"/>
            </no-ssr>
            <p class="facts__text">Worldwide stuff</p>
          </div>
          <div class="col col--3 col-s--2 col-xs--2 center-pos">
            <no-ssr>
              <animated-number class="facts__number"
                      :value="value_4"
                      :formatValue="formatToPrice"
                      :duration="3000"/>
            </no-ssr>
            <p class="facts__text">Lives Saved</p>
          </div>
        </div>
      </div>
    </section>

    <section class="blogs">
      <div class="wrapper">
        <div class="blogs__text">
          <h2><a href="#">Our Recent Blogs</a></h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut  labore  et dolore magna aliqua.
          </p>
        </div>
        <div class="row row-center">
          <div class="col col--4 col-s--3 col-xs--2"  v-for="(item, i) in blog" :key="`item_${i}`">
            <div class="blog">
              <div class="blog__img">
                <img :src="item.img.src" data-src="" :alt="item.img.alt">
              </div>
              <h4 class="blog__header">
                <a href="#">{{item.header}}</a>
              </h4>
              <p class="blog__text">{{item.text}}</p>
              <div class="blog__footer">
                <div class="blog__footer_content">
                  <div class="person">
                    <img class="img-fluid" :src="item.img_person.src" data-src="" :alt="item.img_person.alt">
                    <a href="#"><span class="person__name">{{item.name}}</span></a>
                  </div>
                  <div class="meta">
                    <span>{{item.data}}</span>
                    <span class="lnr lnr-heart"></span>
                    <span>{{item.like}}</span>
                    <span class="lnr lnr-bubble"></span>
                    <span>{{item.comment}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    import axios from '~/static/api/axios'

    export default {
        data() {
            return {
                info: null,
                blog: null,
                showedReadmore: -1,
                value_1: 0,
                value_2: 0,
                value_3: 0,
                value_4: 0
            }
        },
        mounted () {
            axios.get('/api/info.json')
                .then(response => {
                    this.info = response.data
                })
            axios.get('/api/blog.json')
                .then(response => {
                    this.blog = response.data
                })
                .catch(e => {
                    console.log(e)
                })
        },
        methods: {
            openInfo(index) {
                this.showedReadmore = index
            },
            closeInfo() {
                this.showedReadmore = -1
            },
            handleScroll() {
                let factsTop = document.querySelector('.facts').getBoundingClientRect().top
                let scroll = document.querySelector('.container').scrollTop
                if(scroll > 0 && factsTop <= 450) {
                    this.increase()
                }
            },
            formatToPrice(value) {
                return value.toFixed(0)
            },
            increase() {
                this.value_1 = 2536;
                this.value_2 = 6784;
                this.value_3 = 1059;
                this.value_4 = 2239;
            },
        },
        created: function () {
            if (process.client) {
                document.querySelector('.container').addEventListener('scroll', this.handleScroll);
            }

        },
        destroyed: function () {
            if (process.client) {
                document.querySelector('.container').removeEventListener('scroll', this.handleScroll);
            }
        }

    }
</script>

<style>

</style>

