<template>
     
    <v-snackbar
      v-model="alert"
      :color="color"
      buttom
      timeout="3000"
      multi-line
      outlined
    >
      {{ text }}
      
      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="close"
        >
          Close  
        </v-btn>
      </template>
    </v-snackbar>
 </template>

<script>
    import {mapGetters ,mapActions} from "vuex"
    export default {
        name : "alert",
        computed : {
            ...mapGetters({
                status : "alert/status",
                color : "alert/color",
                text : "alert/text",
            }),
            alert :{
                get(){
                    return this.status
                },
                set(value){
                    this.setAlert({
                        status : value
                    })
                }
            }
        },
        methods : {
            ...mapActions({
                setAlert : "alert/set"
            }),
            close(){
                this.setAlert({
                    status : false
                })
            }
        }
    }
</script>


