<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Work Order List</h4>
      <ul class="list-group">
        <li class="list-group-item" v-for="(workOrder, index) in workOrders" :key="index">
          {{ workOrder.jobDescription }}
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import ServiceWorkOrder from "@/Services/ServiceWorkOrder";

export default {
  name: "all-workOrders",
  data() {
    return {
      workOrders: [],
      jobDescription: ""
    };
  },
  methods: {
    retrieveWorkOrders() {
      ServiceWorkOrder.getAll()
          .then(response => {
            this.workOrders = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.retrieveWorkOrders();
  }
};
</script>

<style scoped>

</style>