export const CategoriesComponent = {
    data () {
        return {
            categories: [
                {
                    id: 1,
                    title: 'Alat Tulis'
                },
                {
                    id: 2,
                    title: 'Alat Mandi'
                },
                {
                    id: 3,
                    title: 'Alat Masak'
                },
                
            ]
        }
    },
    template: `
        <div>
            <h1>Daftar Kategori</h1>
            <ul>
                <li v-for="category of categories">
                    <router-link :to="'/category/'+category.id"> 
                        {{ category.title }} 
                    </router-link>
                </li>
            </ul>
        </div>
    ` 
}