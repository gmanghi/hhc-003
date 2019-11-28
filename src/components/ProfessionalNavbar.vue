<template>
    <v-row class="mb-3">
        <v-btn text color="grey" :to="{ name: 'professional_details', params: { id: this.professional_id } }">
            <v-icon left>mdi-account-outline</v-icon>
            <span class="caption text-uppercase">Details</span>
        </v-btn>
        <v-btn text color="grey" :to="{ name: 'professional_schedule', params: { id: this.professional_id } }">
            <v-icon left>mdi-calendar</v-icon>
            <span class="caption text-uppercase">Schedule</span>
        </v-btn>
    </v-row>
</template>
<script>
export default {
    data(){
        return {
            professional_id: this.$route.params.id,
        }
    },
}
</script>