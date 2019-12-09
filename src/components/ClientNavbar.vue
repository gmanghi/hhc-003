<template>
    <v-row class="mb-3">
        <v-btn text color="grey" :href="facesheet_url">
            <v-icon left>mdi-account-outline</v-icon>
            <span class="caption text-uppercase">Facesheet</span>
        </v-btn>
        <v-btn text color="grey" :href="contract_url">
            <v-icon left>mdi-pen</v-icon>
            <span class="caption text-uppercase">Contract</span>
        </v-btn>
        <v-btn text color="grey" :href="visits_url">
            <v-icon left>mdi-calendar-outline</v-icon>
            <span class="caption text-uppercase">Scheduled Visits</span>
        </v-btn>
        <v-btn text color="grey" :href="hids_url">
            <v-icon left>mdi-note-text-outline</v-icon>
            <span class="caption text-uppercase">HIDs</span>
        </v-btn>
        <v-btn text color="grey" :href="hvrpn_url">
            <v-icon left>mdi-note-text-outline</v-icon>
            <span class="caption text-uppercase">Home Health Care Visit</span>
        </v-btn>
        <v-btn text color="grey" :href="prescription_url">
            <v-icon left>mdi-note-text-outline</v-icon>
            <span class="caption text-uppercase">Prescription</span>
        </v-btn>
        <v-btn text color="grey" :href="pmp_url">
            <v-icon left>mdi-note-text-outline</v-icon>
            <span class="caption text-uppercase">Patient Medication Profile</span>
        </v-btn>
        <v-btn text color="grey" :href="css_url">
            <v-icon left>mdi-note-text-outline</v-icon>
            <span class="caption text-uppercase">Customer Satisfaction Survey</span>
        </v-btn>
    </v-row>
</template>
<script>
export default {
    data(){
        return {
            client_id: this.$route.params.id,
            facesheet_url: '/client/'+this.$route.params.id+'/details',
            contract_url: '/client/'+this.$route.params.id+'/contract',
            visits_url: '/client/'+this.$route.params.id+'/visits',
            hids_url: '/client/'+this.$route.params.id+'/hids',
            hvrpn_url: '/client/'+this.$route.params.id+'/home-visit-report-and-progress-notes',
            prescription_url: '/client/'+this.$route.params.id+'/prescription',
            pmp_url: '/client/'+this.$route.params.id+'/patient-medication-profile',
            css_url: '/client/'+this.$route.params.id+'/customer-satisfaction-survey',
        }
    },
}
</script>