<template>
  <div>
    <nprogress-container></nprogress-container>
    <q-layout view="hHh lpR fFf">
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import NprogressContainer from "vue-nprogress/src/NprogressContainer";

export default {
  components: {
    NprogressContainer
  }
};
</script>

<style scoped>
.q-page-container {
  margin: -2em;
}
</style>
