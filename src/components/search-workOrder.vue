<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by anything"
               v-model="anyParamWO"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="searchAnyParamWO">Search</button>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <h4>Work order List</h4>
      <ul class="list-group">
        <li class="list-group-item" v-for="workOrder in workOrders">
          Work Order ID:
          {{ workOrder.id }}
          <br>
          Technician ID:
          {{ workOrder.technicianId }}
          <br>
          Work done:
          {{ workOrder.status }}
          <br>
          Device ID:
          {{ workOrder.deviceId }}
          <br>
          Product ID:
          {{ workOrder.productId }}
          <br>
          Consumable ID:
          {{ workOrder.consumableId }}
          <br>
          Job Description:
          {{ workOrder.jobDescription }}

        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import ServiceWorkOrder from "@/Services/ServiceWorkOrder";

export default {
  name: "workOrders",
  data() {
    return {
      workOrders: [],
      anyParamWO: null
    };
  },
  methods: {
    searchAnyParamWO() {
      ServiceWorkOrder.findByQuery(this.anyParamWO)
          .then(response => {
            this.workOrders = response.data;
            // console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
};
</script>

<style scoped>

</style>