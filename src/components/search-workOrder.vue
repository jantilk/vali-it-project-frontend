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
            <button @click="showSpecific(workOrder.workOrderId, workOrder.clientName, workOrder.technicianName, workOrder.status, workOrder.deviceName, workOrder.productName,
             workOrder.consumableName, workOrder.jobDescription)" class="btn btn-success">{{ workOrder.workOrderId }}</button>
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

          <li class="list-group-item">

            ID:
            {{ this.workOrderId }}
            <br>
            Client name:
            {{ this.workOrderClientName }}
            <br>
            Technician Name:
            {{ this.workOrderTechnicianName }}

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
            /></button>
            <div v-if="editStatusSelected">
              <button @click="changeWorkOrderStatus" class="btn btn-info">Change status</button>
<!--              <span>New status: {{ this.workOrderStatus }}</span>-->

            </div>
            <br>
            Device name:
            {{ this.workOrderDeviceName }}
            <br>
            Consumable name:
            {{ this.workOrderConsumableName }}
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
              <input type="text" placeholder="add new descript. + enter" v-on:keyup.enter="changeJobDescriptionIfSelectedF" v-model="newWOdescription"/>
              <br>



            </div>



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
      workOrderClientName:null,
      workOrderTechnicianName:null,
      workOrderStatus:null,
      workOrderDeviceName:null,
      workOrderProductName:null,
      workOrderConsumableName:null,
      workOrderJobDescription:null,
      editStatusSelected:false,
      editJobDescriptionSelected:false,
      newWOdescription:"",
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
              console.log(response.data);
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

            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      this.workOrderId=this.workOrders.id
    },
    showSpecific(workOrderId, workOrderClientName, workOrderTechnicianName, workOrderStatus, workOrderDeviceName, workOrderProductName,
    workOrderConsumableName, workOrderJobDescription) {
      this.woSelected = true;
      this.workOrderId = workOrderId;
      this.workOrderClientName=workOrderClientName;
      this.workOrderTechnicianName=workOrderTechnicianName;
      this.workOrderStatus=workOrderStatus;
      this.workOrderDeviceName=workOrderDeviceName;
      this.workOrderProductName=workOrderProductName;
      this.workOrderConsumableName=workOrderConsumableName;
      this.workOrderJobDescription=workOrderJobDescription;

      // ServiceWorkOrder.findWOspecificId(workOrderId)
      //     .then(response => {
      //       this.workOrders = response.data;
      //       // console.log(response.data);
      //     })
      //     .catch(e => {
      //       console.log(e);
      //     });
    },
    changeStatusSelectedF(){
      this.editStatusSelected=true;
    },
    changeWorkOrderStatus(){
      this.workOrderStatus=!this.workOrderStatus;
      ServiceWorkOrder.changeStatus(this.workOrderId)
      this.editStatusSelected=false;
    },
    changeJobDescriptionSelectedF(){
      this.editJobDescriptionSelected=true;

    },
    changeJobDescriptionIfSelectedF(){
      this.workOrderJobDescription=this.newWOdescription;
      ServiceWorkOrder.changeWorkOrderJobDescription(this.workOrderId, this.newWOdescription)
      this.editJobDescriptionSelected=false;
  }}
};
</script>

<style scoped>

</style>