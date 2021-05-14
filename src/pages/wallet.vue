<template>
  <q-page>
    <PageHeader
      header="Wallet"
      subheader="Fund your wallet and perform mobile money transactions from your dashboard"
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
  name: "wallet",
  components: { PageHeader }
};
</script>
