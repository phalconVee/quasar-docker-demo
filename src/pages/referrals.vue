<template>
  <q-page>
    <PageHeader
      header="Referrals"
      subheader="Share your referral link with friends and get N1000 when they sign up and fund their paga wallet or make any transactions."
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
  name: "referrals",
  components: { PageHeader }
};
</script>

<style scoped></style>
