<template>
  <q-page>
    <PageHeader
      header="Pay Bills"
      subheader="Renew your Pay TV, Internet, Electricity and so much more with Paga’s smooth bill payment service."
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
  name: "payments",
  components: { PageHeader }
};
</script>
