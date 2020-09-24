<template>
  <div>

    <div class="row col-md-12">

      <div class="col-md-0">
        Search all
        <input type="checkbox" id="cb" class="shrink mr-2 mt-2" v-model="searchAllParam" v-on:change="searchAll"/>
      </div>
      <div class="col-md-2">
        <input type="text" placeholder="Search by client" v-model="clientName" @input="searchWorkOrderSimultaneous"/>
      </div>
      <div class="col-md-2">
        <input type="text" placeholder="Search by device SN" v-model="sn" @input="searchWorkOrderSimultaneous"/>
      </div>
      <div class="col-md-2">
        <input type="text" placeholder="Search by product" v-model="productName" @input="searchWorkOrderSimultaneous"/>
      </div>
      <div class="col-md-2">
        <input type="text" placeholder="Search by technician" v-model="technicianName"
               @input="searchWorkOrderSimultaneous"/>

    </div>
    </div>

    <div align="center" class="row">
      <div class="col-md-12">
        Done
        <input type="radio" v-model="statusParamSimultaneous" @click="" v-on:change="searchWorkOrderSimultaneous"
               value=true>

        Not done
        <input type="radio" v-model="statusParamSimultaneous" @click="this.searchAllParam=null"
               v-on:change="searchWorkOrderSimultaneous" value=false>

        Both
        <input type="radio" v-model="statusParamSimultaneous" @click="this.searchAllParam=null"
               v-on:change="searchWorkOrderSimultaneous">
      </div>
      </div>




    <br>
    <div class="row">
      <div class="col-md-2">Client</div>
      <div class="col-md-2">Technician</div>
      <div class="col-md-2">Product</div>
      <div class="col-md-2">Serial Number</div>
      <div class="col-md-2">Work done?</div>
    </div>

    <div>
      <ul class="list-group">
        <li class="list-group-item" v-for="workOrder in workOrders">
          <a href="#">
            <div class="row">
              <div class="col-md-2">{{ workOrder.clientName }}</div>
              <div class="col-md-2">{{ workOrder.technicianName }}</div>
              <div class="col-md-2">{{ workOrder.productName }}</div>
              <div class="col-md-2">{{ workOrder.serialNumber }}</div>
              <!--              <div class="col-md-2">{{workOrder.workOrderId}}</div>-->
              <div class="col-md-2">{{ workOrder.status }}</div>
            </div>
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>


<script>
import ServiceClient from "@/Services/ServiceClient";
import ServiceDevice from "@/Services/ServiceDevice";
import client from "@/views/client";
import ServiceWorkOrder from "@/Services/ServiceWorkOrder";

export default {
  name: "search-workOrder-simultaneous",
  data() {
    return {
      workOrders: [],
      productName: "",
      sn: "",
      technicianName: "",
      clientName: "",
      searchAllParam: null,
      statusParamSimultaneous: null
    };
  },
  methods: {
    searchWorkOrderSimultaneous() {
      this.searchAllParam = null
      if (this.clientName === "" && this.sn === "" && this.productName === "" && this.technicianName === "" && this.statusParamSimultaneous === null) {
        this.workOrders = []
      } else {
        this.workOrders = [];
        ServiceWorkOrder.searchWorkOrderSimultaneous(this.clientName, this.sn, this.productName, this.technicianName, this.statusParamSimultaneous)
            .then(response => {
              this.workOrders = response.data;
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
      }
    },
    searchAll() {
      if (this.searchAllParam) {
        this.statusParamSimultaneous = null;
        ServiceWorkOrder.findAllWo()
            .then(response => {
              this.workOrders = response.data;
              // console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
      } else {
        this.workOrders = [];
        this.statusParamSimultaneous = null;
      }
    }
  }
};
</script>

<style scoped>

</style>