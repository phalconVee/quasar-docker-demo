<template>
  <div>
    <div class="header">
      <p class="heading">
        {{ header }}
      </p>
      <p>{{ subheader }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: ["header", "subheader"]
};
</script>

<style lang="scss" scoped>
.header {
  border-top: solid 1px #eee;
  border-bottom: solid 1px #eee;
  padding: 1em 0;

  p {
    margin-bottom: 0;
  }

  p:last-child {
    font-size: 14px;
  }
}

.heading {
  font-size: 21px;
  color: black;

  > i {
    margin-right: 5px;
  }
}
</style>
