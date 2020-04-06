<template>
  <div id="signup-form-container" class="container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <!-- e-mail -->
      <b-form-group
        id="input-group-1"
        label="E-mailadres:"
        label-for="input-1"
        description=""
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="jan.de.vries@gmail.com"
        ></b-form-input>
      </b-form-group>
      <!-- password -->
      <b-form-group
        id="input-group-2"
        label="Wachtwoord:"
        label-for="input-2"
        description="Maak er een lekker lange zin van. Dat is veilig!"
      >
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>
      <!-- username -->
      <b-form-group id="input-group-3" label="Gebruikersnaam:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.username"
          required
          placeholder="Borrelnootje98"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Inschrijven</b-button>
      <b-button type="reset" variant="danger">Formulier leegmaken</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
          username: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        this.form.username = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style scoped>
#signup-form-container {
    padding-top: 50px;
}
</style>