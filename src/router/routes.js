const routes = [
  {
    path: "/",
    component: () => import("layouts/FullPageLayout.vue"),
    children: [
      {
        path: "",
        redirect: {
          name: "login"
        }
      },
      {
        path: "/login",
        name: "login",
        component: () => import("pages/auth/login.vue")
      },
      {
        path: "/register",
        name: "register",
        component: () => import("pages/auth/login.vue")
      }
    ]
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/dashboard",
        component: () => import("pages/dashboard.vue")
      },
      {
        path: "/transfer",
        component: () => import("pages/transfer.vue"),
        children: [
          {
            path: "paga_me",
            // name: "transfer",
            component: () => import("pages/transfer/paga_me.vue")
          },
          {
            path: "to_banks",
            component: () => import("pages/transfer/to_banks.vue")
          },
          {
            path: "to_contacts",
            component: () => import("pages/transfer/to_contacts.vue")
          }
        ]
      },
      {
        path: "/payments",
        component: () => import("pages/payments.vue"),
        children: [
          {
            path: "bills",
            component: () => import("pages/payments/bills.vue")
          },
          {
            path: "airtime",
            component: () => import("pages/payments/airtime.vue")
          },
          {
            path: "mobile_data",
            component: () => import("pages/payments/mobile_data.vue")
          },
          {
            path: "qr_code",
            component: () => import("pages/payments/qr_code.vue")
          },
          {
            path: "recurring_payments",
            component: () => import("pages/payments/recurring_payments.vue")
          }
        ]
      },
      {
        path: "/wallet",
        component: () => import("pages/wallet.vue"),
        children: [
          {
            path: "",
            component: () => import("pages/wallet/index.vue")
          }
        ]
      },
      {
        path: "/referrals",
        component: () => import("pages/referrals.vue"),
        children: [
          {
            path: "",
            component: () => import("pages/referrals/index.vue")
          }
        ]
      },
      {
        path: "/transactions",
        component: () => import("pages/transactions.vue"),
        children: [
          {
            path: "",
            component: () => import("pages/transactions/index.vue")
          }
        ]
      },
      {
        path: "/settings",
        component: () => import("pages/settings.vue"),
        children: [
          {
            path: "",
            component: () => import("pages/settings/index.vue")
          }
        ]
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/error/Error404.vue")
  });
}

export default routes;
