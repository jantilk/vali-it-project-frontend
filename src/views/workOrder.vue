<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="jobDescription">Job Description</label>
        <input type="text" class="form-control" id="jobDescription" required v-model="workOrder.jobDescription"
               name="jobDescription"/>
      </div>
      <div class="form-group">
        <label for="deviceId">Device ID</label>
        <input type="number" class="form-control" id="deviceId" required v-model="workOrder.deviceId" name="deviceId"/>
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
        <input type="checkbox" class="form-control" id="status" required v-model="workOrder.status" name="status"/>
      </div>

      <button @click="createWorkOrder" class="btn btn-success">Create</button>
    </div>

    <div v-else>
      <h4>Work order created successfully!</h4>
      <button class="btn btn-success" @click="newWorkOrder">Create another</button>
    </div>
  </div>
</template>

<script>
import ServiceWorkOrder from "../Services/ServiceWorkOrder";

export default {
  name: "workOrder",
  data() {
    return {
      workOrder: {
        id: null,
        jobDescription: "",
        deviceId:null,
        productId:null,
        technicianId:null,
        consumableId:null,
        status:null,
      },
      submitted: false
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