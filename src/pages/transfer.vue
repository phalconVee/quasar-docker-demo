<template>
  <q-page>
    <PageHeader
      header="Transfer Money"
      subheader="Send money instantly to anyone with a phone number, email address or bank account."
    />

    <div class="main q-gutter-y-md">
      <div class="q-pb-xl q-pt-lg">
        <router-view :key="$route.fullPath" />
      </div>
    </div>
  </q-page>
</template>

<script>
const PageHeader = () => import("../components/PageHeader");

export default {
  name: "transfer",
  components: { PageHeader }
};
</script>
