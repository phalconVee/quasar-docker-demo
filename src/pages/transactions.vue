<template>
  <q-page>
    <PageHeader
      header="Transactions"
      subheader="View individual activities &amp; transactions history."
    />

    <div class="main q-gutter-y-md">
      <div class="q-px-md q-pb-xl q-pt-lg">
        <router-view :key="$route.fullPath" />
      </div>
    </div>
  </q-page>
</template>

<script>
const PageHeader = () => import("../components/PageHeader");

export default {
  name: "transactions",
  components: { PageHeader }
};
</script>
