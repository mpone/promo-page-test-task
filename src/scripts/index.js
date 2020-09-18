'use strict';

// eslint-disable-next-line no-undef
Vue.component('main-page-form', {
  template: '#form-template',
  data() {
    return {
      name: null,
      email: null,
      tel: null,
      clientsList: [],
    };
  },
  methods: {
    submitForm() {
      this.clientsList = [
        ...this.clientsList,
        {
          id: this.clientsList.length + 1,
          name: this.name,
          email: this.email,
          tel: this.tel,
        },
      ];

      this.name = null;
      this.email = null;
      this.tel = null;
    },
  },
});

// eslint-disable-next-line no-undef
new Vue({ // eslint-disable-line no-new
  el: '#form',
});
