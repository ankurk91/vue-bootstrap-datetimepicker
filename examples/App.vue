<template>
  <section class="container">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Vue.js datetime picker Demo</a>
        </div>

        <ul class="nav navbar-nav navbar-right">
          <li><a href="https://www.npmjs.com/package/vue-bootstrap-datetimepicker" target="_blank"> npm</a></li>
          <li><a href="https://github.com/ankurk91/vue-bootstrap-datetimepicker" target="_blank"> Github</a></li>
        </ul>
      </div>
    </nav>

    <div class="row">
      <div class="col-md-8">

        <div class="row">
          <div class="col-md-12">
            <button class="btn btn-default" @click.prevent="setNewValue()">Set new value pragmatically</button>
            <button class="btn btn-default" @click.prevent="updateConfig()">Reactive configs (Change viewMode)
            </button>
          </div>
        </div>

        <form method="post" action="/" @submit.prevent="submit()">

          <div class="form-group">
            <label>Select date (basic)</label>
            <date-picker v-model="form.date" :config="configs.basic" @dp-change="listenToChangeEvent"></date-picker>
          </div>

          <div class="form-group">
            <label for="date-time-input">Select date time (wrap)</label>
            <div class="input-group date">
              <date-picker v-model="form.date" id="date-time-input"
                           :wrap="true" :config="{allowInputToggle:true}">
              </date-picker>
              <div class="input-group-addon">
                <span class="glyphicon glyphicon-calendar"></span>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>Select time</label>
            <div class="input-group">
              <date-picker :config="configs.timePicker" v-model="form.time" :wrap="true"
                           placeholder="Time"></date-picker>
              <div class="input-group-addon">
                <span class="glyphicon glyphicon-time"></span>
              </div>
            </div>
          </div>

          <div class="form-group" :class="{'has-error' : errors.has('date-of-purchase')}">
            <label>Select date (vee-validate)</label>
            <date-picker v-model="form.dateValidate"
                         name="date-of-purchase"
                         v-validate="{required:true}"
                         placeholder="Date of purchase"
            ></date-picker>
            <span v-show="errors.has('date-of-purchase')"
                  class="help-block">{{ errors.first('date-of-purchase') }}</span>
          </div>

          <div class="form-group">
            <label>Works in modals as well </label>
            <button type="button" class="btn btn-info" data-toggle="modal" data-target="#date-modal">Open in
              modal


            </button>
          </div>

          <div class="form-group">
            <label>Select date (localization)</label>
            <date-picker :config="configs.locale" v-model="form.dateLocale"></date-picker>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Start date</label>
                <date-picker v-model="form.startDate" :config="configs.range" ref="startDate"></date-picker>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>End date</label>
                <date-picker v-model="form.endDate" :config="configs.range" ref="endDate"></date-picker>
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
        <div class="panel panel-info">
          <div class="panel-heading"> Links</div>
          <div class="panel-body">
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
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
              aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Modal example</h4>
          </div>
          <div class="modal-body">
            <form method="post" action="/" onsubmit="return false">
              <div class="form-group">
                <label>Select a date</label>
                <date-picker v-model="form.dateModal"></date-picker>
              </div>
              <pre>{{form.dateModal}}</pre>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">Save</button>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script type="text/javascript">
  import Vue from 'vue';

  import datePicker from '../src/index';
  import moment from 'moment';
  import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';

  export default {
    name: 'app',
    data() {
      return {
        form: {
          date: new Date(),
          dateModal: moment(),
          dateValidate: null,
          time: null,
          dateLocale: moment(),
          startDate: null,
          endDate: null
        },
        configs: {
          basic: {
            // https://momentjs.com/docs/#/displaying/format/
            format: 'DD/MM/YYYY'
          },
          timePicker: {
            format: 'LT',
            useCurrent: false
          },
          locale: {
            // https://github.com/moment/moment/tree/develop/locale
            locale: 'hi',
          },
          range: {
            format: 'DD/MM/YYYY',
            useCurrent: false,
            showClear: true,
            showClose: true,
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
      }
    },
    mounted() {
      // Linked Pickers example
      // Don't forget to remove events on beforeDestroy
      let $startDate = $(this.$refs.startDate.$el);
      let $endDate = $(this.$refs.endDate.$el);

      $startDate.on('dp.change', (e) => {
        console.log('start dp.change', e, e.date);
        $endDate.data('DateTimePicker').minDate(e.date || null);
      });

      $endDate.on('dp.change', (e) => {
        console.log('end dp.change', e, e.date);
        $startDate.data('DateTimePicker').maxDate(e.date || null);
      });
    }
  }
</script>
