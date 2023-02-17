<template>

    <h2>Simple Form In Vue </h2>


    <label for="name">Name: </label>
    <input type="text" v-model="all_Data.name" name="name" id="name">
    <br>
    <br>
    <label for="depar">Depart: </label>
    <input type="text" name="depar" v-model="all_Data.depar" id="depar">
    <br>
    <br>
    <label for="phone">Phone: </label>
    <input type="number" name="phone" v-model="all_Data.phone" id="phone">
    <br>
    <br>
    <label for="course">Courses </label>
    <br>
    <br>
    <label for="css">CSS </label>
    <input type="checkbox" v-model="all_Data.course" value="css" id="css">
    <label for="bse">BSE </label>
    <input type="checkbox" v-model="all_Data.course" value="bse" id="bse">
    <label for="it">IT </label>
    <input type="checkbox" v-model="all_Data.course" value="it" id="it">
    <br>
    <br>
    <label for="country">Country </label>
    <select name="country" v-model="all_Data.country" id="country">
        <option value=""></option>
        <option value="1">USA</option>
        <option value="2">UK</option>
        <option value="3">PK</option>
        <option value="4">IND</option>
        <option value="5">BAN</option>
    </select>
    <br>
    <br>
    <label for="Male">Male </label>
    <input type="radio" v-model="all_Data.gender" name="gender" value="Male" id="Male">
    <label for="Female"> Female </label>
    <input type="radio" v-model="all_Data.gender" name="gender" value="Female" id="Female">
    <br>
    <br>
    <button v-on:click="get_Data">Submit</button>
    <br>
    <br>
    <p>Name: {{ all_Data.name }}</p>
    <p>Depar: {{ all_Data.depar }}</p>
    <p>Phone: {{  all_Data.phone }}</p>
    <p>Course: {{ all_Data.course }}</p>
    <p>Gender: {{ all_Data.gender }}</p>
    <p>Country:{{ all_Data.country }}</p>


    <h3>Error</h3>
    <p>Error : {{ error }}</p>

</template>


<script>
export default {
    name: 'Simple_Form',

    data() {
        return {
            all_Data: {
                name: "",
                depar: "",
                phone: "",
                course: [],
                country: "",
                gender: "",
            },
            error: [],

        }
    },
    methods: {
        get_Data() {
            this.error = []
            for(const item in this.all_Data)
            {
                if(this.all_Data[item]==""|| this.all_Data[item].length===0)
                {
                    this.error.push(item)
                }
            }
            if(this.error.length===0)
            {
                alert('Data Submitted')
            }
            return this.all_Data , this.error
        }
    }
}
</script>