import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemsTechnician: [],
    searchTechnician: "",
    selectTechnician: null,
    technicianId: null,

    itemsDevice: [],
    searchDevice: "",
    selectDevice: null,
    deviceId: null,

    itemsClient: [],
    searchClient: "",
    selectClient: null,
    clientId: null,

    status: false,
    productId: null,
    jobDescription: null,

    allWo: [],
    showCreatePage: false,
    showWoListPage: true
  },
  mutations: {
    updateSelectTechnician (state, newValue) {
      state.selectTechnician = newValue;
    },
    updateSearchTechnician (state, newValue) {
      state.searchTechnician = newValue;
    },
    updateItemsTechnician (state, newValue) {
      state.itemsTechnician = newValue;
    },
    updateSelectDevice (state, newValue) {
      state.selectDevice = newValue;
    },
    updateSearchDevice (state, newValue) {
      state.searchDevice = newValue;
    },
    updateItemsDevice (state, newValue) {
      state.itemsDevice = newValue;
    },
    updateSelectClient (state, newValue) {
      state.selectClient = newValue;
    },
    updateSearchClient (state, newValue) {
      state.searchClient = newValue;
    },
    updateItemsClient (state, newValue) {
      state.itemsClient = newValue;
    },
    updateClientId (state, newValue) {
      state.clientId = newValue;
    },
    updateDeviceId (state, newValue) {
      state.deviceId = newValue;
    },
    updateStatus (state, newValue) {
      state.status = newValue;
    },
    updateProductId (state, newValue) {
      state.productId = newValue;
    },
    updateTechnicianId (state, newValue) {
      state.technicianId = newValue;
    },
    updateJobDescription (state, newValue) {
      state.jobDescription = newValue;
    },
    updateAllWo (state, newValue) {
      state.allWo = newValue;
    },
    updateShowCreatePage (state, newValue) {
      state.showCreatePage = newValue;
    },
    updateShowWoListPage (state, newValue) {
      state.showWoListPage = newValue;
    }
  }
})
