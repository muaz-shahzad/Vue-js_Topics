<template>
    <h1>Loops</h1>
    <ul style="list-style: none;">
        <li v-for="n in Data_List" :key="n">
            {{ n }}
        </li>
    </ul>
    <br>
    <br>
    <br>
    <!--  -->
    <div>
        <ul style="list-style: none;">
            <li v-for="st in User" :key="st.id">
                <span @click="handleClick(st.id)">
                    Name: {{ st.name }}
                </span>
                <br>
                Department: {{ st.Depar }}
            </li>
        </ul>
        <div v-if="selectedUserId !== null">
            Selected User ID: {{ selectedUserId }}
        </div>
    </div>


</template>

<script>
export default {
    name: 'Loops-comp',

    data() {
        return {
            Data_List: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            User: [
                {
                    id: 0,
                    name: "M Muaz Shahzad",
                    Depar: "BSE"
                },
                {
                    id: 1,
                    name: "TALHA",
                    Depar: "CSS"
                }, {
                    id: 2,
                    name: "HASSAN",
                    Depar: "IT"
                },
            ],
            selectedUserId: null
        }
    },
    methods: {
        handleClick(id) {
            this.selectedUserId = id;
        }
    }
}
</script>

<!-- 

<template>
    <div>
        <ul style="list-style: none;">
            <li v-for="st in User" :key="st.id">
                <span @click="handleClick(st.id)">
                    Name: {{ st.name }}
                </span>
                <br>
                Department: {{ st.Depar }}
            </li>
        </ul>
        <div v-if="selectedUserId !== null">
            Selected User ID: {{ selectedUserId }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'Loops-comp',

  data() {
    return {
      Data_List: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      User: [
        {
          id: 0,
          name: "M Muaz Shahzad",
          Depar: "BSE"
        },
        {
          id: 1,
          name: "TALHA",
          Depar: "CSS"
        },
        {
          id: 2,
          name: "HASSAN",
          Depar: "IT"
        },
      ],
      selectedUserId: null
    }
  },
  methods: {
    handleClick(id) {
      this.selectedUserId = id;
    }
  }
}
</script> -->
