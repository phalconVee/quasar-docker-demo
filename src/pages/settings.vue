<template>
  <q-page>
    <PageHeader
      header="Account Settings"
      subheader="View/Edit your basic account settings"
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
  name: "settings",
  components: { PageHeader }
};
</script>
