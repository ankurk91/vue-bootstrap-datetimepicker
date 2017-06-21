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
  window.jQuery = require('jquery');
  import 'eonasdan-bootstrap-datetimepicker';

  export default {
    props: {
      value: {
        // Don't validate
        default: null,
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
      // Store data dp
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
      }
    },
    watch: {
      /**
       * Listen to change from outside of component and update DOM
       * @param newValue
       */
      value(newValue){
        this.dp && this.dp.date(newValue)
      },
      /**
       * Watch for any change in options and set them
       * @param newConfig
       */
      config(newConfig){
        this.dp && this.dp.options(Object.assign(this.dp.options(), newConfig));
      }
    },
    methods: {
      /**
       * Update v-model upon change triggered by date-picker itself
       *
       * @param event
       */
      onChange(event){
        this.$emit('input', event.date);
      }
    }
  };
</script>
