
<div class="container" id="main" v-cloak>
    <h1 class="text-center pb-4 pt-5">Retrouvez l'adresse exacte que vous recherchez</h1>
    <p class="text-center p-1 pb-5">Retrouver l'adresse complète d'un lieu que vous recherchez ou utilisez cet outil
comme une aide pour
compléter les formulaires nécessittant une adresse. L'utilisation de cette API permet de limiter l'entrée
d'adresse inexistante car elle se base sur les données du gouvernement.</p>
    <div class="row pb-4 align-items-center">
<div class="d-flex align-items-center justify-content-center">
    <img src="img/pin.jpg" style="height: 2em;">
    <h5 class="p-3">Rechercher une adresse:</h5>
    <form class="p-3">
        <input class="form-control" type="text" maxlength="50" v-model="searchAddress"
            placeholder="Entrez une adresse" autocomplete="off" required></input>
    </form>
</div>
    </div>
<div class="row adresse">
        <div class="d-flex justify-content-center">
            <ul id="adresse-list" v-bind:class="{ 'active': searchAddress.length > 4}">
                <li v-for="adresse in adresses">
                    <p class="p-1 mb-0">{{ adresse.properties['label'] }}</p><br>
                    <p class="coord">Latitude: {{ adresse.geometry["coordinates"][0] }} | Longitude: {{
                        adresse.geometry["coordinates"][1] }}</p>
                    <hr>
                </li>
            </ul>
        </div>
    </div>
</div>
<script>
const apiUrl = "https://api-adresse.data.gouv.fr/search/?q="
const limit = "&limit="

Vue.createApp({
    data() {
        return {
            adresses: null,
            searchAddress: "",
            searchLimit: "15"
        };
    },
    created: function () {
        this.fetchData()
    },
    watch: {
        searchAddress: "fetchData",
    },
    methods: {
        fetchData: async function () {
            const searchAddress = this.searchAddress
            const searchLimit = this.searchLimit

            if (searchAddress.length > 4) {
                try {
                    const response = await axios.get(apiUrl + searchAddress + limit + searchLimit)
                    this.adresses = response.data['features']
                } catch (error) {
                    console.log(error)
                }
            }
            else {

            }
        },
    }
}).mount("#main")
</script>