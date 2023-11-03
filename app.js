const app = Vue.createApp({
    data(){
        return {
            theItemFromUser: "",
            arrayOfItems: [],
            showList: true
        };
    },

    methods: {
        addGoal(){
            this.arrayOfItems.push(this.theItemFromUser);
            this.theItemFromUser = ''
        },

        removeListItem(index){
            this.arrayOfItems.splice(index, 1);
        },

        hideTheList(){
            this.showList = !this.showList;
        }
    }
})

app.mount("#assignment");