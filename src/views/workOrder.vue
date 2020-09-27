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

          <label for="deviceId">Device name (TODO: currently ID!!!)</label>
          <input type="number" class="form-control" id="deviceId" required v-model="workOrder.deviceId"
                 name="deviceId"/>
        </div>
        <div class="form-group">
          <label for="technicianName">Technician name</label>
          <input type="text" class="form-control" id="technicianName" required v-model="workOrder.technicianName"
                 name="technicianName"/>
        </div>
        <div class="form-group">
          <label for="productName">Product name</label>
          <input type="text" class="form-control" id="productName" required v-model="workOrder.productName"
                 name="productName"/>
        </div>
        <div class="form-group">
          <label for="consumableName">Consumable name</label>
          <input type="text" class="form-control" id="consumableName" required v-model="workOrder.consumableName"
                 name="consumableName"/>

          <button @click="consumableAddOne()" class="btn btn-success">Add 1</button>
          <span >Consumable quantity: {{this.consumableAmount}}</span>
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
//import AllWorkOrders from "@/components/all-workOrders";
import SearchWorkOrder from "@/components/search-workOrder";
import SearchWorkOrderSimultaneous from "@/components/search-workOrder-simultaneous";

export default {
  name: "workOrder",
  components: {SearchWorkOrderSimultaneous, SearchWorkOrder},
  data() {
    return {
      workOrder: {anyParam: null},
      submitted: false,
      selectedCreate: false,
      consumableAmount:0,
      // testV: {name: "asdf"}
    };
  },
  mounted() {
    this.workOrder = {}
    this.workOrder.deviceName = this.$route.params.id;
    this.workOrder.productName = this.$route.params.product;
  },
  methods: {
    createWorkOrder() {
      let data = {
        jobDescription: this.workOrder.jobDescription,
        deviceId: this.workOrder.deviceId,
        technicianName: this.workOrder.technicianName,
        consumableName: this.workOrder.consumableName,
        productName: this.workOrder.productName,
        status: this.workOrder.status,
      };

      ServiceWorkOrder.create(data,this.consumableAmount)
          .then(this.submitted = true)
          .catch(e => {
            console.log(e);
          });
      this.consumableAmount=0;
    },

    newWorkOrder() {
      this.submitted = false;
      this.workOrder = {};
    },

    consumableAddOne() {
      this.consumableAmount = this.consumableAmount+1;
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