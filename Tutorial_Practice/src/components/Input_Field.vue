<template>
    <h1>Getting Input Field</h1>
    <label for="name">Name: </label>
    <input type="text" v-model="name">
    <br>
    <br>
    <br>
    <label for="depar">Depar: </label>
    <input type="text" v-model="depar">
    <br>
    <br>
    <br>
    <button v-on:click="getinputdata()">Get Values</button>
    <br>
    <p>Name: {{ getinputdata().name }}</p>
    <p>Depar: {{ getinputdata().depar }}</p>
     <!-- Radio And Check Boxes value get -->
    <h1>Getting Radio And Check Boxes value</h1>
     <h4>Cars</h4>
     <label for="sonata" >Sonata </label>
     <input type="checkbox" v-model="cars" value="sonata" id="sonata">
     <br>
     <br>
     <label for="elantra">Elantra </label>
     <input type="checkbox" v-model="cars" value="elantra" id="elantra">
     <br>
     <br>
     <label for="tucson">Tucson </label>
     <input type="checkbox" v-model="cars" value="tucson" id="tucson">
     <br>
     <h4>Departments</h4>
     <label for="BSE">BSE </label>
     <input type="radio" v-model="depart" name="depart" value="BSE" id="BSE">
     <br>
     <br>
     <label for="CSS">CSS </label>
     <input type="radio" v-model="depart" name="depart" value="CSS" id="CSS">
     <h5>Select Cars: {{cars}}</h5>
     <h5>Select Department: {{depart}}</h5>


</template>

<script>
export default {
    name: 'Input_Field',
    data() {
        return {
            name: "",
            depar: "",
            cars:[],
            depart: ''
        }
    },

    methods: {
        getinputdata() {
            return {
                name: this.name,
                depar: this.depar
            }
        }
    }
}

</script>