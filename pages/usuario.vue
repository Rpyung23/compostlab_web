<template>
  <div class="content">
    <base-header>
      <div class="align-items-center py-3">
        <card
          class="no-border-card col"
          style="margin-bottom: 0.5rem"
          body-classes="px-0 pb-1 card-bodyTopOpcionesRPagosVehiculoPRoduccionPanelDespachoBusqueda cardSelectRubrosEstadosPagosVehiculoProduccionContainerPanelDespachoBusqueda"
          footer-classes="pb-2"
        >
          <div
            class="cardTextoRPagosVehiculoProduccionPanelDespachoBusqueda"
          ></div>

          <div
            class="cardSelectRubrosEstadosPagosVehiculoProduccionContainerPanelDespachoBusqueda"
          >
            <div class="buttonCenterEndDerecha">
              <base-button icon type="primary" size="sm" @click="readUsuarioALL()">
                <span class="btn-inner--icon"
                  ><i class="el-icon-search"></i
                ></span>
              </base-button>
              <base-button
                type="default"
                size="sm"
                @click="showAddInsumo()"
                title="NUEVO USUARIO"
              >
                <span class="btn-inner--icon"
                  ><i class="ni ni-fat-add"></i
                ></span>
              </base-button>
            </div>
          </div>
        </card>

        <card
          class="no-border-card"
          style="margin-bottom: 0rem"
          body-classes="card-bodyRPagosVehiculoProduccion px-0 pb-1"
          footer-classes="pb-2"
        >
          <el-table
            element-loading-text="Cargando Datos..."
            :data="mListUsuarios"
            row-key="id"
            v-loading="loadingUsuarios"
            class="tablePanelControlProduccion"
            header-row-class-name="thead-dark"
            height="calc(100vh - 8.90rem)"
            style="width: 100%"
          >
            <el-table-column label="Actions" width="180">
              <template slot-scope="scope">
                <base-button size="sm" title="EDITAR" type="primary"
                  ><i class="ni ni-ruler-pencil"></i
                ></base-button>
                <base-button size="sm" title="CONTRASEÑA" type="default"
                  ><i class="ni ni-key-25"></i
                ></base-button>
                <base-button size="sm" title="PERMISOS" type="danger"
                  ><i class="ni ni-like-2"></i
                ></base-button>
              </template>
            </el-table-column>

            <el-table-column
              v-for="column in tableColumnsUsuarios"
              :key="column.label"
              v-bind="column"
            >
            </el-table-column>

            <el-table-column
      prop="estado"
      label="ESTADO"
      width="150">
      <template slot-scope="scope">
        {{scope.row.estado == 1 ? 'ACTIVADO' : 'INACTIVO'}}
      </template>
    </el-table-column>

            <div slot="empty"></div>
          </el-table>
        </card>
      </div>
    </base-header>

  </div>
</template>
<script>
import flatPicker from "vue-flatpickr-component";
import { getBase64LogoReportes } from "../util/logoReport";
import { convertSecondtoTimeString } from "../util/fechas";
import "flatpickr/dist/flatpickr.css";
import { getFecha_dd_mm_yyyy, FechaStringToHour } from "../util/fechas";

import {
  Table,
  TableColumn,
  Select,
  Option,
  Autocomplete,
  DatePicker,
  RadioButton,
  Radio,
  Notification,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Popover,
  Button,
  Loading,
  Switch,
  Tag
} from "element-ui";

import RouteBreadCrumb from "@/components/argon-core/Breadcrumb/RouteBreadcrumb";
import { BasePagination } from "@/components/argon-core";
import clientPaginationMixin from "~/components/tables/PaginatedTables/clientPaginationMixin";
import swal from "sweetalert2";
import Tabs from "@/components/argon-core/Tabs/Tabs";
import TabPane from "@/components/argon-core/Tabs/Tab";

