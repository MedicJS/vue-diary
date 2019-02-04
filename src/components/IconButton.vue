<template>
  <v-button>
    <v-icon
      class="icon"
      :name="icon"
      inverse
      :spin="spin"
      scale="1"
    ></v-icon>
  </v-button>
</template>

<script>
import Button from "./Button";
import Icon from "vue-awesome/components/Icon";

export default {
  components: {
    "v-button": Button,
    "v-icon": Icon
  },
  props: ["icon", "spin"]
};
</script>

<style scoped>
.icon {
  vertical-align: middle;
  margin-top: -6px;
}
v-button {
  display: inline;
}
</style>