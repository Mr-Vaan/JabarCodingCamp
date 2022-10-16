<template>
    <div>
        <v-card v-if="blog.id">
            <v-img :src="blog.photo ? apiDomain + blog.photo : 'https://picsum.photos/300/200'" class="white--text" height="200px">
            <v-card-title class="fill-height alling-end" v-text="blog.title"></v-card-title>
            </v-img>

            <v-card-text>
                <v-simple-table dense>
                    <tbody>
                        <tr>
                            <td><v-icon>mdi-format-title</v-icon>Judul</td>
                            <td class="blue--text">{{ blog.title }}</td>
                        </tr>
                        <tr>
                            <td><v-icon>mdi-note</v-icon>Deskripsi</td>
                            <td>{{ blog.description }}</td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    data:()=>({
        blog : {},
        apiDomain : 'http://demo-api-vue.sanbercloud.com',
    }),
    methods : {
        go() {
            let { id } = this.$route.params
            const config ={
                method : 'get',
                url : `${this.apiDomain}/api/blog/${id}`
            }

            this.axios(config)
                .then(response =>{
                    let { blog } = response.data
                    this.blog = blog
                })
                .catch(error =>{
                    console.log(error)
                })
        }
    },
    created(){
        this.go()
    }
}
</script>

