<template>
  <div
    class="flex authentication-theme auth-style_1 justify-center"
    id="page-login"
  >
    <div class="logo-section text-center">
      <a href="javascript:" class="logo">
        <img
          src="logo/paga_logo_main.png"
          alt="PagaLogo"
          style="height: 60px;"
        />
      </a>
    </div>

    <div class="column">
      <div class="row items-center">
        <q-card
          square
          class="q-pa-md q-ma-none no-shadow transparent"
          style="max-width: 400px; padding-top: 4.5em"
        >
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                standout
                borderless
                class="input-group"
                clearable
                ref="username"
                v-model="form.username"
                type="email"
                label="Username or Email"
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Email is required']"
              >
                <template v-slot:prepend>
                  <span class="icon-widget"><i class="far fa-user"></i></span>
                  <span class="line-widget">|</span>
                </template>
              </q-input>
              <q-input
                standout
                borderless
                class="input-group"
                clearable
                ref="password"
                v-model="form.password"
                type="password"
                label="Password"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Password is required'
                ]"
              >
                <template v-slot:prepend>
                  <span class="icon-widget"><i class="fas fa-key"></i></span>
                  <span class="line-widget">|</span>
                </template>
              </q-input>

              <q-btn
                flat
                borderless
                filled
                align="center"
                size="lg"
                class="btn-login btn-primary"
                no-caps
                :disable="disabled"
                @click.stop="doLogin"
              >
                <div class="btn-login-text">Log in</div>
              </q-btn>
            </q-form>
          </q-card-section>

          <q-card-section>
            <div class="row">
              <div class="col-12 items-center register">
                <router-link
                  to="/request-password-reset"
                  style="text-decoration: none"
                >
                  <p
                    class="text-no-wrap text-center text-primary text-weight-bold text-subtitle1"
                  >
                    Forgot your password?
                  </p>
                </router-link>
                <router-link to="/register" style="text-decoration: none">
                  <p
                    class="text-no-wrap text-center text-primary text-weight-bold text-subtitle1"
                  >
                    Create your account
                  </p>
                </router-link>
                <p
                  class="text-no-wrap text-weight-light text-grey text-center description"
                >
                  &copy;Pagatech Limited {{ new Date().getFullYear() }}
                </p>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "login",
  data() {
    return {
      form: {
        username: null,
        password: null
      },
      disabled: false
    };
  },
  mounted() {},
  methods: {
    doLogin() {
      this.$router.push("/dashboard");
    },
    onReset() {
      this.form.username = null;
      this.form.password = null;

      this.$refs.username.resetValidation();
      this.$refs.password.resetValidation();
    }
  }
};
</script>

<style type="text/css" scoped>
.login_page {
  width: 100%;
  height: 100%;
}

.authentication-theme.auth-style_1 {
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.authentication-theme.auth-style_1 .logo-section {
  margin-bottom: 0;
}

.authentication-theme.auth-style_1 .grid-body {
  padding: 60px 15px;
  position: relative;
}

.authentication-theme.auth-style_1 .grid-body .form-wrapper {
  position: unset;
}

.authentication-theme.auth-style_1 .signup-link {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
}

.column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.authentication-theme.auth-style_1 {
  background: url("../../assets/patterns/paga_pattern_grey.png");
  background-repeat: no-repeat;
}

a {
  color: deepskyblue;
}

.q-btn .q-icon,
.q-btn .q-spinner {
  font-size: 1.4em;
}

label >>> .q-field__label {
  margin-top: -0.4em;
  font-size: 14px !important;
  line-height: 1.42857143;
}

.btn-login {
  border: 1px solid #f2931e !important;
  text-align: center !important;
  padding: 1px 4px;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
  border-radius: 6px;
  width: 315px !important;
  height: 54px !important;
}

.btn-login-text {
  color: #fff;
  font-size: 15px;
  font-weight: bold;
}

.btn-primary {
  outline: 0 !important;
  line-height: 1.42857143;
  color: #fff;
  background-color: #f2931e !important;
}

.description {
  font-size: 15px;
  font-weight: 500;
  margin-top: 14px;
  margin-bottom: 5px;
  line-height: 1.42857143;
  transition: all 550ms ease-in-out;
}

.input-group {
  background: #ffffff;
  border: 1px solid #b6cc10;
  padding-top: 6px;
  padding-bottom: 6px;
  height: 55px;
  -moz-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

p {
  margin: 0 0 8.5px;
}

p {
  display: block;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-size: 14px;
}

.register {
  padding-top: 2.5em;
}

label >>> .q-icon {
  margin-right: 0.4em;
  text-align: center;
  font-variant: normal;
  text-transform: none;
  line-height: 1em;
  margin-left: 0.4em;
  font-size: 0.8em;
}

.icon-widget {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1em;
  margin-right: 0.8em;
  margin-left: 1.2em;
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  color: #555;
  /* text-align: center; */
}

.line-widget {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -0.8em;
  color: #454a54 !important;
  font-size: 0.8em;
}
</style>
