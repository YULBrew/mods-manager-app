<template>
  <v-row>
    <v-overlay v-if="loading" :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
        color="primary"
      />
      <div v-text="message" />
    </v-overlay>
    <!--    <v-col class="text-center">-->
    <!--      <blockquote class="blockquote">-->
    <!--        <v-icon>mdi-loading</v-icon>-->
    <!--        Version-->
    <!--        <footer>-->
    <!--          <small>-->
    <!--            <em v-text="version" />-->
    <!--          </small>-->
    <!--        </footer>-->
    <!--      </blockquote>-->
    <!--    </v-col>-->
  </v-row>
</template>

<script>
const { ipcRenderer } = require('electron')

export default {
  name: 'VersionView',
  data () {
    return {
      version: 'dev',
      loading: true,
      overlay: true,
      message: 'Checking for updates ...'
    }
  },
  mounted () {
    // this.version = this.$route.query.version
    this.loading = true
    this.overlay = true

    // this.version = ipcRenderer.sendSync('updater:current-version').version
    ipcRenderer.invoke('updater:get.current.version').then(result => {
      // this.version = result.version
      console.log(result)
      this.loading = false
      this.overlay = false
      this.$router.push('/')
    })
  }
}
</script>
