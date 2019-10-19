var photoSearchApp = new Vue({
    el: "#photo-search",
    data:{
        authorNameSearch: "",
        photoFeed: null
    },
    mounted() {
        axios.get('https://picsum.photos/v2/list?page=2&limit=10')
            .then(res => {
                this.photoFeed = res.data;
            })
            .catch(err=> console.log(err))
    },
    computed:{
        filteredPhotoFeed: function(){
            var photos = this.photoFeed;
            var authorNameSearch = this.authorNameSearch;
        
            if(!authorNameSearch){
                return photos;
            }
     
            photos = photos.filter(function(item){
                if(item.author.toLowerCase().indexOf(authorNameSearch) !== -1){
                    return item;
                }
            })

            return photos;    
        }
    }
});