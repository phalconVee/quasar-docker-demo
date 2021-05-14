<template>
  <div class="q-pt-lg">
    <div class="text-h6 text-medium q-pb-lg">All Transactions</div>

    <div class="q-gutter-y-sm" v-cloak>
      <div class="q-px-md q-pb-xl q-pt-lg">
        <div class="row">
          <div class="col-12">
            <q-btn borderless color="primary" flat no-caps>
              <span class="text-bold text-secondary">
                <q-icon name="fa fa-filter" size="10px" />
                Filter By
              </span>
              <q-menu style="min-width:280px">
                <q-list>
                  <q-item>
                    <q-item-section>
                      <q-input
                        dense
                        placeholder="Reference"
                        v-model="param.reference"
                      />
                    </q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section>
                      <q-input
                        @click="$refs.dateFrom.show()"
                        dense
                        label="Date From"
                        v-model="param.from"
                      >
                        <template v-slot:append>
                          <q-icon class="cursor-pointer" name="event">
                            <q-popup-proxy
                              context-menu
                              ref="dateFrom"
                              transition-hide="scale"
                              transition-show="scale"
                            >
                              <q-date
                                @input="
                                  () => {
                                    $refs.dateFrom.hide();
                                  }
                                "
                                mask="DD-MM-YYYY"
                                v-model="param.from"
                              ></q-date>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-input
                        @click="$refs.dateTo.show()"
                        dense
                        label="Date To"
                        v-model="param.to"
                      >
                        <template v-slot:append>
                          <q-icon class="cursor-pointer" name="event">
                            <q-popup-proxy
                              context-menu
                              ref="dateTo"
                              transition-hide="scale"
                              transition-show="scale"
                            >
                              <q-date
                                @input="
                                  () => {
                                    $refs.dateTo.hide();
                                  }
                                "
                                mask="DD-MM-YYYY"
                                v-model="param.to"
                              ></q-date>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                    </q-item-section>
                  </q-item>
                  <q-separator class="q-mt-sm" />
                  <q-item>
                    <q-item-section>
                      <div class="row justify-around">
                        <q-btn
                          @click="reset"
                          label="Reset"
                          size="sm"
                          text-color="black"
                          unelevated
                          no-caps
                        />
                        <q-btn
                          color="secondary"
                          label="Filter"
                          size="sm"
                          unelevated
                          no-caps
                          v-close-popup
                        />
                      </div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>

        <br />

        <div class="row">
          <div class="col-12">
            <q-card class="q-pa-md shadow-0" square style="max-width: 90vw;">
              <template>
                <q-markup-table
                  bordered
                  highlight
                  horizontal-separator
                  responsive
                  table-class="tnx-table"
                >
                  <thead>
                    <tr>
                      <th class="text-left tnx_header">
                        Reference
                      </th>
                      <th class="text-center tnx_header">
                        Transaction Type
                      </th>
                      <th class="text-center tnx_header">
                        Description
                      </th>
                      <th class="text-center tnx_header">
                        Amount
                      </th>
                      <th class="text-center tnx_header">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody v-if="isLoaded">
                    <tr
                      :key="transaction.id"
                      class="ref_table_body"
                      v-for="transaction in transactions.data"
                    >
                      <td class="text-left">{{ transaction.confirmation }}</td>
                      <td class="text-center">
                        {{ transaction.transaction_type }}
                      </td>
                      <td class="text-center">
                        {{ transaction.description }}
                      </td>
                      <td class="text-center">
                        <span class="text-weight-bold"
                          >&#8358;{{ transaction.amount | formatAmount }}</span
                        >
                      </td>
                      <td class="text-left">
                        {{ transaction.date_created | moment("MMM Do YYYY") }}
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr :key="n" v-for="n in 5">
                      <td class="text-left">
                        <q-skeleton
                          animation="blink"
                          type="text"
                          width="100px"
                        />
                      </td>
                      <td class="text-center">
                        <q-skeleton
                          animation="blink"
                          type="text"
                          width="100px"
                        />
                      </td>
                      <td class="text-center">
                        <q-skeleton
                          animation="blink"
                          type="text"
                          width="200px"
                        />
                      </td>
                      <td class="text-center">
                        <q-skeleton
                          animation="blink"
                          type="text"
                          width="100px"
                        />
                      </td>
                      <td class="text-right">
                        <q-skeleton
                          animation="blink"
                          type="text"
                          width="100px"
                        />
                      </td>
                    </tr>
                  </tbody>
                </q-markup-table>
              </template>

              <template v-if="isLoaded && transactions.data.length === 0">
                <div class="q-py-lg no-wrap text-center items-center">
                  <div>
                    <q-icon
                      name="far fa-folder-open"
                      style="font-size: 4rem;"
                    />
                  </div>
                  <div class="text-subtitle1 text-center text-black">
                    No transactions
                  </div>
                </div>
              </template>
            </q-card>

            <div class="q-pa-lg text-center">
              <tnx-pagination
                :offset="4"
                :pagination="transactions"
                @paginate="getTransactions()"
              >
              </tnx-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "transactions",
  data() {
    return {
      count: 400,
      isLoaded: true,
      param: {
        reference: null,
        from: null,
        to: null
      },
      transactions: {
        data: [
          {
            id: "5649044-400404-4444",
            confirmation: "PAGA-XRP09300035",
            transaction_type: "Airtime Purchase",
            description: "Initiated airtime Purchase for mobile #08166601864",
            amount: 2500,
            date_created: "2020-01-10T13:37:57.107143"
          },
          {
            id: "45000505-400404-3345",
            confirmation: "PAGA-DREOPD09440",
            transaction_type: "Mobile Transfer",
            description: "Mobile money transfer to recipient account",
            amount: 104500,
            date_created: "2021-04-10T13:37:57.107143"
          }
        ]
      }
    };
  },

  methods: {
    reset() {
      const self = this;
      self.param.reference = "";
      self.param.from = "";
      self.param.to = "";
    }
  },
  filters: {
    firstCaps(string) {
      if (string == null) {
        return;
      }
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    },
    formatAmount(amount) {
      if (isNaN(amount) || !amount) {
        return 0;
      }
      return parseFloat(amount)
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    formatDate: function(date) {
      return this.$moment(date).format("Do MMM YY");
    }
  }
};
</script>

<style type="text/css" scoped>
.tnx_header {
  font-weight: 700;
  color: #57584e;
  line-height: 1.42857143;
  font-size: 15px;
}

.ref_table_body {
  color: #57584e;
  font-size: 14px;
}
</style>
