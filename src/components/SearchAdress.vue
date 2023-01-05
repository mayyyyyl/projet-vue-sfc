<template>
    <div class="container" id="main" v-cloak>
        <h1 class="text-center pb-4 pt-5">Retrouvez l'adresse exacte que vous recherchez</h1>
        <p class="text-center p-1 pb-5">Retrouver l'adresse complète d'un lieu que vous recherchez ou utilisez cet outil
            comme une aide pour
            compléter les formulaires nécessittant une adresse. L'utilisation de cette API permet de limiter l'entrée
            d'adresse inexistante car elle se base sur les données du gouvernement.</p>
        <div class="row pb-4 align-items-center">
            <div class="d-flex align-items-center justify-content-center">
                <img src="../assets/pin.jpg" style="height: 2em;">
                <h5 class="p-3">Rechercher une adresse:</h5>
                <form class="p-3">
                    <input class="form-control" type="text" maxlength="50" v-model="searchAddress"
                        placeholder="Entrez une adresse" autocomplete="off" required />
                </form>
            </div>
        </div>
        <div class="row adresse">
            <div class="d-flex justify-content-center">
                <ul id="adresse-list" v-bind:class="{ 'active': searchAddress.length > 4 }">
                    <li v-for="adresse in adresses">
                        <p class="p-1 mb-0">{{ adresse.properties['label'] }}</p><br>
                        <p class="coord">Latitude: {{ adresse.geometry["coordinates"][0] }} | Longitude: {{
                            adresse.geometry["coordinates"][1]
                        }}</p>
                        <hr>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
const apiUrl = "https://api-adresse.data.gouv.fr/search/?q="
const limit = "&limit="

export default {
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
}
</script>
<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    list-style: none;
    border-radius: 2px;
    padding: .3em;
}

li:hover {
    background-color: rgb(184, 30, 30);
    color: rgb(255, 244, 244);
}

.coord {
    font-size: 0.8em;
    font-style: italic;
}

hr {
    size: 80%;
}

ul {
    display: none;
    max-height: 22em;
    width: 30em;
    overflow-y: scroll;
}

ul.active {
    display: block;
}

/* ul overflow scrollbar style */
ul::-webkit-scrollbar {
    width: 12px;
}

ul::-webkit-scrollbar-thumb {
    background-color: rgb(210, 210, 210);
    border-radius: 20px;
    border: 3px solid rgb(172, 169, 169);
}
</style>