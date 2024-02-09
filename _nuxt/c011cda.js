(window.webpackJsonp=window.webpackJsonp||[]).push([[20,6,7,10,12],{357:function(t,e,o){var content=o(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("261a3c58",content,!0,{sourceMap:!1})},358:function(t,e,o){var content=o(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("dd1d9ec0",content,!0,{sourceMap:!1})},359:function(t,e,o){"use strict";o.r(e);var d={name:"PageHead",props:{title:{type:String,default:""},img:{type:String,default:""}},methods:{getImgUrl:function(t){return o(221)("./"+t)}}},r=(o(365),o(13)),component=Object(r.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-head"},[e("div",{staticClass:"container"},[t.title?e("h2",{staticClass:"page-head__title",domProps:{innerHTML:t._s(t.title)}}):t._e()]),t._v(" "),t.img?e("img",{ref:"img",staticClass:"page-head__img",attrs:{alt:"title image",src:t.getImgUrl(t.img)}}):t._e()])}),[],!1,null,"25fc9c35",null);e.default=component.exports},360:function(t,e,o){"use strict";o.r(e);o(72),o(73),o(31),o(14);var d=o(142),r=o(53),n=o(141),c={name:"QuestionForm",components:{AppField:d.default,AppButton:r.default},data:function(){return{formData:{name:"",tel:""},details:{name:"Заполните это поле",tel:"Заполните это поле"},sending:!1,errors:[]}},methods:{formSubmit:function(){var t=this;for(var e in this.errors=[],this.formData){var o=this.formData[e];switch(e){case"name":0===o.length&&this.errors.push(e);break;case"tel":0===o.length?(this.errors.push(e),this.details.tel="Заполните это поле"):o.length<16&&(this.errors.push(e),this.details.tel="Введите корректный телефон")}}this.errors.length||(this.sending=!0,n.a.post("/consultation",this.formData).then((function(){t.$toast.success("Ваш запрос отправлен. Мария Владимировна свяжется с Вами в ближайшее время."),t.resetForm()})).catch((function(){t.$toast.error("Что-то пошло не так. Попробуйте повторить запрос позже.")})).finally((function(){t.sending=!1})))},resetForm:function(){for(var t in this.formData)this.formData[t]="";for(var e in this.details)this.details[e]="Заполните это поле"}}},m=(o(367),o(13)),component=Object(m.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"question-form",attrs:{id:"question-form"}},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("form",{staticClass:"question-form__form",on:{submit:function(e){return e.preventDefault(),t.formSubmit.apply(null,arguments)}}},[e("AppField",{attrs:{label:"Как вас зовут?",error:t.errors.includes("name"),details:t.details.name,color:"contrast"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}}),t._v(" "),e("AppField",{attrs:{label:"Ваш номер телефона",error:t.errors.includes("tel"),details:t.details.tel,color:"contrast",mask:"{+7} {(}000{)} 000{-}00{-}00"},model:{value:t.formData.tel,callback:function(e){t.$set(t.formData,"tel",e)},expression:"formData.tel"}}),t._v(" "),e("div",{staticClass:"question-form__submit-container"},[e("AppButton",{attrs:{preloader:t.sending,type:"submit",color:"contrast"}},[t._v("\n          Отправить\n        ")]),t._v(" "),e("p",{staticClass:"question-form__submit-text"},[t._v("Нажимая на кнопку «Отправить» вы соглашаетесь с \n          "),e("nuxt-link",{attrs:{to:"/privacy-policy"}},[t._v("политикой по обработке персональных даных")])],1)],1)],1),t._v(" "),e("svg-icon",{staticClass:"question-form__svg",attrs:{name:"scales-2"}})],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"question-form__content"},[e("h3",{staticClass:"question-form__title"},[t._v("Получите бесплатную консультацию")]),t._v(" "),e("p",{staticClass:"question-form__text"},[t._v("Отправьте заявку на бесплатную консультацию, юрист Мария Владимировна\n        свяжется с вами, ответит на все вопросы и поможет выработать план, для получения наилучшего\n        результата с юридической точки зрения.")])])}],!1,null,"0bd3376e",null);e.default=component.exports},361:function(t,e,o){var content=o(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("fdad2b02",content,!0,{sourceMap:!1})},362:function(t,e,o){var content=o(372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("87cdac30",content,!0,{sourceMap:!1})},363:function(t,e,o){"use strict";o.r(e);var d={name:"ServicesList",props:{title:{type:String,default:""},services:{type:Array,required:!0}}},r=(o(369),o(13)),component=Object(r.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"services-list"},[e("div",{staticClass:"services-list__content"},[e("h3",{staticClass:"services-list__title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("ul",{staticClass:"services-list__list"},t._l(t.services,(function(o,d){return e("li",{key:d,staticClass:"services-list__list-item",domProps:{innerHTML:t._s(o)}})})),0)]),t._v(" "),e("img",{staticClass:"services-list__img",attrs:{alt:"image",src:o(222)}})])])}),[],!1,null,"beb74296",null);e.default=component.exports},364:function(t,e,o){"use strict";o.r(e);var d={name:"TextBlock"},r=(o(371),o(13)),component=Object(r.a)(d,(function(){return(0,this._self._c)("div",{staticClass:"container text-content"},[this._t("default")],2)}),[],!1,null,"1632b49c",null);e.default=component.exports},365:function(t,e,o){"use strict";o(357)},366:function(t,e,o){var d=o(26)(!1);d.push([t.i,'*[data-v-25fc9c35],[data-v-25fc9c35]:after,[data-v-25fc9c35]:before{box-sizing:border-box;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}body[data-v-25fc9c35],html[data-v-25fc9c35]{overscroll-behavior-y:none;background:#fff;background:var(--app-background)}body[data-v-25fc9c35]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2e3146;color:var(--text-color)}body[data-v-25fc9c35]::-webkit-scrollbar{width:5px}body[data-v-25fc9c35]::-webkit-scrollbar-track{background:transparent}body[data-v-25fc9c35]::-webkit-scrollbar-thumb{border-radius:10px;background-color:rgba(0,0,0,.7)}html[data-v-25fc9c35]{--app-background:#fff;--border-color:#dadde5;--divider-color:#d3d7e0;--head-background:#e8edf5;--element-background:#f5f5f5;--element-disabled-color:#d3d7e0;--element-disabled-2-color:#46495e;--element-disabled-lighten-color:#eaecf0;--text-color:#2e3146;--text-lighten-color:#71809b;--text-disabled-color:#a2acbe;--text-contrast-color:#fff;--primary-color:#ca354a;--primary-lighten-color:#dc475c;--primary-darken-color:#a51c30;--accent-color:#2e3146;--accent-lighten-color:#71809b;--selection-color:#000;--selection-background:#fff;--error-page-background:#e5e5e5;--error-page-icon-color:#ccc;--error-page-text-color:#4c4c4c;--error-page-tip-color:#4c4c4c;--loading-text-color:#000;--loading-background:#fff;--input-error-border-color:#c93239;--input-disabled-color:#a0a0a0;--input-disabled-background-2:hsla(0,0%,60%,0.12);--input-disabled-background:#d56070;--input-contrast-hover-border:hsla(0,0%,100%,0.4);font-size:62.5%!important;--window-height:100vh}@media screen and (max-width:767px){html[data-v-25fc9c35]{font-size:calc(-.90604px + 2.90828vw)!important}}@media screen and (min-width:768px)and (max-width:1023px){html[data-v-25fc9c35]{font-size:calc(-2.04706px + 1.56863vw)!important}}@media(min-width:1024px)and (max-width:1440px){html[data-v-25fc9c35]{font-size:calc(3.07692px + .48077vw)!important}}@media(min-width:1441px)and (max-width:1920px){html[data-v-25fc9c35]{font-size:calc(1.9833px + .41754vw)!important}}#app[data-v-25fc9c35]{overflow-x:hidden;min-height:100vh}#app[data-v-25fc9c35],#app-content[data-v-25fc9c35]{display:flex;flex-direction:column}#footer[data-v-25fc9c35],#header[data-v-25fc9c35]{flex-shrink:0}#main[data-v-25fc9c35]{flex:1 0 auto;padding-top:var(--main-gutter)}img[data-v-25fc9c35]{display:block}a[data-v-25fc9c35],button[data-v-25fc9c35]{cursor:pointer}ol[data-v-25fc9c35],ul[data-v-25fc9c35]{margin:0;padding:0;list-style:none}a[data-v-25fc9c35]{color:currentColor;text-decoration:none}h1[data-v-25fc9c35],h2[data-v-25fc9c35],h3[data-v-25fc9c35],h4[data-v-25fc9c35],h5[data-v-25fc9c35],h6[data-v-25fc9c35],p[data-v-25fc9c35]{margin:0}address[data-v-25fc9c35]{font-style:normal}button[data-v-25fc9c35]{padding:0;border:0;background:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}body[data-v-25fc9c35]{font-size:1.8rem;font-weight:400;line-height:2.4rem;font-family:"Montserrat","Helvetica Neue","Arial"}@media(max-width:767px){body[data-v-25fc9c35]{font-size:1.6rem;line-height:2.2rem}}._visually-h1[data-v-25fc9c35],h1[data-v-25fc9c35]{font-size:5.6rem;font-weight:500;line-height:6.8rem}@media(max-width:767px){._visually-h1[data-v-25fc9c35],h1[data-v-25fc9c35]{font-size:3.2rem;line-height:3.8rem}}._visually-h2[data-v-25fc9c35],h2[data-v-25fc9c35]{font-size:4rem;font-weight:600;line-height:4.8rem}@media(max-width:767px){._visually-h2[data-v-25fc9c35],h2[data-v-25fc9c35]{font-size:2.4rem;line-height:3.2rem}}._visually-h3[data-v-25fc9c35],h3[data-v-25fc9c35]{font-size:3.2rem;font-weight:600;line-height:4rem}@media(max-width:767px){._visually-h3[data-v-25fc9c35],h3[data-v-25fc9c35]{font-size:2rem;line-height:3rem}}._visually-h4[data-v-25fc9c35],h4[data-v-25fc9c35]{font-size:2.4rem;font-weight:600;line-height:3.2rem}@media(max-width:767px){._visually-h4[data-v-25fc9c35],h4[data-v-25fc9c35]{font-size:1.8rem;line-height:2.4rem}}._visually-h5[data-v-25fc9c35],h5[data-v-25fc9c35]{font-size:1.8rem;font-weight:600;line-height:2.2rem}@media(max-width:767px){._visually-h5[data-v-25fc9c35],h5[data-v-25fc9c35]{font-size:1.6rem;line-height:2rem}}.text-lead[data-v-25fc9c35]{font-size:1.8rem;font-weight:400;line-height:2.8rem}@media(max-width:767px){.text-lead[data-v-25fc9c35]{font-size:1.6rem;line-height:2.2rem}}.text-sm[data-v-25fc9c35]{font-size:1.4rem;font-weight:400;line-height:2rem}@media(max-width:767px){.text-sm[data-v-25fc9c35]{font-size:1.2rem;line-height:1.8rem}}.text-btn[data-v-25fc9c35]{font-size:1.6rem;font-weight:500;line-height:2.4rem}@media(max-width:767px){.text-btn[data-v-25fc9c35]{font-size:1.4rem;line-height:2.2rem}}.text-btn-sm[data-v-25fc9c35]{font-size:1.2rem;font-weight:500;line-height:2rem}@media(max-width:767px){.text-btn-sm[data-v-25fc9c35]{font-size:1rem;line-height:1.8rem}}.container[data-v-25fc9c35]{display:block;width:100%;margin:0 auto;max-width:128rem}@media(max-width:1024px){.container[data-v-25fc9c35]{max-width:calc(100% - 8rem)}}@media(max-width:767px){.container[data-v-25fc9c35]{max-width:calc(100% - 4rem)}}.app-section[data-v-25fc9c35]{margin-bottom:10rem}@media(max-width:1024px){.app-section[data-v-25fc9c35]{margin-bottom:8rem}}@media(max-width:767px){.app-section[data-v-25fc9c35]{margin-bottom:5.4rem}}.app-section._no-margin[data-v-25fc9c35]{margin-bottom:0}@media(max-width:1024px){.app-section._no-margin[data-v-25fc9c35]{margin-bottom:0}}@media(max-width:767px){.app-section._no-margin[data-v-25fc9c35]{margin-bottom:0}}.app-section__title[data-v-25fc9c35]{margin-bottom:4rem}@media(max-width:1024px){.app-section__title[data-v-25fc9c35]{margin-bottom:2.4rem}}@media(max-width:767px){.app-section__title[data-v-25fc9c35]{margin-bottom:1.6rem}}.page-head[data-v-25fc9c35]{position:relative;min-height:35rem;padding-top:9rem}@media(max-width:1024px){.page-head[data-v-25fc9c35]{min-height:30rem;padding-top:5rem}}@media(max-width:767px){.page-head[data-v-25fc9c35]{min-height:25rem;padding-top:5rem}}.page-head__title[data-v-25fc9c35]{color:#fff;color:var(--text-contrast-color);position:relative;z-index:2}.page-head[data-v-25fc9c35]:before{position:absolute;z-index:2;top:-10rem;left:0;width:100%;height:calc(100% + 10rem);background:linear-gradient(0deg,rgba(0,0,0,.6),rgba(0,0,0,.6));content:""}@media(max-width:1024px){.page-head[data-v-25fc9c35]:before{top:-7rem;height:calc(100% + 7rem)}}.page-head__img[data-v-25fc9c35]{position:absolute;top:-10rem;left:-20%;width:120%;height:calc(100% + 10rem);-o-object-fit:cover;object-fit:cover}@media(max-width:1024px){.page-head__img[data-v-25fc9c35]{top:-7rem;height:calc(100% + 7rem)}}',""]),t.exports=d},367:function(t,e,o){"use strict";o(358)},368:function(t,e,o){var d=o(26)(!1);d.push([t.i,'*[data-v-0bd3376e],[data-v-0bd3376e]:after,[data-v-0bd3376e]:before{box-sizing:border-box;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}body[data-v-0bd3376e],html[data-v-0bd3376e]{overscroll-behavior-y:none;background:#fff;background:var(--app-background)}body[data-v-0bd3376e]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2e3146;color:var(--text-color)}body[data-v-0bd3376e]::-webkit-scrollbar{width:5px}body[data-v-0bd3376e]::-webkit-scrollbar-track{background:transparent}body[data-v-0bd3376e]::-webkit-scrollbar-thumb{border-radius:10px;background-color:rgba(0,0,0,.7)}html[data-v-0bd3376e]{--app-background:#fff;--border-color:#dadde5;--divider-color:#d3d7e0;--head-background:#e8edf5;--element-background:#f5f5f5;--element-disabled-color:#d3d7e0;--element-disabled-2-color:#46495e;--element-disabled-lighten-color:#eaecf0;--text-color:#2e3146;--text-lighten-color:#71809b;--text-disabled-color:#a2acbe;--text-contrast-color:#fff;--primary-color:#ca354a;--primary-lighten-color:#dc475c;--primary-darken-color:#a51c30;--accent-color:#2e3146;--accent-lighten-color:#71809b;--selection-color:#000;--selection-background:#fff;--error-page-background:#e5e5e5;--error-page-icon-color:#ccc;--error-page-text-color:#4c4c4c;--error-page-tip-color:#4c4c4c;--loading-text-color:#000;--loading-background:#fff;--input-error-border-color:#c93239;--input-disabled-color:#a0a0a0;--input-disabled-background-2:hsla(0,0%,60%,0.12);--input-disabled-background:#d56070;--input-contrast-hover-border:hsla(0,0%,100%,0.4);font-size:62.5%!important;--window-height:100vh}@media screen and (max-width:767px){html[data-v-0bd3376e]{font-size:calc(-.90604px + 2.90828vw)!important}}@media screen and (min-width:768px)and (max-width:1023px){html[data-v-0bd3376e]{font-size:calc(-2.04706px + 1.56863vw)!important}}@media(min-width:1024px)and (max-width:1440px){html[data-v-0bd3376e]{font-size:calc(3.07692px + .48077vw)!important}}@media(min-width:1441px)and (max-width:1920px){html[data-v-0bd3376e]{font-size:calc(1.9833px + .41754vw)!important}}#app[data-v-0bd3376e]{overflow-x:hidden;min-height:100vh}#app[data-v-0bd3376e],#app-content[data-v-0bd3376e]{display:flex;flex-direction:column}#footer[data-v-0bd3376e],#header[data-v-0bd3376e]{flex-shrink:0}#main[data-v-0bd3376e]{flex:1 0 auto;padding-top:var(--main-gutter)}img[data-v-0bd3376e]{display:block}a[data-v-0bd3376e],button[data-v-0bd3376e]{cursor:pointer}ol[data-v-0bd3376e],ul[data-v-0bd3376e]{margin:0;padding:0;list-style:none}a[data-v-0bd3376e]{color:currentColor;text-decoration:none}h1[data-v-0bd3376e],h2[data-v-0bd3376e],h3[data-v-0bd3376e],h4[data-v-0bd3376e],h5[data-v-0bd3376e],h6[data-v-0bd3376e],p[data-v-0bd3376e]{margin:0}address[data-v-0bd3376e]{font-style:normal}button[data-v-0bd3376e]{padding:0;border:0;background:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}body[data-v-0bd3376e]{font-size:1.8rem;font-weight:400;line-height:2.4rem;font-family:"Montserrat","Helvetica Neue","Arial"}@media(max-width:767px){body[data-v-0bd3376e]{font-size:1.6rem;line-height:2.2rem}}._visually-h1[data-v-0bd3376e],h1[data-v-0bd3376e]{font-size:5.6rem;font-weight:500;line-height:6.8rem}@media(max-width:767px){._visually-h1[data-v-0bd3376e],h1[data-v-0bd3376e]{font-size:3.2rem;line-height:3.8rem}}._visually-h2[data-v-0bd3376e],h2[data-v-0bd3376e]{font-size:4rem;font-weight:600;line-height:4.8rem}@media(max-width:767px){._visually-h2[data-v-0bd3376e],h2[data-v-0bd3376e]{font-size:2.4rem;line-height:3.2rem}}._visually-h3[data-v-0bd3376e],h3[data-v-0bd3376e]{font-size:3.2rem;font-weight:600;line-height:4rem}@media(max-width:767px){._visually-h3[data-v-0bd3376e],h3[data-v-0bd3376e]{font-size:2rem;line-height:3rem}}._visually-h4[data-v-0bd3376e],h4[data-v-0bd3376e]{font-size:2.4rem;font-weight:600;line-height:3.2rem}@media(max-width:767px){._visually-h4[data-v-0bd3376e],h4[data-v-0bd3376e]{font-size:1.8rem;line-height:2.4rem}}._visually-h5[data-v-0bd3376e],h5[data-v-0bd3376e]{font-size:1.8rem;font-weight:600;line-height:2.2rem}@media(max-width:767px){._visually-h5[data-v-0bd3376e],h5[data-v-0bd3376e]{font-size:1.6rem;line-height:2rem}}.text-lead[data-v-0bd3376e]{font-size:1.8rem;font-weight:400;line-height:2.8rem}@media(max-width:767px){.text-lead[data-v-0bd3376e]{font-size:1.6rem;line-height:2.2rem}}.text-sm[data-v-0bd3376e]{font-size:1.4rem;font-weight:400;line-height:2rem}@media(max-width:767px){.text-sm[data-v-0bd3376e]{font-size:1.2rem;line-height:1.8rem}}.text-btn[data-v-0bd3376e]{font-size:1.6rem;font-weight:500;line-height:2.4rem}@media(max-width:767px){.text-btn[data-v-0bd3376e]{font-size:1.4rem;line-height:2.2rem}}.text-btn-sm[data-v-0bd3376e]{font-size:1.2rem;font-weight:500;line-height:2rem}@media(max-width:767px){.text-btn-sm[data-v-0bd3376e]{font-size:1rem;line-height:1.8rem}}.container[data-v-0bd3376e]{display:block;width:100%;margin:0 auto;max-width:128rem}@media(max-width:1024px){.container[data-v-0bd3376e]{max-width:calc(100% - 8rem)}}@media(max-width:767px){.container[data-v-0bd3376e]{max-width:calc(100% - 4rem)}}.app-section[data-v-0bd3376e]{margin-bottom:10rem}@media(max-width:1024px){.app-section[data-v-0bd3376e]{margin-bottom:8rem}}@media(max-width:767px){.app-section[data-v-0bd3376e]{margin-bottom:5.4rem}}.app-section._no-margin[data-v-0bd3376e]{margin-bottom:0}@media(max-width:1024px){.app-section._no-margin[data-v-0bd3376e]{margin-bottom:0}}@media(max-width:767px){.app-section._no-margin[data-v-0bd3376e]{margin-bottom:0}}.app-section__title[data-v-0bd3376e]{margin-bottom:4rem}@media(max-width:1024px){.app-section__title[data-v-0bd3376e]{margin-bottom:2.4rem}}@media(max-width:767px){.app-section__title[data-v-0bd3376e]{margin-bottom:1.6rem}}.question-form[data-v-0bd3376e]{padding:10rem 0;color:#fff;color:var(--text-contrast-color);background-color:#ca354a;background-color:var(--primary-color);overflow:hidden}@media(max-width:1024px){.question-form[data-v-0bd3376e]{padding:8rem 0}}@media(max-width:767px){.question-form[data-v-0bd3376e]{padding:6.4rem 0}}.question-form .container[data-v-0bd3376e]{position:relative;display:flex;justify-content:space-between}@media(max-width:1024px){.question-form .container[data-v-0bd3376e]{flex-direction:column}}.question-form__content[data-v-0bd3376e]{position:relative;z-index:2;max-width:51.4rem}@media(max-width:1024px){.question-form__content[data-v-0bd3376e]{max-width:none;margin-bottom:3.8rem}}.question-form__title[data-v-0bd3376e]{margin-bottom:3.8rem}@media(max-width:1024px){.question-form__title[data-v-0bd3376e]{margin-bottom:2.4rem}}@media(max-width:767px){.question-form__title[data-v-0bd3376e]{margin-bottom:1.2rem}}.question-form__form[data-v-0bd3376e]{position:relative;z-index:2;min-width:62.4rem}@media(max-width:1024px){.question-form__form[data-v-0bd3376e]{min-width:auto}}.question-form__submit-container[data-v-0bd3376e]{display:flex;align-items:flex-start}@media(max-width:767px){.question-form__submit-container[data-v-0bd3376e]{flex-direction:column}}.question-form__submit-text[data-v-0bd3376e]{margin-left:4rem;width:40rem}@media(max-width:767px){.question-form__submit-text[data-v-0bd3376e]{margin-top:1.2rem;margin-left:0;width:auto}}.question-form__submit-text a[data-v-0bd3376e]{text-decoration:underline;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none;text-underline-offset:2px;transition:opacity .3s cubic-bezier(.32,.94,.6,1)}@media(min-width:1025px){.question-form__submit-text a[data-v-0bd3376e]:hover{opacity:.7}}.question-form__svg[data-v-0bd3376e]{position:absolute;right:-10%;top:-100%;height:300%;width:50rem;color:#fff;color:var(--text-contrast-color);opacity:.4}@media(max-width:767px){.question-form__svg[data-v-0bd3376e]{top:auto;bottom:-20%;right:-40%;height:100%}}@media(max-width:767px){.question-form .app-button[data-v-0bd3376e]{width:100%}}',""]),t.exports=d},369:function(t,e,o){"use strict";o(361)},370:function(t,e,o){var d=o(26)(!1);d.push([t.i,'*[data-v-beb74296],[data-v-beb74296]:after,[data-v-beb74296]:before{box-sizing:border-box;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}body[data-v-beb74296],html[data-v-beb74296]{overscroll-behavior-y:none;background:#fff;background:var(--app-background)}body[data-v-beb74296]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2e3146;color:var(--text-color)}body[data-v-beb74296]::-webkit-scrollbar{width:5px}body[data-v-beb74296]::-webkit-scrollbar-track{background:transparent}body[data-v-beb74296]::-webkit-scrollbar-thumb{border-radius:10px;background-color:rgba(0,0,0,.7)}html[data-v-beb74296]{--app-background:#fff;--border-color:#dadde5;--divider-color:#d3d7e0;--head-background:#e8edf5;--element-background:#f5f5f5;--element-disabled-color:#d3d7e0;--element-disabled-2-color:#46495e;--element-disabled-lighten-color:#eaecf0;--text-color:#2e3146;--text-lighten-color:#71809b;--text-disabled-color:#a2acbe;--text-contrast-color:#fff;--primary-color:#ca354a;--primary-lighten-color:#dc475c;--primary-darken-color:#a51c30;--accent-color:#2e3146;--accent-lighten-color:#71809b;--selection-color:#000;--selection-background:#fff;--error-page-background:#e5e5e5;--error-page-icon-color:#ccc;--error-page-text-color:#4c4c4c;--error-page-tip-color:#4c4c4c;--loading-text-color:#000;--loading-background:#fff;--input-error-border-color:#c93239;--input-disabled-color:#a0a0a0;--input-disabled-background-2:hsla(0,0%,60%,0.12);--input-disabled-background:#d56070;--input-contrast-hover-border:hsla(0,0%,100%,0.4);font-size:62.5%!important;--window-height:100vh}@media screen and (max-width:767px){html[data-v-beb74296]{font-size:calc(-.90604px + 2.90828vw)!important}}@media screen and (min-width:768px)and (max-width:1023px){html[data-v-beb74296]{font-size:calc(-2.04706px + 1.56863vw)!important}}@media(min-width:1024px)and (max-width:1440px){html[data-v-beb74296]{font-size:calc(3.07692px + .48077vw)!important}}@media(min-width:1441px)and (max-width:1920px){html[data-v-beb74296]{font-size:calc(1.9833px + .41754vw)!important}}#app[data-v-beb74296]{overflow-x:hidden;min-height:100vh}#app[data-v-beb74296],#app-content[data-v-beb74296]{display:flex;flex-direction:column}#footer[data-v-beb74296],#header[data-v-beb74296]{flex-shrink:0}#main[data-v-beb74296]{flex:1 0 auto;padding-top:var(--main-gutter)}img[data-v-beb74296]{display:block}a[data-v-beb74296],button[data-v-beb74296]{cursor:pointer}ol[data-v-beb74296],ul[data-v-beb74296]{margin:0;padding:0;list-style:none}a[data-v-beb74296]{color:currentColor;text-decoration:none}h1[data-v-beb74296],h2[data-v-beb74296],h3[data-v-beb74296],h4[data-v-beb74296],h5[data-v-beb74296],h6[data-v-beb74296],p[data-v-beb74296]{margin:0}address[data-v-beb74296]{font-style:normal}button[data-v-beb74296]{padding:0;border:0;background:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}body[data-v-beb74296]{font-size:1.8rem;font-weight:400;line-height:2.4rem;font-family:"Montserrat","Helvetica Neue","Arial"}@media(max-width:767px){body[data-v-beb74296]{font-size:1.6rem;line-height:2.2rem}}._visually-h1[data-v-beb74296],h1[data-v-beb74296]{font-size:5.6rem;font-weight:500;line-height:6.8rem}@media(max-width:767px){._visually-h1[data-v-beb74296],h1[data-v-beb74296]{font-size:3.2rem;line-height:3.8rem}}._visually-h2[data-v-beb74296],h2[data-v-beb74296]{font-size:4rem;font-weight:600;line-height:4.8rem}@media(max-width:767px){._visually-h2[data-v-beb74296],h2[data-v-beb74296]{font-size:2.4rem;line-height:3.2rem}}._visually-h3[data-v-beb74296],h3[data-v-beb74296]{font-size:3.2rem;font-weight:600;line-height:4rem}@media(max-width:767px){._visually-h3[data-v-beb74296],h3[data-v-beb74296]{font-size:2rem;line-height:3rem}}._visually-h4[data-v-beb74296],h4[data-v-beb74296]{font-size:2.4rem;font-weight:600;line-height:3.2rem}@media(max-width:767px){._visually-h4[data-v-beb74296],h4[data-v-beb74296]{font-size:1.8rem;line-height:2.4rem}}._visually-h5[data-v-beb74296],h5[data-v-beb74296]{font-size:1.8rem;font-weight:600;line-height:2.2rem}@media(max-width:767px){._visually-h5[data-v-beb74296],h5[data-v-beb74296]{font-size:1.6rem;line-height:2rem}}.text-lead[data-v-beb74296]{font-size:1.8rem;font-weight:400;line-height:2.8rem}@media(max-width:767px){.text-lead[data-v-beb74296]{font-size:1.6rem;line-height:2.2rem}}.text-sm[data-v-beb74296]{font-size:1.4rem;font-weight:400;line-height:2rem}@media(max-width:767px){.text-sm[data-v-beb74296]{font-size:1.2rem;line-height:1.8rem}}.text-btn[data-v-beb74296]{font-size:1.6rem;font-weight:500;line-height:2.4rem}@media(max-width:767px){.text-btn[data-v-beb74296]{font-size:1.4rem;line-height:2.2rem}}.text-btn-sm[data-v-beb74296]{font-size:1.2rem;font-weight:500;line-height:2rem}@media(max-width:767px){.text-btn-sm[data-v-beb74296]{font-size:1rem;line-height:1.8rem}}.container[data-v-beb74296]{display:block;width:100%;margin:0 auto;max-width:128rem}@media(max-width:1024px){.container[data-v-beb74296]{max-width:calc(100% - 8rem)}}@media(max-width:767px){.container[data-v-beb74296]{max-width:calc(100% - 4rem)}}.app-section[data-v-beb74296]{margin-bottom:10rem}@media(max-width:1024px){.app-section[data-v-beb74296]{margin-bottom:8rem}}@media(max-width:767px){.app-section[data-v-beb74296]{margin-bottom:5.4rem}}.app-section._no-margin[data-v-beb74296]{margin-bottom:0}@media(max-width:1024px){.app-section._no-margin[data-v-beb74296]{margin-bottom:0}}@media(max-width:767px){.app-section._no-margin[data-v-beb74296]{margin-bottom:0}}.app-section__title[data-v-beb74296]{margin-bottom:4rem}@media(max-width:1024px){.app-section__title[data-v-beb74296]{margin-bottom:2.4rem}}@media(max-width:767px){.app-section__title[data-v-beb74296]{margin-bottom:1.6rem}}.services-list[data-v-beb74296]{position:relative;padding:5.2rem;background-color:#e8edf5;background-color:var(--head-background);border-radius:.8rem;overflow:hidden}@media(max-width:1024px){.services-list[data-v-beb74296]{padding:4rem}}@media(max-width:767px){.services-list[data-v-beb74296]{padding:2rem}}.services-list__img[data-v-beb74296]{position:absolute;right:-5%;bottom:-15%;max-height:100%;max-width:60%;-o-object-fit:contain;object-fit:contain}@media(max-width:1024px){.services-list__img[data-v-beb74296]{display:none}}.services-list__content[data-v-beb74296]{position:relative;z-index:2;max-width:70%}@media(max-width:1024px){.services-list__content[data-v-beb74296]{max-width:none}}.services-list__title[data-v-beb74296]{margin-bottom:2.4rem}@media(max-width:767px){.services-list__title[data-v-beb74296]{margin-bottom:1.6rem}}.services-list__list[data-v-beb74296]{-moz-columns:2;column-count:2}@media(max-width:1024px){.services-list__list[data-v-beb74296]{-moz-columns:1;column-count:1}}.services-list__list-item[data-v-beb74296]:not(:last-child){margin-bottom:1.2rem}@media(max-width:1024px){.services-list__list-item[data-v-beb74296]:not(:last-child){margin-bottom:.8rem}}.services-list__list-item[data-v-beb74296]:before{display:inline-block;margin-right:1rem;margin-bottom:3px;width:.5rem;height:.5rem;border-radius:50%;background-color:#ca354a;background-color:var(--primary-color);content:""}@media(max-width:767px){.services-list__list-item[data-v-beb74296]{margin-top:.8rem}}',""]),t.exports=d},371:function(t,e,o){"use strict";o(362)},372:function(t,e,o){var d=o(26)(!1);d.push([t.i,'*[data-v-1632b49c],[data-v-1632b49c]:after,[data-v-1632b49c]:before{box-sizing:border-box;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}body[data-v-1632b49c],html[data-v-1632b49c]{overscroll-behavior-y:none;background:#fff;background:var(--app-background)}body[data-v-1632b49c]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2e3146;color:var(--text-color)}body[data-v-1632b49c]::-webkit-scrollbar{width:5px}body[data-v-1632b49c]::-webkit-scrollbar-track{background:transparent}body[data-v-1632b49c]::-webkit-scrollbar-thumb{border-radius:10px;background-color:rgba(0,0,0,.7)}html[data-v-1632b49c]{--app-background:#fff;--border-color:#dadde5;--divider-color:#d3d7e0;--head-background:#e8edf5;--element-background:#f5f5f5;--element-disabled-color:#d3d7e0;--element-disabled-2-color:#46495e;--element-disabled-lighten-color:#eaecf0;--text-color:#2e3146;--text-lighten-color:#71809b;--text-disabled-color:#a2acbe;--text-contrast-color:#fff;--primary-color:#ca354a;--primary-lighten-color:#dc475c;--primary-darken-color:#a51c30;--accent-color:#2e3146;--accent-lighten-color:#71809b;--selection-color:#000;--selection-background:#fff;--error-page-background:#e5e5e5;--error-page-icon-color:#ccc;--error-page-text-color:#4c4c4c;--error-page-tip-color:#4c4c4c;--loading-text-color:#000;--loading-background:#fff;--input-error-border-color:#c93239;--input-disabled-color:#a0a0a0;--input-disabled-background-2:hsla(0,0%,60%,0.12);--input-disabled-background:#d56070;--input-contrast-hover-border:hsla(0,0%,100%,0.4);font-size:62.5%!important;--window-height:100vh}@media screen and (max-width:767px){html[data-v-1632b49c]{font-size:calc(-.90604px + 2.90828vw)!important}}@media screen and (min-width:768px)and (max-width:1023px){html[data-v-1632b49c]{font-size:calc(-2.04706px + 1.56863vw)!important}}@media(min-width:1024px)and (max-width:1440px){html[data-v-1632b49c]{font-size:calc(3.07692px + .48077vw)!important}}@media(min-width:1441px)and (max-width:1920px){html[data-v-1632b49c]{font-size:calc(1.9833px + .41754vw)!important}}#app[data-v-1632b49c]{overflow-x:hidden;min-height:100vh}#app[data-v-1632b49c],#app-content[data-v-1632b49c]{display:flex;flex-direction:column}#footer[data-v-1632b49c],#header[data-v-1632b49c]{flex-shrink:0}#main[data-v-1632b49c]{flex:1 0 auto;padding-top:var(--main-gutter)}img[data-v-1632b49c]{display:block}a[data-v-1632b49c],button[data-v-1632b49c]{cursor:pointer}ol[data-v-1632b49c],ul[data-v-1632b49c]{margin:0;padding:0;list-style:none}a[data-v-1632b49c]{color:currentColor;text-decoration:none}h1[data-v-1632b49c],h2[data-v-1632b49c],h3[data-v-1632b49c],h4[data-v-1632b49c],h5[data-v-1632b49c],h6[data-v-1632b49c],p[data-v-1632b49c]{margin:0}address[data-v-1632b49c]{font-style:normal}button[data-v-1632b49c]{padding:0;border:0;background:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}body[data-v-1632b49c]{font-size:1.8rem;font-weight:400;line-height:2.4rem;font-family:"Montserrat","Helvetica Neue","Arial"}@media(max-width:767px){body[data-v-1632b49c]{font-size:1.6rem;line-height:2.2rem}}._visually-h1[data-v-1632b49c],h1[data-v-1632b49c]{font-size:5.6rem;font-weight:500;line-height:6.8rem}@media(max-width:767px){._visually-h1[data-v-1632b49c],h1[data-v-1632b49c]{font-size:3.2rem;line-height:3.8rem}}._visually-h2[data-v-1632b49c],h2[data-v-1632b49c]{font-size:4rem;font-weight:600;line-height:4.8rem}@media(max-width:767px){._visually-h2[data-v-1632b49c],h2[data-v-1632b49c]{font-size:2.4rem;line-height:3.2rem}}._visually-h3[data-v-1632b49c],h3[data-v-1632b49c]{font-size:3.2rem;font-weight:600;line-height:4rem}@media(max-width:767px){._visually-h3[data-v-1632b49c],h3[data-v-1632b49c]{font-size:2rem;line-height:3rem}}._visually-h4[data-v-1632b49c],h4[data-v-1632b49c]{font-size:2.4rem;font-weight:600;line-height:3.2rem}@media(max-width:767px){._visually-h4[data-v-1632b49c],h4[data-v-1632b49c]{font-size:1.8rem;line-height:2.4rem}}._visually-h5[data-v-1632b49c],h5[data-v-1632b49c]{font-size:1.8rem;font-weight:600;line-height:2.2rem}@media(max-width:767px){._visually-h5[data-v-1632b49c],h5[data-v-1632b49c]{font-size:1.6rem;line-height:2rem}}.text-lead[data-v-1632b49c]{font-size:1.8rem;font-weight:400;line-height:2.8rem}@media(max-width:767px){.text-lead[data-v-1632b49c]{font-size:1.6rem;line-height:2.2rem}}.text-sm[data-v-1632b49c]{font-size:1.4rem;font-weight:400;line-height:2rem}@media(max-width:767px){.text-sm[data-v-1632b49c]{font-size:1.2rem;line-height:1.8rem}}.text-btn[data-v-1632b49c]{font-size:1.6rem;font-weight:500;line-height:2.4rem}@media(max-width:767px){.text-btn[data-v-1632b49c]{font-size:1.4rem;line-height:2.2rem}}.text-btn-sm[data-v-1632b49c]{font-size:1.2rem;font-weight:500;line-height:2rem}@media(max-width:767px){.text-btn-sm[data-v-1632b49c]{font-size:1rem;line-height:1.8rem}}.container[data-v-1632b49c]{display:block;width:100%;margin:0 auto;max-width:128rem}@media(max-width:1024px){.container[data-v-1632b49c]{max-width:calc(100% - 8rem)}}@media(max-width:767px){.container[data-v-1632b49c]{max-width:calc(100% - 4rem)}}.app-section[data-v-1632b49c]{margin-bottom:10rem}@media(max-width:1024px){.app-section[data-v-1632b49c]{margin-bottom:8rem}}@media(max-width:767px){.app-section[data-v-1632b49c]{margin-bottom:5.4rem}}.app-section._no-margin[data-v-1632b49c]{margin-bottom:0}@media(max-width:1024px){.app-section._no-margin[data-v-1632b49c]{margin-bottom:0}}@media(max-width:767px){.app-section._no-margin[data-v-1632b49c]{margin-bottom:0}}.app-section__title[data-v-1632b49c]{margin-bottom:4rem}@media(max-width:1024px){.app-section__title[data-v-1632b49c]{margin-bottom:2.4rem}}@media(max-width:767px){.app-section__title[data-v-1632b49c]{margin-bottom:1.6rem}}.text-content p[data-v-1632b49c]:not(:last-child){margin-bottom:1.2rem}@media(max-width:1024px){.text-content p[data-v-1632b49c]:not(:last-child){margin-bottom:.8rem}}',""]),t.exports=d},412:function(t,e,o){"use strict";o.r(e);var d=o(359),r=o(360),n=o(363),c=o(364),m={components:{PageHead:d.default,QuestionForm:r.default,ServicesList:n.default,TextBlock:c.default},data:function(){return{services:["Консультирование по&nbsp;административным делам;","Подготовка письменных возражений;","Оказание защиты в&nbsp;суде первой, апелляционной, кассационной, надзорной инстанций;","Подготовка ходатайств, жалоб;","Жалобы на&nbsp;действия государственного органа;","И&nbsp;защита по&nbsp;другим конфликтным ситуациям."]}}},l=o(13),component=Object(l.a)(m,(function(){var t=this,e=t._self._c;return e("main",{attrs:{id:"main"}},[e("div",{staticClass:"app-section"},[e("PageHead",{attrs:{img:"administrative-matters.jpg",title:"Защита по административным делам"}})],1),t._v(" "),e("div",{staticClass:"app-section"},[e("TextBlock",[e("p",[t._v("Каждый человек хоть в раз жизни совершал административное правонарушение. Никто не застрахован от того,\n        что в любой момент можно стать свидетелем или потерпевшим административного правонарушения.")]),t._v(" "),e("p",[t._v("Адекватно и правильно оценить сложившуюся ситуацию поможет юрист по административным делам, который\n        познакомится с Вашими документами, проанализирует ситуацию, доказательства и выработает\n        соответствующую правовую позицию по делу.")])])],1),t._v(" "),e("div",{staticClass:"app-section"},[e("ServicesList",{attrs:{title:" Мария Владимировна может оказать Вам следующую юридическую помощь:",services:t.services}})],1),t._v(" "),e("div",{staticClass:"app-section"},[e("QuestionForm")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHead:o(359).default,TextBlock:o(364).default,ServicesList:o(363).default,QuestionForm:o(360).default})}}]);