export default {
  mixins: [clientPaginationMixin],
  layout: "DashboardLayout",
  components: {
    Tabs,
    TabPane,
    BasePagination,
    flatPicker,
    RouteBreadCrumb,
    [Tag.name]:Tag,
    [Switch.name]: Switch,
    [DatePicker.name]: DatePicker,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [Notification.name]: Notification,
    [Autocomplete.name]: Autocomplete,
    [TableColumn.name]: TableColumn,
    [RadioButton.name]: RadioButton,
    [Radio.name]: Radio,
    [Checkbox.name]: Checkbox,
    [CheckboxButton.name]: CheckboxButton,
    [CheckboxGroup.name]: CheckboxGroup,
    [Popover.name]: Popover,
    [Button.name]: Button,
  },
  data() {
    return {
      mListUsuarios:[],
      loadingUsuarios:false,
      tableColumnsUsuarios: [
        {
          prop: "email_usuario",
          label: "EMAIL",
          minWidth: 240,
        },
        {
          prop: "nombres",
          label: "NOMBRES",
          minWidth: 230,
        },
        {
          prop: "apellido",
          label: "APELLIDOS",
          minWidth: 230,
        },
        {
          prop: "cedula",
          label: "CEDULA / DNI",
          minWidth: 180,
        },
        {
          prop: "telefono",
          label: "TELEFONO",
          minWidth: 180,
        }
      ],
      token: this.$cookies.get("token"),
    };
  },
  methods: {
    async readUsuarioALL() {
      this.loadingUsuarios = true;
      this.mListUsuarios = [];
      try {
        var datos = await this.$axios.post(
          process.env.baseUrl + "/read_usuarios",
          { token: this.token }
        );

        if (datos.data.status_code == 200) {
          /*Notification.success({
              title: "Panel Salidas",
              message: "Datos consultados con éxito",
            });*/
          this.mListUsuarios.push(...datos.data.datos);
        } else if (datos.data.status_code == 300) {
          Notification.info({
            title: "Panel Salidas",
            message: "No existen datos disponibles.",
          });
        } else {
          Notification.error({
            title: "Panel Salidas",
            message: datos.data.msm,
          });
        }
      } catch (error) {
        console.log(error);
        Notification.info({
          title: "TryCatch Panel Salidas",
          message: error.toString(),
        });
      }
      this.loadingUsuarios = false;
    }
  },
  mounted() {
    this.readUsuarioALL();
  },
};
</script>
<style>
.containerModalRecorridoPanelDespacho {
  display: flex;
}
.cardControlesMarc {
  height: calc(80vh);
  width: 18rem;
}
.current-row {
  background-color: rgba(0, 0, 0, 0.178);
}

.el-table__body tr.current-row > td.el-table__cell {
  background-color: rgba(0, 0, 0, 0.178) !important;
}

.mapa {
  width: 100%;
  height: calc(80vh);
}

.form-group {
  margin-bottom: 0rem;
}

.form-controlPersonal {
  display: block;
  width: 100%;
  /* height: calc(1.5em + 1.25rem + 2px); */
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #8898aa;
  background-color: #fff;
  background-clip: padding-box;
  outline: none;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  margin-bottom: 0rem;
  box-shadow: 0 3px 2px rgba(233, 236, 239, 0.05);
  transition: all 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.el-loading-text {
  color: black !important;
}

.el-icon-loading {
  color: black !important;
}

.cardTextoRPagosVehiculoProduccionPanelDespachoBusqueda {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.cardopcinesRPagosVehiculoProduccionPanelDespachoBusqueda {
  display: flex;
  align-items: center;
}

.cardSelectRubrosEstadosPagosVehiculoProduccionContainerPanelDespachoBusqueda {
  display: flex;
  justify-content: space-between;
}

.el-table .warning-row-panelControlProduccion {
  background: rgba(255, 0, 0, 0.342) !important;
}

.el-table .success-row-panelControlProduccion {
  background: hsla(34, 88%, 61%, 0.384) !important;
}

.el-table .finalizado-row-panelControlProduccion {
  background: rgba(140, 248, 126, 0.384) !important;
}

.el-table .diferido-row-panelControlProduccion {
  background: hsla(226, 88%, 61%, 0.274) !important;
}

.no-border-card .card-footer {
  border-top: 0;
}

.card-bodyRPagosVehiculoProduccion {
  padding: 0rem !important;
  height: calc(100vh - 8.59rem);
  overflow: none;
}

.card-bodyTopOpcionesRPagosVehiculoPRoduccionPanelDespachoBusqueda {
  padding-top: 0.25rem !important;
}
.cardOpcinesRPagosVehiculoProduccionPanelDespachoBusqueda {
  display: flex;
  align-items: center;
}
</style>
