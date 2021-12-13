<template>
  <div>
    <v-card>
      <v-toolbar
        dark
      >
        <v-toolbar-title>Elder Scrolls Online</v-toolbar-title>
        <v-spacer />
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
export default {
  name: 'GamePage',
  data () {
    return {
      tab: null,
      items: [
        'installed', 'add'
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

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
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
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
  }
}
</script>
