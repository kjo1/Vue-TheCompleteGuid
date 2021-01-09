<template>
<<<<<<< HEAD
   <li>
      <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
      <button @click="toggleFavorite">Toggle Favorite</button>
      <button @click="toggleDetails">Show Details</button>
      <ul v-if="detailsAreVisible">
         <li><strong>Phone:</strong> {{ phoneNumber }}</li>
         <li><strong>Phone:</strong> {{ emailAddress }}</li>
      </ul>
   </li>
=======
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Phone:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
>>>>>>> 43c546a2770bad4d20612cefa03dc495e607c516
</template>

<script>
export default {
<<<<<<< HEAD
   // props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
   props: {
      id: {
         type: String,
         required: true
      },
      name: {
         type: String,
         required: true
      },
      phoneNumber: {
         type: String,
         required: true
      },
      emailAddress: {
         type: String,
         required: true
      },
      isFavorite: {
         type: Boolean,
         required: false,
         default: false
         // validator: function(value) {
         //     return value === '1' || value === '0';
         // },
      }
   },
   emits: ['toggle-favorite'],
   // emits:{
   //     'toggle-favorite': function(id){
   //         if (id){
   //             return true;
   //         } else {
   //             console.warn('ID is missing!');
   //             return false;
   //         }
   //     },
   data() {
      return {
         detailsAreVisible: false
      };
   },
   methods: {
      toggleDetails() {
         this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {
         this.$emit('toggle-favorite', this.id);
      }
   }
=======
  // props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function(value) {
      //     return value === '1' || value === '0';
      // },
    },
  },
  emits: ["toggle-favorite"],
  // emits:{
  //     'toggle-favorite': function(id){
  //         if (id){
  //             return true;
  //         } else {
  //             console.warn('ID is missing!');
  //             return false;
  //         }
  //     },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
>>>>>>> 43c546a2770bad4d20612cefa03dc495e607c516
};
</script>
