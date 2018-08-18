<template>
  <section class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <span class="navbar-brand mb-0">Vue.js datetime picker Demo</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mobile-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="https://www.npmjs.com/package/vue-bootstrap-datetimepicker"
               target="_blank"> npm</a></li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/ankurk91/vue-bootstrap-datetimepicker"
               target="_blank"> Github</a></li>
        </ul>
      </div>
    </nav>
    <p class="mb-2"></p>

    <div class="row">
      <div class="col-md-8">

        <form class="mb-2 form-inline">
          <button type="button" class="btn btn-secondary mr-2" @click.prevent="setNewValue()">
            Set new value pragmatically
          </button>
          <button type="button" class="btn btn-secondary mx-2" @click.prevent="updateConfig()">
            Reactive configs (Change viewMode)
          </button>
        </form>

        <form class="card card-body" method="post" action="/" @submit.prevent="submit()">

          <div class="form-group">
            <label>Select date (basic)</label>
            <date-picker v-model="form.date" :config="configs.basic" @dp-change="listenToChangeEvent"></date-picker>
          </div>

          <div class="form-group">
            <label for="date-time-input">Select date time (wrap)</label>
            <div class="input-group">
              <date-picker v-model="form.dateWrap" id="date-time-input"
                           :wrap="true" :config="configs.wrap">
              </date-picker>
              <div class="input-group-append">
                <button class="btn btn-secondary datepickerbutton" type="button" title="Toggle">
                  <i class="far fa-calendar"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>Select time</label>
            <div class="input-group">
              <date-picker :config="configs.timePicker" v-model="form.time" :wrap="true"
                           placeholder="Time"></date-picker>
              <div class="input-group-append">
                <button class="btn btn-primary datepickerbutton" type="button" title="Toggle">
                  <i class="far fa-clock"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="form-group" :class="{'has-error' : errors.has('date-of-purchase')}">
            <label>Select date (vee-validate)</label>
            <date-picker v-model="form.dateValidate"
                         name="date-of-purchase"
                         v-validate="{required:true}"
                         placeholder="Date of purchase"
                         :class="{'is-invalid' : errors.has('date-of-purchase')}"
            ></date-picker>
            <span v-show="errors.has('date-of-purchase')"
                  class="invalid-feedback">{{ errors.first('date-of-purchase') }}</span>
          </div>

          <div class="form-group">
            <label>Works in modals as well </label>
            <button type="button" class="btn btn-info" data-toggle="modal"
                    data-target="#date-modal">
              Open in modal
            </button>
          </div>

          <div class="form-group">
            <label>Select date (localization)</label>
            <date-picker :config="configs.locale" v-model="form.dateLocale"></date-picker>
          </div>

          <div class="form-group">
            <label>Select date (inline)</label>
            <date-picker :config="configs.inline" v-model="form.dateInline"></date-picker>
            <p class="help-block">
              {{form.dateInline}}
            </p>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Start date</label>
                <date-picker v-model="form.startDate" :config="configs.start" ref="startDate"
                             @dp-change="onStartChange"></date-picker>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>End date</label>
                <date-picker v-model="form.endDate" :config="configs.end" ref="endDate"
                             @dp-change="onEndChange"></date-picker>
              </div>
            </div>
          </div>

          <hr>

          <div class="form-group">
            <button class="btn btn-primary" type="submit"><i class="glyphicon glyphicon-ok"></i> Validate form</button>
          </div>

        </form>
      </div>

      <aside class="col-md-4">
        <div class="card">
          <div class="card-header"> Links</div>
          <div class="card-body">
            <ul>
              <li><a href="https://github.com/ankurk91/vue-bootstrap-datetimepicker" target="_blank">Github</a></li>
              <li><a href="https://www.npmjs.com/package/vue-bootstrap-datetimepicker" target="_blank">npm</a></li>
              <li><a href="http://eonasdan.github.io/bootstrap-datetimepicker/" target="_blank">
                Bootstrap datetime picker
              </a></li>
              <li><a
                href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en"
                target="_blank">Vue.js Dev tools</a>
              </li>
              <li><a href="https://github.com/logaretm/vee-validate" target="_blank">vee-validate</a></li>
            </ul>
          </div>
        </div>
      </aside>
    </div>

    <!-- bs modal -->
    <div class="modal fade" tabindex="-1" role="dialog" id="date-modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal example</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Select a date</label>
              <date-picker v-model="form.dateModal"></date-picker>
            </div>
            <pre>{{form.dateModal}}</pre>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Save</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  import Vue from 'vue';

  import datePicker from '../src/index';
  import moment from 'moment';
  import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

  // Using font-awesome 5 icons
  import '@fortawesome/fontawesome-free/css/fontawesome.css';
  import '@fortawesome/fontawesome-free/css/regular.css';
  import '@fortawesome/fontawesome-free/css/solid.css';

  jQuery.extend(true, jQuery.fn.datetimepicker.defaults, {
    icons: {
      time: 'far fa-clock',
      date: 'far fa-calendar',
      up: 'fas fa-arrow-up',
      down: 'fas fa-arrow-down',
      previous: 'fas fa-chevron-left',
      next: 'fas fa-chevron-right',
      today: 'fas fa-calendar-check',
      clear: 'far fa-trash-alt',
      close: 'far fa-times-circle'
    }
  });

  export default {
    name: 'app',
    data() {
      return {
        form: {
          date: new Date(),
          dateWrap: null,
          dateModal: moment(),
          dateValidate: null,
          time: null,
          dateLocale: moment(),
          dateInline: moment().toString(),
          startDate: null,
          endDate: null
        },
        configs: {
          basic: {
            // https://momentjs.com/docs/#/displaying/format/
            format: 'DD/MM/YYYY'
          },
          wrap: {
            allowInputToggle: true
          },
          timePicker: {
            format: 'LT',
            useCurrent: false
          },
          locale: {
            // https://github.com/moment/moment/tree/develop/locale
            locale: 'hi',
          },
          inline: {
            format: 'LLL',
            inline: true,
            sideBySide: true
          },
          start: {
            format: 'DD/MM/YYYY',
            useCurrent: false,
            showClear: true,
            showClose: true,
            minDate: moment(),
            maxDate: false
          },
          end: {
            format: 'DD/MM/YYYY',
            useCurrent: false,
            showClear: true,
            showClose: true,
            minDate: moment()
          }
        },
      }
    },
    components: {
      datePicker
    },
    methods: {
      submit() {
        console.log('Form submit event');
        console.log(this.form);
        // http://vee-validate.logaretm.com/examples.html#component-example
        this.$validator.validateAll().then(result => {
          // eslint-disable-next-line
          alert(`Validation Result: ${result}`);
        });
      },
      setNewValue() {
        console.log('Set new value');
        // https://momentjs.com/docs/#/manipulating/
        this.form.date = moment().add(7, 'days');
      },
      updateConfig() {
        console.log('Update config');
        // Right way to update config
        this.$set(this.configs.basic, 'viewMode', 'years');
      },
      listenToChangeEvent(...args) {
        console.log('listen To dp.change event - ', ...args);
      },
      onStartChange(e) {
        console.log('onStartChange', e.date);
        this.$set(this.configs.end, 'minDate', e.date || null);
      },
      onEndChange(e) {
        console.log('onEndChange', e.date);
        this.$set(this.configs.start, 'maxDate', e.date || null);
      }
    },
  }
</script>
