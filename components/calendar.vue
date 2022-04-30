<template>
  <Calendar is-expanded :attributes="attrs" />
  <!-- <DatePicker v-model="date" /> -->
</template>
<script>
import { Calendar, DatePicker } from "v-calendar";

export default {
  components: {
    Calendar,
    DatePicker,
  },
  data() {
    return {
      // date: new Date(),
      attrs: [
        {
          key: "today",
          // dot: true,
          highlight: true,
          dates: new Date(),
          // popover: {
          //   label: "メッセージを表示できます",
          // },
        },
      ],
    };
  },
};
</script>
