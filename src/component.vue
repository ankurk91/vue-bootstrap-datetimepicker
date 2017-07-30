<template>

  <input type="text"
         class="form-control input"
         :class="inputClass"
         :id="id"
         :name="name"
         :placeholder="placeholder"
         :required="required"
         :readOnly="readOnly"
         :disabled="disabled">

</template>

<script type="text/javascript">
  const jQuery = window.jQuery || require("jquery");
  const moment = window.moment || require("moment");

  import 'eonasdan-bootstrap-datetimepicker';
  // You have to import css yourself

  export default {
    props: {
      value: {
        default: null,
        required: true,
        validator (value) {
          return value === null || value instanceof Date || typeof value === 'string' || value instanceof String || value instanceof moment
        }
      },
      // http://eonasdan.github.io/bootstrap-datetimepicker/Options/
      config: {
        type: Object,
        default: () => ({})
      },
      placeholder: {
        type: String,
        default: ''
      },
      inputClass: {
        type: [String, Object],
        default: ''
      },
      name: {
        type: String,
        default: 'datetime'
      },
      required: {
        type: Boolean,
        default: false
      },
      readOnly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      /**
       * You can to set this to true when component is wrapped in input-group
       */
      wrap: {
        type: Boolean,
        default: false
      },
      id: {
        type: String
      },
    },
    data () {
      return {
        dp: null,
      };
    },
    mounted () {
      // Return early if date-picker is already loaded
      if (this.dp) return;
      // Handle wrapped input
      let elem = this.wrap ? this.$el.parentNode : this.$el;
      // Cache DOM
      let $elem = jQuery(elem);
      // Init date-picker
      $elem.datetimepicker(this.config);
      // Store data control
      this.dp = $elem.data('DateTimePicker');
      // Set initial value
      this.dp.date(this.value);
      // Watch for changes
      $elem.on('dp.change', this.onChange);
    },
    beforeDestroy () {
      // Free up memory
      if (this.dp) {
        this.dp.destroy();
        this.dp = null;
      }
    },
    watch: {
      /**
       * Listen to change from outside of component and update DOM
       *
       * @param newValue
       */
      value (newValue) {
        this.dp && this.dp.date(newValue)
      },

      /**
       * Watch for any change in options and set them
       *
       * @param newConfig Object
       */
      config (newConfig) {
        this.dp && this.dp.options(Object.assign(this.dp.options(), newConfig));
      }
    },
    methods: {
      /**
       * Update v-model upon change triggered by date-picker itself
       *
       * @param event
       */
      onChange (event) {
        this.$emit('input', event.date);
      }
    }
  };
</script>
