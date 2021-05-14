<template>
  <div>
    <q-btn
      @click="isClicked"
      dense
      flat
      icon="notifications"
      style="color: #f2931e"
    >
      <q-badge color="red-9" floating transparent v-if="count > 0">
        <span ref="count">{{ count }}</span>
      </q-badge>
      <q-menu content-class="bg-grey-12 blue-grey-10" fit>
        <q-list>
          <div v-if="notifications.length > 0">
            <template v-for="notification in notifications">
              <q-item :key="notification.id" clickable v-close-popup>
                <q-item-section>
                  <q-item-label>
                    <strong>{{ notification.type.description }}</strong>
                    <span class="float-right text-white text-caption">
                      {{ notification.date_created }}
                    </span>
                  </q-item-label>
                  <q-item-label caption>
                    <span class="text-white">
                      {{ notification.body }}
                    </span>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </div>
          <div v-else>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>
                  <strong>No new notification(s)</strong>
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
export default {
  name: "Notification",
  data() {
    return {
      count: null,
      param: {
        view: ""
      },
      view: "",
      notifications: []
    };
  },
  created() {},
  methods: {
    fetchNotifications() {},
    isClicked() {
      this.view = "yes";
      this.count = 0;
    }
  }
};
</script>

<style scoped></style>
