<template>
  <div>
  <div class="submit-form">
    <div v-if="selectedCreate">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="jobDescription">Job Description</label>
          <input type="text" class="form-control" id="jobDescription" required v-model="workOrder.jobDescription"
                 name="jobDescription"/>
        </div>
        <div class="form-group">

          <label for="deviceName">Device name</label>
          <input type="text" class="form-control" id="deviceName" required v-model="workOrder.deviceName"
                 name="deviceName"/>
        </div>

        <div class="form-group">
          <label for="technicianName">Technician name</label>
          <input type="text" class="form-control" id="technicianName" required v-model="workOrder.technicianName"
                 name="technicianName"/>
        </div>
<!--        <div class="form-group">-->
<!--          <label for="productName">Product name</label>-->
<!--          <input type="text" class="form-control" id="productName" required v-model="workOrder.productName"-->
<!--                 name="productName"/>-->
<!--        </div>-->


        <div class="form-group">
          <label for="consumableName">Consumable name</label>
          <input type="text" class="form-control" id="consumableName" required v-model="workOrder.consumableName"
                 name="consumableName"/>

          <button @click="consumable1AddOne()" class="btn btn-success">Add 1</button>
          <span >Consumable quantity: {{this.consumableAmount}}</span>
        </div>

<!--TODO: tee nii et consumable 2 ja 3 oleksid kättesaadavad vaid siis kui sisestaja soovib neid lisada, muidu mitte.-->
        <div class="form-group">
          <label for="consumableName2">Consumable name2</label>
          <input type="text" class="form-control" id="consumableName2" v-model="consumableName2"
                 name="consumableName2"/>

          <button @click="consumable2AddOne()" class="btn btn-success">Add 1</button>
          <span >Consumable quantity: {{this.consumableAmount2}}</span>
        </div>

        <div class="form-group">
          <label for="consumableName3">Consumable name3</label>
          <input type="text" class="form-control" id="consumableName3" v-model="consumableName3"
                 name="consumableName3"/>

          <button @click="consumable3AddOne()" class="btn btn-success">Add 1</button>
          <span >Consumable quantity: {{this.consumableAmount3}}</span>
        </div>


        <div class="form-group">
          <label for="status">Work order completed</label>
          <input align="left" type="checkbox" class="form-control" id="status" required v-model="workOrder.status"
                 name="status"/>
        </div>

        <button @click="createWorkOrder" class="btn btn-success">Create</button>
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
    <div class="form-group">
      <search-work-order-simultaneous></search-work-order-simultaneous>
    </div>
  </div>
</template>

<script>
import ServiceWorkOrder from "../Services/ServiceWorkOrder";
import ServiceDevice from "@/Services/ServiceDevice";
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
      consumableName2: "",
      consumableName3: "",
      consumableAmount:0,
      consumableAmount2:0,
      consumableAmount3:0,
      itemsDevice: [],
      searchDevice: null,
      selectDevice: null
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
      this.consumableAmount=0;
      this.consumableAmount2=0;
      this.consumableAmount3=0;
    },

    newWorkOrder() {
      this.submitted = false;
      this.workOrder = {};
    },

    consumable1AddOne() {
      this.consumableAmount = this.consumableAmount+1;
    },

    consumable2AddOne() {
      this.consumableAmount2 = this.consumableAmount2+1;
    },

    consumable3AddOne() {
      this.consumableAmount3 = this.consumableAmount3+1;
    },

    startCreatingWorkOrder() {
      this.selectedCreate = true;
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