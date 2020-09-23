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
          <label for="deviceId">Device ID</label>
          <input type="number" class="form-control" id="deviceId" required v-model="workOrder.deviceId"
                 name="deviceId"/>
        </div>
        <div class="form-group">
          <label for="technicianId">Technician ID</label>
          <input type="number" class="form-control" id="technicianId" required v-model="workOrder.technicianId"
                 name="technicianId"/>
        </div>
        <div class="form-group">
          <label for="productId">Product ID</label>
          <input type="number" class="form-control" id="productId" required v-model="workOrder.productId"
                 name="productId"/>
        </div>
        <div class="form-group">
          <label for="consumableId">Consumable ID</label>
          <input type="number" class="form-control" id="consumableId" required v-model="workOrder.consumableId"
                 name="consumableId"/>
        </div>
        <div class="form-group">
          <label for="status">Work order completed </label>
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
      selectedCreate: false
    };
  },
  methods: {
    createWorkOrder() {
      let data = {
        jobDescription: this.workOrder.jobDescription,
        deviceId: this.workOrder.deviceId,
        technicianId: this.workOrder.technicianId,
        consumableId: this.workOrder.consumableId,
        productId: this.workOrder.productId,
        status: this.workOrder.status,
      };

      ServiceWorkOrder.create(data)
          .then(this.submitted = true)
          .catch(e => {
            console.log(e);
          });
    },

    newWorkOrder() {
      this.submitted = false;
      this.workOrder = {};
    },

    startCreatingWorkOrder() {
      this.selectedCreate = true;
      this.workOrder = {};
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