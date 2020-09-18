<template>
  <div class="list row">
    <div class="col-md-12">
      <br>
      <br>
      <h4>Search for work orders</h4>

      <div class="input-group mb-1">

        <input type="text" class="form-control" placeholder="Search by tech./dev./prod./cons. id"
               v-model="anyParamWO" v-on:input="searchAnyParamWO"/>
      </div>
    </div>

    <div class="col-md-12">
      All incomplete work orders
      <input type="radio" v-model="statusParamWO" v-on:change="searchByStatus" value=false>
      <br>
      All done work orders
      <input type="radio" v-model="statusParamWO" v-on:change="searchByStatus" value=true>
      <br>
      <br>
    </div>

    <div class="col-md-12">
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
      anyParamWO: null,
      statusParamWO: false,
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
    },
    searchByStatus() {
      ServiceWorkOrder.findNotDone(this.statusParamWO)
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