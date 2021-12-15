<template>
  <div>
    <v-card>
      <v-toolbar
        dark
      >
        <v-toolbar-title>Elder Scrolls Online</v-toolbar-title>
        <v-spacer />
        <v-btn icon @click="getFiles()">
          Test2
        </v-btn>
        <template #extension>
          <v-tabs
            v-model="tab"
            align-with-title
          >
            <v-tabs-slider color="yellow" />

            <v-tab
              v-for="item in items"
              :key="item"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tab">
        <!--          <v-tab-item-->
        <!--            v-for="item in items"-->
        <!--            :key="item"-->
        <!--          >-->
        <!--            <v-card flat>-->
        <!--              <v-card-text v-text="text"></v-card-text>-->
        <!--            </v-card>-->
        <!--          </v-tab-item>-->
        <v-tab-item key="installed">
          <!--            <v-card flat>-->
          <!--              <v-card-text v-text="text"></v-card-text>-->
          <!--            </v-card>-->
          <v-card>
            <v-card-title>
              Mods
              <v-spacer />
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              />
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="packages"
              :search="search"
              :items-per-page="items_per_page"
              :loading="loading"
              loading-text="Loading... Please wait"
            >
              <!--              <template #item.actions="{ item }">-->
              <!--                <v-icon-->
              <!--                  small-->
              <!--                  @click="deleteItem(item)"-->
              <!--                >-->
              <!--                  mdi-delete-->
              <!--                </v-icon>-->
              <!--              </template>-->
            </v-data-table>
          </v-card>
        </v-tab-item>
        <v-tab-item key="add">
          <v-card flat>
            <v-card-text v-text="text" />
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
// import ipcRenderer from 'q'
const { ipcRenderer } = require('electron')

export default {
  name: 'GamePage',
  data () {
    return {
      tab: null,
      items: [
        'installed', 'add'
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
      search: '',
      headers: [
        {
          text: 'Name',
          align: 'start',
          value: 'name'
        },
        {
          text: 'Actions',
          value: 'actions',
          sortable: false
        }
      ],

      items_per_page: -1,
      loading: false,
      packages: [
        {
          name: 'AUI',
          version: '3.86',
          author: 'Sensi',
          description: null,
          files: [
            'Constants.lua',
            'Templates.xml'
          ],
          keywords: [
            'ui'
          ],
          license: null
        },
        {
          name: 'LibAddonMenu-2.0',
          version: '32',
          author: 'Seerah, sirinsidiator, et al.',
          description: 'A library to aid in the creation of option panels.',
          files: [
            'Constants.lua',
            'Templates.xml'
          ],
          keywords: [
            'library'
          ],
          license: null
        }
      ]
    }
  },
  methods: {
    getFiles () {
      console.log('FooBar')
      console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

      ipcRenderer.on('asynchronous-reply', (event, arg) => {
        console.log(arg) // prints "pong"
        console.log(event) // prints "pong"
      })
      ipcRenderer.send('asynchronous-message', 'ping')
    }
  }
}
</script>
