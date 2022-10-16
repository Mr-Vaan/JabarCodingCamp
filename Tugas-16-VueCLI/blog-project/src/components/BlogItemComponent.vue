<template>
    <v-flex  xs6 >
        <v-card :to="`/blog/${blog.id}`">
          <v-img class="white--text" 
            :src="blog.photo ? apiDomain + blog.photo :'https://picsum.photos/200/300'"
            height="200px">
              <v-card-title 
                class="fill-height aling-end" 
                v-text="blog.title">
               </v-card-title>
          </v-img>
          <v-card-actions>
            <v-progress-linear color="blue-grey" height="7"></v-progress-linear>
          </v-card-actions>
          <v-card-actions>
            <span>{{ blog.title.substring(0,15) }}...</span>
          </v-card-actions>

        </v-card>
      </v-flex>
</template>

<script>
export default {
    data : ()=>({
    apiDomain : 'http://demo-api-vue.sanbercloud.com', 
  }),
  props :['blog']
}
</script>

