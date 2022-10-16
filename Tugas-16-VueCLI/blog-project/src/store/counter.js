export default{
    namespaced :true,
    state :{
        count :0
    },
    getters : {
        count : (state) =>  {
            return state.count
        }
    },
    mutations:{
        increament :( state, payload) => {
            state.count += payload
        }
    },
    actions :{

    },
}
