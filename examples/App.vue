<template>
  <section class="container">
    <h1 class="page-header">Vue.js bootstrap datetime picker examples</h1>
    <div class="row">
      <div class="col-md-8">
        <form method="post" action="/" @submit.prevent="submit()">

          <button class="btn btn-default" @click.prevent="setNewValue()">Set new value</button>

          <div class="form-group">
            <label>Select date (basic)</label>
            <date-picker v-model="form.date" :config="configs.basic"></date-picker>
          </div>

          <div class="form-group">
            <label>Select date time (wrap)</label>
            <div class="input-group date">
              <date-picker v-model="form.date"
                           :wrap="true">
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
                         data-vv-name="date-of-purchase"
                         v-validate="{required:true}"
                         placeholder="Date of purchase"
            ></date-picker>
            <span v-show="errors.has('date-of-purchase')"
                  class="help-block">{{ errors.first('date-of-purchase') }}</span>
          </div>

          <div class="form-group">
            <label>Works in modals as well </label>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#date-modal">Open in
              modal
            </button>
          </div>

          <div class="form-group">
            <label>Select date (localization)</label>
            <date-picker :config="configs.locale" v-model="form.dateLocale"></date-picker>
          </div>

          <hr>
          <button class="btn btn-primary" type="submit">Validate form</button>

        </form>
      </div>

      <aside class="col-md-4">
        <div class="panel panel-info">
          <div class="panel-heading"> Links</div>
          <div class="panel-body">
            <ul>
              <li><a href="https://github.com/ankurk91/vue-bootstrap-datetimepicker" target="_blank">Github</a></li>
              <li><a href="http://eonasdan.github.io/bootstrap-datetimepicker/" target="_blank">
                Bootstrap datetime picker
              </a></li>
              <li><a
                href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en"
                rel="noreferrer" target="_blank">Vue.js Dev tools</a></li>
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
  import datePicker from '../src/index';
  import 'moment';
  import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';

  export default {
    name: 'app',
    data (){
      return {
        form: {
          date: new Date(),
          dateModal: moment(),
          dateValidate: null,
          time: null,
          dateLocale: null,
        },
        configs: {
          basic: {
            format: 'DD/MM/YYYY'
          },
          timePicker: {
            format: 'LT'
          },
          locale: {
            locale: 'hi'
          }
        },
      }
    },
    components: {
      datePicker
    },
    methods: {
      submit () {
        console.log('Form submit event');
        console.log(this.form);
        // http://vee-validate.logaretm.com/examples.html#component-example
        this.$validator.validateAll().then(result => {
          // eslint-disable-next-line
          alert(`Validation Result: ${result}`);
        });
      },
      setNewValue(){
        // https://momentjs.com/docs/#/manipulating/
        this.form.date = moment().add(7, 'days');
      }
    }
  }
</script>
