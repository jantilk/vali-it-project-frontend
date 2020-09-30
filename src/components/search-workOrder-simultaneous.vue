<template>
  <div>

    <div class="row col-md-12">


      <div class="col-md-2">

        <input type="checkbox"  id="cb" class="in-line form-control" v-model="searchAllParam" v-on:change="searchAll"/>
      </div>
      <div class="col-md-2">
        <input type="text" class="form-control" placeholder="Client" v-model="clientName" @input="searchWorkOrderSimultaneous"/>
      </div>
      <div class="col-md-2">
        <input type="text" class="form-control" placeholder="Device" v-model="deviceName" @input="searchWorkOrderSimultaneous"/>
      </div>
      <div class="col-md-2">
        <input type="text" class="form-control" placeholder="Product" v-model="productName" @input="searchWorkOrderSimultaneous"/>
      </div>
      <div class="col-md-2">
        <input type="text" class="form-control" placeholder="Technician" v-model="technicianName"
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
    <div class="row" >
      <div class="col-md-3">Client</div>
      <div class="col-md-3">Technician</div>
      <div class="col-md-3">Device name</div>
      <div class="col-md-3">Work done?</div>
    </div>

    <div>
      <ul class="list-group" >
        <v-card v-for="workOrder in workOrders" :color=workOrder.color >
          <a style="color: #293554" href="#">
            <div class="row" >
              <div class="col-md-3" >{{ workOrder.clientName }}</div>
              <div class="col-md-3">{{ workOrder.technicianName }}</div>
              <div class="col-md-3">{{ workOrder.deviceName }}</div>
              <div class="col-md-3">{{ workOrder.status }}</div>
            </div>
          </a>
        </v-card>
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
      deviceName: "",
      technicianName: "",
      clientName: "",
      searchAllParam: null,
      statusParamSimultaneous: null
    };
  },
  methods: {
    searchWorkOrderSimultaneous() {
      this.searchAllParam = null
      if (this.clientName === "" && this.deviceName === "" && this.productName === "" && this.technicianName === "" && this.statusParamSimultaneous === null) {
        this.workOrders = []
      } else {
        this.workOrders = [];
        ServiceWorkOrder.searchWorkOrderSimultaneous(this.clientName, this.deviceName, this.productName, this.technicianName, this.statusParamSimultaneous)
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
        this.productName = "";
        this.deviceName = "";
        this.technicianName = "";
        this.clientName = "";
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