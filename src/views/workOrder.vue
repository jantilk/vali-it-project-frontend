<template>
  <div>
    <div class="form-group">
      <search-work-order-simultaneous></search-work-order-simultaneous>
    </div>
    <div class="submit-form">
      <div v-if="selectedCreate">
        <div v-if="!submitted">
          <div class="form-group">
            <label for="jobDescription">Job Description</label>
            <input id="jobDescription" v-model="workOrder.jobDescription" class="form-control" name="jobDescription" required
                   type="text"/>
          </div>
          <div class="form-group">
            <label for="deviceName">Device name</label>
            <input id="deviceName" v-model="workOrder.deviceName" class="form-control" name="deviceName" required
                   type="text"/>
          </div>
          <div class="form-group">
            <label for="technicianName">Technician name</label>
            <input id="technicianName" v-model="workOrder.technicianName" class="form-control" name="technicianName" required
                   type="text"/>
          </div>
          <div style="color:#00c4ff">
            <button @click="addConsumable">+ consumable</button>
          </div>
          <br>
          <div v-if="optionForConsumable">
            <div class="form-group">
              <label for="consumableName">Consumable name</label>
              <input id="consumableName" v-model="workOrder.consumableName" class="form-control" name="consumableName" required
                     type="text"/>
              <button class="btn btn-primary" @click="consumable1AddOne()">Add 1</button>
              <span>Consumable quantity: {{ this.consumableAmount }}</span>
            </div>
          </div>
          <!--          This is a button that shows only when first consumable is inserted. If it's pressed it will show another consumable input-->
          <div v-if="optionForAnotherConsumable">
            <div style="color:#00c4ff">
              <button @click="addAnotherConsumable">+ another consumable</button>
            </div>
            <br>
          </div>
          <!--          This input field only shows if the user has chosen to add another consumable-->
          <div v-if="AddExtraConsumable">
            <div class="form-group">
              <label for="consumableName2">Consumable name2</label>
              <input id="consumableName2" v-model="consumableName2" class="form-control" name="consumableName2"
                     type="text"/>
              <button class="btn btn-primary" @click="consumable2AddOne()">Add 1</button>
              <span>Consumable quantity: {{ this.consumableAmount2 }}</span>
            </div>
          </div>
          <!--          This is a button that shows only when second consumable is inserted. If it's pressed it will show another consumable input-->
          <div v-if="optionForAnotherConsumable2">
            <div style="color:#00c4ff">
              <button @click="addAnotherConsumable2">+ another consumable</button>
            </div>
            <br>
          </div>
          <!--          This input field only shows if the user has chosen to add another consumable-->
          <div v-if="AddExtraConsumable2">
            <div class="form-group">
              <label for="consumableName3">Consumable name3</label>
              <input id="consumableName3" v-model="consumableName3" class="form-control" name="consumableName3"
                     type="text"/>

              <button class="btn btn-primary" @click="consumable3AddOne()">Add 1</button>
              <span>Consumable quantity: {{ this.consumableAmount3 }}</span>
            </div>
          </div>
          <br>
          <div class="form-group">
            <label for="status">Work order completed</label>
            <input id="status" v-model="workOrder.status" align="left" class="form-control" name="status" required
                   type="checkbox"/>
          </div>
          <button class="btn btn-success" @click="createWorkOrder">Create</button>
        </div>
        <div v-else>
          <h4>Work order created successfully!</h4>
          <button class="btn btn-success" @click="newWorkOrder">Create another</button>
        </div>
        <br>
      </div>
      <div v-else>
        <h4>Create a new work order</h4>
        <button class="btn btn-success" @click="startCreatingWorkOrder">Create</button>
      </div>
      <br>
      <div class="form-group">
        <search-workOrder></search-workOrder>
      </div>
    </div>

  </div>
</template>

<script>
import ServiceWorkOrder from "../Services/ServiceWorkOrder";
//import AllWorkOrders from "@/components/all-workOrders";
import SearchWorkOrder from "@/components/search-workOrder";
import SearchWorkOrderSimultaneous from "@/components/search-workOrder-simultaneous";
import AutocompleteDevice from "@/mobile/autocomplete-device";

export default {
  name: "workOrder",

  components: {AutocompleteDevice, SearchWorkOrderSimultaneous, SearchWorkOrder},
  data() {
    return {
      workOrder: {anyParam: null},
      submitted: false,
      selectedCreate: false,
      AddExtraConsumable: false,
      AddExtraConsumable2: false,
      optionForConsumable: false,
      optionForAnotherConsumable: false,
      optionForAnotherConsumable2: false,
      consumableName2: "",
      consumableName3: "",
      consumableAmount: 0,
      consumableAmount2: 0,
      consumableAmount3: 0,
      itemsDevice: [],
      // testV: {name: "asdf"}
    };
  },
  mounted() {
    this.workOrder = {}
    this.workOrder.deviceName = this.$route.params.deviceName;
  },
  methods: {
    createWorkOrder() {
      let data = {
        jobDescription: this.workOrder.jobDescription,
        deviceName: this.workOrder.deviceName,
        technicianName: this.workOrder.technicianName,
        consumableName: this.workOrder.consumableName,
        productName: this.workOrder.productName,
        status: this.workOrder.status,
      };

      ServiceWorkOrder.create(data, this.consumableAmount, this.consumableName2, this.consumableAmount2, this.consumableName3, this.consumableAmount3)
          .then(this.submitted = true)
          .catch(e => {
            console.log(e);
          });
      this.consumableAmount = 0;
      this.consumableAmount2 = 0;
      this.consumableAmount3 = 0;
      this.consumableName2 = "";
      this.consumableName3 = "";
      this.optionForAnotherConsumable = false;
      this.optionForConsumable = false;
    },

    newWorkOrder() {
      this.submitted = false;
      this.workOrder = {};
    },
    addConsumable() {
      this.optionForConsumable = true;
    },

    consumable1AddOne() {
      this.consumableAmount = this.consumableAmount + 1;
      this.optionForAnotherConsumable = true;
    },

    consumable2AddOne() {
      this.consumableAmount2 = this.consumableAmount2 + 1;
      this.optionForAnotherConsumable2 = true;
    },

    consumable3AddOne() {
      this.consumableAmount3 = this.consumableAmount3 + 1;
    },

    startCreatingWorkOrder() {
      this.selectedCreate = true;
    },
    addAnotherConsumable() {
      this.AddExtraConsumable = true;
    },
    addAnotherConsumable2() {
      this.AddExtraConsumable2 = true;
    }

  }
};
</script>

<style scoped>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>