<template>
  <v-container>
    <v-row>
      <v-btn fab dark color="teal" @click="showCreatePageF">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </v-row>

    <v-row>
      <v-card v-for="wo in allWo" class="ma-3 pa-3 col-12" :color=wo.color>

        <v-row justify="center">
          <v-dialog
              v-model="dialog"
              max-width="600px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
              >
                Open Dialog
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">User Profile</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                      <v-text-field
                          label="Legal first name*"
                          required
                      ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                      <v-text-field
                          label="Legal middle name"
                          hint="example of helper text only on focus"
                      ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                      <v-text-field
                          label="Legal last name*"
                          hint="example of persistent helper text"
                          persistent-hint
                          required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                          label="Email*"
                          required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                          label="Password*"
                          type="password"
                          required
                      ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                    >
                      <v-select
                          :items="['0-17', '18-29', '30-54', '54+']"
                          label="Age*"
                          required
                      ></v-select>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                    >
                      <v-autocomplete
                          :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                          label="Interests"
                          multiple
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                >
                  Close
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>

        <v-card-title>{{wo.clientName}}</v-card-title>
        <v-card-subtitle class="subtitle-1">{{wo.deviceName}}</v-card-subtitle>
        <v-card-text>{{wo.jobDescription}}</v-card-text>
      </v-card>
    </v-row>

  </v-container>
</template>

<script>
import ServiceWorkOrder from "@/Services/ServiceWorkOrder";
import AutocompleteTechnician from "@/mobile/autocomplete-technician";

export default {
  name: "wo-mobilelist",
  data: () => ({
    dialog: false,
  }),
  components: {AutocompleteTechnician},
  computed: {
    allWo: {
      get() {
        return this.$store.state.allWo;
      },
      set(newValue) {
        this.$store.commit("updateAllWo", newValue);
      }
    },
    showCreatePage: {
      get() {
        return this.$store.state.showCreatePage;
      },
      set(newValue) {
        this.$store.commit("updateShowCreatePage", newValue);
      }
    },
    showWoListPage: {
      get() {
        return this.$store.state.showWoListPage;
      },
      set(newValue) {
        this.$store.commit("updateShowWoListPage", newValue);
      }
    },
    selectTechnician: {
      get() {
        return this.$store.state.selectTechnician;
      },
      set(newValue) {
        this.$store.commit("updateSelectTechnician", newValue);
      }
    },
    itemsTechnician: {
      get() {
        return this.$store.state.itemsTechnician;
      },
      set(newValue) {
        this.$store.commit("updateItemsTechnician", newValue);
      }
    },
    searchTechnician: {
      get() {
        return this.$store.state.searchTechnician;
      },
      set(newValue) {
        this.$store.commit("updateSearchTechnician", newValue);
      }
    }
  },

  mounted() {
    ServiceWorkOrder.findAllWo()
        .then(response => {
          this.allWo = response.data;
        })
        .catch(e => {console.log(e);});
    console.log(this.allWo);
  },

  methods: {
    showCreatePageF () {
      this.showCreatePage = !this.showCreatePage;
      this.showWoListPage = !this.showWoListPage;
    }
  }
}
</script>

<style scoped>

</style>