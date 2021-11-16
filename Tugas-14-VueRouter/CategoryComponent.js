export const CategoryComponent = {
    data(){
        return {
            categories: [
                {
                    id: 1,
                    title: 'Alat Tulis',
                    description : 'Alat tulis adalah alat yang digunakan untuk menulis, diantaranya pulpen, pensil, penghapus, dll.'
                },
                {
                    id: 2,
                    title: 'Alat Mandi',
                    description : 'Alat tulis adalah alat yang digunakan untuk mandi, diantaranya gayung, sikat gigi, handuk, dll.'

                },
                {
                    id: 3,
                    title: 'Alat Masak',
                    description : 'Alat tulis adalah alat yang digunakan untuk memasak, diantaranya panci, kompor, katel, dll.'

                },
                
            ]
        }
    },
    computed: {
        category() {
            return this.categories.filter((category)=>{
                return category.id === parseInt(this.$route.params.id)                
            })[0]
        }
    },
    template: `<div >
            <h1>Category :  {{ category.title }}</h1>
            <ul>
                <li v-for="(num, value) of category">
                    {{ num +' : '+ value }} <br>
                </li>
            </ul>
        </div>`,
   
}