<template>
  <div>

    <div class="row col-md-12">


      <div class="col-md-2">

        <input type="checkbox" id="cb" class="in-line form-control" v-model="searchAllParam" v-on:change="searchAll"/>
      </div>
      <div class="col-md-2">
        <input type="text" class="form-control" placeholder="Client" v-model="clientName"
               @input="searchWorkOrderSimultaneous"/>
      </div>
      <div class="col-md-2">
        <input type="text" class="form-control" placeholder="Device" v-model="deviceName"
               @input="searchWorkOrderSimultaneous"/>
      </div>
      <div class="col-md-2">
        <input type="text" class="form-control" placeholder="Product" v-model="productName"
               @input="searchWorkOrderSimultaneous"/>
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
    <div v-if="!woSelected">
      <div v-if="searchConducted">
      <div class="row">
        <div class="col-md-2">ID</div>
        <div class="col-md-2">Client</div>
        <div class="col-md-2">Technician</div>
        <div class="col-md-2">Device name</div>
        <div class="col-md-2">Work done?</div>
        <div class="col-md-2">Description</div>
      </div>
    </div>
    </div>
    <div>
      <div v-if="!woSelected">
        <ul class="list-group">
          <v-card v-for="workOrder in workOrders" :color=workOrder.color>
            <a style="color: #293554" href="#">
              <div class="row">
                <div class="col-md-2">
                  <button @click="showSpecific(workOrder.workOrderId, workOrder.clientName, workOrder.technicianName, workOrder.deviceName,
               workOrder.status, workOrder.jobDescription)" class="btn btn-success">{{ workOrder.workOrderId }}
                  </button>
                </div>
                <div class="col-md-2">{{ workOrder.clientName }}</div>
                <div class="col-md-2">{{ workOrder.technicianName }}</div>
                <div class="col-md-2">{{ workOrder.deviceName }}</div>
                <div class="col-md-2">{{ workOrder.status }}</div>
                <div class="col-md-2">{{ workOrder.jobDescription }}</div>
              </div>
            </a>
          </v-card>
        </ul>
      </div>

      <div v-else>

        <ul class="list-group">

          <li class="list-group-item">
            Work order ID:
            {{ this.workOrderId }}
            <br>
            Client name:
            {{ this.workOrderClientName }}
            <br>
            Technician Name:
            {{ this.workOrderTechnicianName }}
            <br>
            Device name:
            {{ this.workOrderDeviceName }}
            <br>
            Work done:
            {{ this.workOrderStatus }}
            <button style="color:#00c4ff" @click="changeStatusSelectedF">
              <v-img
                  alt="Vuetify Logo"
                  class="shrink mr-2"
                  contain
                  src="@/assets/edit.png"
                  width="20"
              />
            </button>
            <div v-if="editStatusSelected">
              <button @click="changeWorkOrderStatus" class="btn btn-info">Change status</button>
              <!--              <span>New status: {{ this.workOrderStatus }}</span>-->

            </div>
            <br>

            Job Description:
            {{ this.workOrderJobDescription }}
            <button style="color:#00c4ff" @click="changeJobDescriptionSelectedF">
              <v-img
                  alt="Vuetify Logo"
                  class="shrink mr-2"
                  contain
                  src="@/assets/edit.png"
                  width="20"
              />
            </button>
            <div v-if="editJobDescriptionSelected">
              <input type="text" placeholder="add new descript. + enter"
                     v-on:keyup.enter="changeJobDescriptionIfSelectedF" v-model="newWOdescription"/>
              <br>


            </div>


          </li>
        </ul>
      </div>


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
      woSelected: false,
      searchConducted: false,
      workOrderId: null,
      workOrderJobDescription: null,
      editStatusSelected: false,
      editJobDescriptionSelected: false,
      newWOdescription: "",
      statusParamSimultaneous: null
    };
  },
  methods: {
    searchWorkOrderSimultaneous() {
      this.searchAllParam = null;
      this.searchConducted=true;
      if (this.clientName === "" && this.deviceName === "" && this.productName === "" && this.technicianName === "" && this.statusParamSimultaneous === null) {
        this.workOrders = []
        this.searchConducted=false;
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
    showSpecific(workOrderId, workOrderClientName, workOrderTechnicianName, workOrderDeviceName, workOrderStatus, workOrderJobDescription) {
      this.woSelected = true;
      this.searchConducted=true;
      this.workOrderId = workOrderId;
      this.workOrderClientName = workOrderClientName;
      this.workOrderTechnicianName = workOrderTechnicianName;
      this.workOrderStatus = workOrderStatus;
      this.workOrderDeviceName = workOrderDeviceName;
      this.workOrderJobDescription = workOrderJobDescription;

      // ServiceWorkOrder.findWOspecificId(workOrderId)
      //     .then(response => {
      //       this.workOrders = response.data;
      //       // console.log(response.data);
      //     })
      //     .catch(e => {
      //       console.log(e);
      //     });
    },
    changeStatusSelectedF() {
      this.editStatusSelected = true;
    },
    changeWorkOrderStatus() {
      this.workOrderStatus = !this.workOrderStatus;
      ServiceWorkOrder.changeStatus(this.workOrderId)
      this.editStatusSelected = false;
    },
    changeJobDescriptionSelectedF() {
      this.editJobDescriptionSelected = true;
    },
    changeJobDescriptionIfSelectedF() {
      this.workOrderJobDescription = this.newWOdescription;
      ServiceWorkOrder.changeWorkOrderJobDescription(this.workOrderId, this.newWOdescription)
      this.editJobDescriptionSelected = false;
    },
    searchAll() {
      if (this.searchAllParam) {
        this.statusParamSimultaneous = null;
        this.searchConducted=true;
        this.productName = "";
        this.deviceName = "";
        this.technicianName = "";
        this.clientName = "";
        this.searchConducted=true;
        ServiceWorkOrder.findAllWo()
            .then(response => {
              this.workOrders = response.data;
              // console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
      } else {
        this.searchAllParam=null;
        this.searchConducted=false;
        this.workOrders = [];
        this.statusParamSimultaneous = null;
      }
    }
  }
};
</script>

<style scoped>

</style>