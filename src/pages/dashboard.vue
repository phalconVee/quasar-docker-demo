<template>
  <q-page>
    <PageHeader
      header="Dashboard"
      subheader="Activity Summary &amp; Account Status"
    />

    <div class="main q-gutter-y-md">
      <div class="q-px-md q-pb-xl">
        <div class="q-page-container">
          <div class="empty_state">
            <q-img
              src="visuals/wallet_activity.svg"
              spinner-color="white"
              style="height: 98px; max-width: 166px"
            />

            <span class="q-mt-md text-subtitle1"
              >This is where you'll see your activity and transactions. Choose
              how you'd like to get started.</span
            >

            <div class="q-pa-md q-gutter-sm">
              <q-btn
                rounded
                filled
                no-caps
                class="btn-primary"
                color="primary"
                label="Send Money"
                @click="prompt = true"
              />
              <q-btn
                rounded
                filled
                no-caps
                class="btn-primary"
                color="primary"
                label="Receive Money"
              />
              <q-btn
                rounded
                filled
                no-caps
                class="btn-primary"
                color="primary"
                label="Pay With QR Codes"
              />

              <q-dialog v-model="prompt" persistent>
                <q-card style="min-width: 350px">
                  <q-card-section>
                    <div class="text-h6 text-black text-center q-pa-sm">
                      How much to send?
                    </div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    <q-input
                      dense
                      v-model="amount"
                      autofocus
                      @keyup.enter="prompt = false"
                    >
                      <template v-slot:prepend>
                        <span class="subtitle1">&#8358;</span>
                      </template>
                    </q-input>
                  </q-card-section>

                  <q-card-actions align="right" class="text-primary">
                    <q-btn no-caps flat label="Cancel" v-close-popup />
                    <q-btn
                      no-caps
                      filled
                      color="primary"
                      label="Send"
                      v-close-popup
                    />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
const PageHeader = () => import("../components/PageHeader");

export default {
  name: "dashboard",
  components: {
    PageHeader
  },
  data() {
    return {
      prompt: false,
      amount: 0.0
    };
  }
};
</script>

<style type="text/css" scoped>
.empty_state {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 6em;
}
</style>
