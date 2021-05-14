<template>
  <div>
    <nprogress-container></nprogress-container>
    <q-layout view="lHh Lpr lFf">
      <q-header>
        <q-toolbar>
          <q-btn
            @click="mainNavigation = !mainNavigation"
            aria-label="Menu"
            dense
            flat
            icon="menu"
            style="position: relative; top: -20px"
          />

          <div class="row q-px-lg q-py-lg no-wrap full-width">
            <Notification />

            <q-space />

            <div
              class="q-mr-lg text-deep-blue q-px-sm"
              style="font-size: 1.05em; cursor: pointer;
                                border: 1px solid #23303D;"
              @click="gotoWallet"
            >
              <div class="text-small">Paga Balance</div>
              <div class="font-bold">₦{{ wallet_balance | formatAmount }}</div>
            </div>

            <q-btn
              color="primary"
              rounded
              label="Add Cash"
              no-caps
              size="14px"
              @click="prompt = true"
            />

            <q-dialog v-model="prompt" persistent>
              <q-card style="min-width: 350px">
                <q-card-section>
                  <div class="text-h6 text-black text-center q-pa-sm">
                    Fund Paga Balance
                  </div>
                  <span class="caption">How much do you want to fund?</span>
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
                    label="Continue"
                    v-close-popup
                  />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </q-toolbar>
      </q-header>

      <q-drawer
        :breakpoint="905"
        :width="220"
        :content-style="{ backgroundColor: '#818598' }"
        show-if-above
        v-model="mainNavigation"
      >
        <div class="q-pt-lg q-pb-xl text-center">
          <q-img
            sizes="60px"
            spinner-color="white"
            src="logo/paga_logo_white.png"
            style="height: 34px; max-width: 124px;"
          />
        </div>

        <div class="q-pl-lg q-mb-lg">
          <p class="q-mb-xs">
            <strong class="text-white"> Welcome, Henry Ugochukwu</strong>
          </p>
          <p class="text-caption text-white">
            Account status:
            <q-badge transparent color="green"> Verified </q-badge>
          </p>
        </div>

        <q-list bordered dense class="text-white">
          <q-item clickable to="/dashboard">
            <q-item-section avatar>
              <q-icon name="fa fa-chart-line" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <q-list bordered dense class="text-white">
          <q-expansion-item
            expand-separator
            icon="fa fa-university"
            label="Transfer"
          >
            <q-list class="bg-grey-10">
              <q-item
                class="justify-center items-center"
                clickable
                to="/transfer/paga_me"
              >
                <q-item-section>
                  <q-item-label class="sub-item">To Self (PagaMe)</q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                class="justify-center items-center"
                to="/transfer/to_banks"
              >
                <q-item-section>
                  <q-item-label>To Banks</q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                class="justify-center items-center"
                to="/transfer/to_contacts"
              >
                <q-item-section>
                  <q-item-label>To Contacts</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
        </q-list>

        <q-list bordered dense class="text-white">
          <q-expansion-item
            expand-separator
            icon="fa fa-chart-pie"
            label="Payments"
          >
            <q-list class="bg-grey-10">
              <q-item
                class="justify-center items-center"
                clickable
                to="/payments/bills"
              >
                <q-item-section>
                  <q-item-label class="sub-item">Pay Bills</q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                class="justify-center items-center"
                clickable
                to="/payments/airtime"
              >
                <q-item-section>
                  <q-item-label>Buy Airtime</q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                class="justify-center items-center"
                clickable
                to="/payments/mobile_data"
              >
                <q-item-section>
                  <q-item-label>Buy Data</q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                class="justify-center items-center"
                clickable
                to="/payments/qr_code"
              >
                <q-item-section>
                  <q-item-label>Pay with QR Code</q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                class="justify-center items-center"
                clickable
                to="/payments/recurring_payments"
              >
                <q-item-section>
                  <q-item-label>Recurring Payments</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
        </q-list>

        <q-list bordered dense class="text-white">
          <q-item clickable to="/wallet">
            <q-item-section avatar>
              <q-icon name="fa fa-wallet" />
            </q-item-section>
            <q-item-section>
              <q-item-label>
                Wallet
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <q-list bordered dense class="text-white">
          <q-item clickable to="/transactions">
            <q-item-section avatar>
              <q-icon name="fa fa-exchange-alt" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Transactions</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <q-list bordered dense class="text-white">
          <q-item clickable to="/referrals">
            <q-item-section avatar>
              <q-icon name="fa fa-share-alt" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Referral</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <q-list bordered dense class="text-white">
          <q-item clickable to="/settings">
            <q-item-section avatar>
              <q-icon name="fa fa-cog" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Settings</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <!-- Support Button -->
        <div class="support-button text-center column">
          <q-btn
            @click="doLogout()"
            class="q-py-xs"
            color="primary"
            label="Log Out"
            rounded
            no-caps
          />
        </div>
      </q-drawer>

      <q-page-container>
        <router-view />

        <div class="text-center text-caption text-black">
          &copy;{{ new Date().getFullYear() }} | Pagatech Limited
        </div>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import NprogressContainer from "vue-nprogress/src/NprogressContainer";

const Notification = () => import("../components/Notification");

export default {
  name: "MyLayout",
  components: {
    NprogressContainer,
    Notification
  },
  data() {
    return {
      mainNavigation: false,
      available_balance: 20000,
      bonus_balance: 1250,
      prompt: false,
      amount: 0.0
    };
  },
  computed: {
    wallet_balance() {
      return (
        parseFloat(this.available_balance) + parseFloat(this.bonus_balance)
      );
    }
  },
  methods: {
    openUrl() {
      const link = "https://wa.me/2349082925456?text=Hello";
      window.open(encodeURI(link), "_blank");
    },
    doLogout() {
      this.$router.push("/");
    },
    gotoWallet() {}
  },
  filters: {
    formatAmount: function(amount) {
      if (isNaN(amount) || !amount) {
        return 0;
      }
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>

<style lang="scss" scoped>
.q-drawer {
  font-family: "Avenir Medium", sans-serif;
}

.q-layout__section--marginal {
  background: white;
  color: #737881;
}

.q-drawer__content {
  font-size: 14px;
  color: #949494;

  .q-item.q-router-link--active,
  .q-item--active {
    color: white;
    background: #f26522;
  }

  .q-list--bordered {
    border: 0.5px solid rgba(69, 74, 84, 0.7);
  }

  & > .q-list--bordered:not(:nth-of-type(8)) {
    border-bottom: none;
    /*border-top: none;*/
  }

  .q-list--dense > .q-item,
  .q-item--dense {
    padding: 12px 20px;
  }

  .q-item__section--side::v-deep > .q-icon {
    font-size: 16px;
  }

  .q-expansion-item::v-deep .q-item__section--side > .q-icon {
    font-size: 16px;
    padding-left: 5px;
    color: #fff;
  }

  .support-button {
    padding: 7vh 3vh 4vh;

    .q-btn {
      display: flex;
    }
  }

  .q-expansion-item__content {
    .q-list {
      background: #2d323d;

      .q-item {
        border-top: 0.5px solid rgba(69, 74, 84, 0.7);
      }
    }

    .q-item {
      .q-item__section {
        max-width: 40%;
      }

      .q-item__section--side {
        .q-icon {
          font-size: 4px;
        }
      }
    }
  }

  .q-item__label {
    .sub-item {
      text-align: "center";
    }
  }
}
</style>
