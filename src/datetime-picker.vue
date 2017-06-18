<template>

  <input type="text"
         class="form-control input"
         :class="inputClass"
         :name="inputName"
         :placeholder="placeholder"
         :required="required"
         :readOnly="readOnly"
         :disabled="disabled">

</template>

<script type="text/javascript">
  window.$ = window.jQuery = require('jquery');
  import 'eonasdan-bootstrap-datetimepicker';

  export default {
    props: {
      value: {
        // Don't validate
        value: null,
        required: true
      },
      // http://eonasdan.github.io/bootstrap-datetimepicker/Options/
      config: {
        type: Object,
        default: () => ({})
      },
      placeholder: {
        type: String,
        default: 'Pick a date'
      },
      inputClass: {
        type: [String, Object],
        default: ''
      },
      inputName: {
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
      wrap: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        control: null,
      };
    },
    mounted () {
      // Return early if date-picker is already loaded
      if (this.control) return;
      // Handle wrapped input
      let elem = this.wrap ? this.$el.parentNode : this.$el;
      // Cache DOM
      let $elem = jQuery(elem);
      // Init date-picker
      $elem.datetimepicker(this.config);
      // Store data control
      this.control = $elem.data('DateTimePicker');
      // Set initial value
      this.control.date(this.value);
      // Watch for changes
      $elem.on('dp.change', (event) => {
        this.$emit('input', event.date);
      });
    },
    beforeDestroy () {
      // Free up memory
      if (this.control) {
        this.control.destroy();
      }
    },
    watch: {
      /**
       * Listen to change from outside of component and update DOM
       * @param newValue
       */
      value(newValue){
        this.control && this.control.date(newValue)
      }
    }
  };
</script>
