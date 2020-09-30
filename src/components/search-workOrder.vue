<template>
  <div class="list row">

    <div class="col-md-12">

      <div class="input-group mb-3">

        <input type="text" class="form-control" placeholder="Lazy search"
               v-model="anyParamWO" @click="searchAnyParamWO" @input="searchAnyParamWO"/>
      </div>
    </div>

    <div class="col-md-12">
      All incomplete work orders
      <input type="radio" v-model="statusParamWO" v-on:change="searchByStatus" value=false>

      All done work orders
      <input type="radio" v-model="statusParamWO" v-on:change="searchByStatus" value=true>

    </div>
    <div class="col-md-12">

      <div v-if="!woSelected">

        <ul class="list-group">

          <li class="list-group-item" v-for="workOrder in workOrders">

            Work Order ID:
            <button @click="showSpecific(workOrder.id)" class="btn btn-success">{{ workOrder.id }}</button>
            <br>
            Client name:
            {{ workOrder.clientName }}
            <br>
            Technician name:
            {{ workOrder.technicianName }}
            <br>
            Work done:
            {{ workOrder.status }}
            <br>
            Device name:
            {{ workOrder.deviceName }}
            <br>
            Product name:
            {{ workOrder.productName }}
            <br>
            Consumable name:
            {{ workOrder.consumableName }}
            <br>
            Job Description:
            {{ workOrder.jobDescription }}

          </li>
        </ul>
      </div>

      <div v-else>

        <ul class="list-group">

          <li class="list-group-item" v-for="workOrder in workOrders">

            ID:
            {{ workOrder.id }}
            <br>
            Technician ID:
            {{ workOrder.technicianName }}
            <br>
            Work done:
            {{ workOrder.status }}
            <br>
            Device ID:
            {{ workOrder.name }}
            <br>
            Product ID:
            {{ workOrder.productName }}
            <br>
<!--            Consumable ID:-->
<!--            {{ workOrder.consumableId }}-->


<!--            <br>-->
<!--            Job Description:-->
<!--            {{ workOrder.jobDescription }}-->


<!--          </li>-->
<!--        </ul>-->

<!--        <ul class="list-group">-->
<!--          <li class="list-group-item" v-for="workOrderConsumable in workOrderConsumables">-->

<!--            Consumables:-->
<!--                        Work Order Consumable:-->
<!--                        {{ workOrderConsumable.WorkOrderconsumableId }}-->

          </li>
        </ul>
      </div>

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
      statusParamWO: null,
      woSelected: false,
      workOrderId: null,
      workOrderConsumables: []
    };
  },
  methods: {
    searchAnyParamWO() {
      this.statusParamWO = null;
      if (this.anyParamWO) {
        this.woSelected = false;
        ServiceWorkOrder.findByQuery(this.anyParamWO)
            .then(response => {
              this.workOrders = response.data;
              // console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
      } else {
        this.workOrders = [];
      }
    },
    // searchWorkOrderConsumables() {
    //    ServiceWorkOrder.findWorkOrderConsumable(this.workOrderId)
    //         .then(response => {
    //           this.workOrderConsumables = response.data;
    //           // console.log(response.data);
    //         })
    //         .catch(e => {
    //           console.log(e);
    //         });
    //   }
    // },
    searchByStatus() {
      this.woSelected = false;
      this.anyParamWO = null;
      ServiceWorkOrder.findNotDone(this.statusParamWO)
          .then(response => {
            this.workOrders = response.data;
            // console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    showSpecific(workOrderId) {
      this.woSelected = true;
      this.workOrderId = workOrderId;
      ServiceWorkOrder.findWOspecificId(workOrderId)
          .then(response => {
            this.workOrders = response.data;
            // console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
  }
};
</script>

<style scoped>

</style>