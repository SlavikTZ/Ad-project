<template lang="pug">

  v-container(fluid, fill-height)
    v-layout(align-center, justify-center)
      v-flex(xs12, sm8, md6, lg3)

        v-card(class="elevation-12")

          v-toolbar(dark color="primary")
            v-toolbar-title Login form
          v-card-text
            v-form(ref="form", v-model="valid", lazy-validation)

              v-text-field( prepend-icon="person",
              label="Email",
              type="text",
              v-model="email")

              v-text-field(prepend-icon="lock",
              label="Password",
              type="password",
              :counter="8",
              v-model="password")

          v-card-actions
            v-spacer
            v-btn(color="primary", @click="onSend()") Login

</template>

<script>
    export default {

        data() {
            return {
                email: '',
                password: '',
                valid: false
            }
        },

        methods: {
            onSend() {

            }
        },

        computed: {}
    }
</script>

<style scoped>

</style>