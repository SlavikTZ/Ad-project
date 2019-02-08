<template lang="pug">

  v-app
    v-navigation-drawer(app, temporary, v-model="drawer")
      v-list( v-for="link in links",
              :key="link.title",
              :to="link.url ")
        v-list-tile
          v-list-tile-action
            v-icon {{link.icon}}
          v-list-tile-content
            v-list-tile-title(v-text="link.title")

    v-toolbar(app dark color="primary")
      v-toolbar-side-icon(@click="drawer= !drawer", class="hidden-md-and-up")
      v-toolbar-title(:to="'/'") White clinic
      v-spacer
      v-toolbar-items(class="hidden-sm-and-down")
        v-btn(v-for="link in links",
              :key="link.title",
              :to="link.url",
              flat)
          v-icon(left) {{link.icon}}
          | {{link.title}}

    v-content
      router-view

</template>

<script>
    import VApp from "vuetify/lib/components/VApp/VApp";

    export default {
        components: {VApp},
        data() {
            return {
                drawer: false,
                links:[
                    { title:'Login', icon:'lock', url:'/login'},
                    { title:'Registration', icon:'face', url:'/registration'},
                    { title:'Orders', icon:'bookmark_border', url:'/orders'},
                    { title:'New Ad', icon:'note_add', url:'/new'},
                    { title:'My Ads', icon:'list', url:'/list'},
                ]
            }
        }
    }
</script>
