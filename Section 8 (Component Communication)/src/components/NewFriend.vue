<template>
<<<<<<< HEAD
   <form @submit.prevent="submitData">
      <div>
         <label>Name</label>
         <input type="text" v-model="enteredName" />
      </div>
      <div>
         <label>Phone</label>
         <input type="tel" v-model="enteredPhone" />
      </div>
      <div>
         <label>E-Mail</label>
         <input type="email" v-model="enteredEmail" />
      </div>
      <div>
         <button>Add Contact</button>
      </div>
   </form>
=======
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label>E-Mail</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
>>>>>>> 43c546a2770bad4d20612cefa03dc495e607c516
</template>

<script>
export default {
<<<<<<< HEAD
   emits: ['add-contact'],
   data() {
      return {
         enteredName: '',
         enteredPhone: '',
         enteredEmail: ''
      };
   },
   methods: {
      submitData() {
         this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail);
      }
   }
};
</script>
=======
  emits: ['add-contact'],
  data(){
     return {
        enteredName: '',
        enteredPhone: '',
        enteredEmail: '',
     }
  },
  methods: {
     submitData(){
        this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail)
     }
  }
};
</script>
>>>>>>> 43c546a2770bad4d20612cefa03dc495e607c516
