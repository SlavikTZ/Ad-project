<template lang="pug">

  v-container(fluid, fill-height)
    v-layout(align-center, justify-center)
      v-flex(xs12, sm8, md6, lg3)

        v-card(class="elevation-12")

          v-toolbar(dark color="primary")
            v-toolbar-title Login form
          v-card-text
            v-form(ref="form", v-model="valid", lazy-validation)

              v-text-field(v-for="field of fields",
              :label="field.label",
              :type="field.type",
              :prepend-icon="field.prependIcon",
              :counter="field.counter",
              v-model="field.model"
              )

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
                confirmPassword: '',
                valid: false,

                fields : {
                    email: {
                        label: "Email",
                        type: "text",
                        prependIcon: 'person',
                        model: ''
                    },
                    password:{
                        label: "Password",
                        type: "password",
                        prependIcon: 'lock',
                        counter: 10,
                        model: ''
                    },
                    confirmPassword:{
                        label: "Confirm password",
                        type: "password",
                        prependIcon: 'lock',
                        counter: 10,
                        model: ''
                    }
                }

            }
        },

        methods: {
            onSend() {

                let fields = _.map(this.fields, function (field, key) {
                    let obj = {};
                    obj[key] = field.model;
                    return obj;
                });
                console.log(fields);
            }
        },

        computed: {}
    }
</script>

<style scoped>

</style>