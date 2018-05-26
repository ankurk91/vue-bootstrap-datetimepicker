<template>

  <div class="datetimepicker-inline" v-if="config.inline"></div>
  <input type="text" class="form-control" v-else>

</template>

<script>
  import jQuery from 'jquery';
  import moment from 'moment';

  import 'pc-bootstrap4-datetimepicker';
  // You have to import css yourself

  // Events list without prefix
  // http://eonasdan.github.io/bootstrap-datetimepicker/Events/
  const events = ['hide', 'show', 'change', 'error', 'update'];

  export default {
    name: 'date-picker',
    props: {
      value: {
        default: null,
        required: true,
        validator(value) {
          return value === null || value instanceof Date || typeof value === 'string' || value instanceof String || value instanceof moment
        }
      },
      // http://eonasdan.github.io/bootstrap-datetimepicker/Options/
      config: {
        type: Object,
        default: () => ({})
      },
      /**
       * You can set this to true when component is wrapped in input-group
       * Note: inline and wrap mode wont work together
       */
      wrap: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        dp: null,
        // jQuery DOM
        elem: null
      };
    },
    mounted() {
      // Return early if date-picker is already loaded
      /* istanbul ignore if */
      if (this.dp) return;
      // Handle wrapped input
      this.elem = jQuery(this.wrap ? this.$el.parentNode : this.$el);
      // Init date-picker
      this.elem.datetimepicker(this.config);
      // Store data control
      this.dp = this.elem.data('DateTimePicker');
      // Set initial value
      this.dp.date(this.value);
      // Watch for changes
      this.elem.on('dp.change', this.onChange);
      // Register remaining events
      this.registerEvents();
    },
    watch: {
      /**
       * Listen to change from outside of component and update DOM
       *
       * @param newValue
       */
      value(newValue) {
        this.dp && this.dp.date(newValue || null)
      },

      /**
       * Watch for any change in options and set them
       *
       * @param newConfig Object
       */
      config: {
        deep: true,
        handler(newConfig) {
          this.dp && this.dp.options(newConfig);
        }
      }
    },
    methods: {
      /**
       * Update v-model upon change triggered by date-picker itself
       *
       * @param event
       */
      onChange(event) {
        let formattedDate = event.date ? event.date.format(this.dp.format()) : null;
        this.$emit('input', formattedDate);
      },

      /**
       * Emit all available events
       */
      registerEvents() {
        events.forEach((name) => {
          this.elem.on(`dp.${name}`, (...args) => {
            this.$emit(`dp-${name}`, ...args);
          });
        })
      }
    },
    /**
     * Free up memory
     */
    beforeDestroy() {
      /* istanbul ignore else */
      if (this.dp) {
        this.dp.destroy();
        this.dp = null;
        this.elem = null;
      }
    },
  };
</script>
