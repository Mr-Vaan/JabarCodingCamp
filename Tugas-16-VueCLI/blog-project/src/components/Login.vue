<template>
    <v-card>
        <v-toolbar dark color="success">
            <v-btn icon dark @click.native="close">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>

        <v-container fluid>
            <v-form ref="form">
                <v-text-field v-model="email" label="E-mail" required append-icon="mdi-enmail"></v-text-field>
                <v-text-field v-model="password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'" 
                    label="password"  counter @click:append="showPassword = !showPassword" ></v-text-field>
                <div class="text-xs-center">
                    <v-btn color="success lighten-1" @click="submit">
                        login
                        <v-icon right dark>mdi-lock-open</v-icon>
                    </v-btn>
                </div>
            </v-form>

        </v-container>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            email : '',
            showPassword : false,
            password : '',
            apiDomain : 'http://demo-api-vue.sanbercloud.com',
        }
    },
    methods :{
        ...mapActions({
            setAlert : 'alert/set',
            setToken : 'auth/setToken'
        }),
        close (){
            this.$emit('closed', false)
        },
        submit(){
            const config = {
                method: 'post',
                url: `${this.apiDomain}/api/v2/auth/login`,
                data:{
                    'email' : this.email,
                    'password' : this.password
                }
            }

            this.axios(config)
                .then( response => {
                    this.setToken(response.data.access_token)
                    this.email = ''
                    this.password = ''
                    console.log(response.data)
                    this.setAlert({
                        status : true,
                        color : 'success',
                        text : 'Login Berhasil',
                    })
                })
                .catch( response => {
                    console.log(response)
                    this.setAlert({
                        status : true,
                        color : 'error',
                        text : 'Login Gagal'
                    })
                })
        }
    }
}
</script>
