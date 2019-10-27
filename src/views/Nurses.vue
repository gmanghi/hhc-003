<template>
    <div id="nurses">
        <h1 class="subheading grey--text">Nurses</h1>

        <v-container class="my-5">
            <v-card flat v-for="project in projects" :key="project.title">
                <v-layout row wrap :class="`pa-3 project ${project.primary_care}`">
                    <v-flex xs12 sm2 md1 lg1>
                        <div class="caption grey--text">Title</div>
                        <div>{{ project.title }}</div>
                    </v-flex>
                    <v-flex xs12 sm4 md5 lg3>
                        <div class="caption grey--text">Client/Account Name</div>
                        <div>{{ project.account_name }}</div>
                    </v-flex>
                    <v-flex xs12 sm3 md3 lg2>
                        <div class="caption grey--text">Position/Relationship</div>
                        <div>{{ project.relationship }}</div>
                    </v-flex>
                    <v-flex xs12 sm3 md3 lg1>
                        <div class="caption grey--text">Primary Care</div>
                        <div>{{ project.primary_care }}</div>
                    </v-flex>
                
                    <v-flex xs12 sm2 md4 lg1>
                        <div class="caption grey--text">Landline</div>
                        <div>{{ project.landline }}</div>
                    </v-flex>
                    <v-flex xs12 sm4 md4 lg2>
                        <div class="caption grey--text">Email Adrress</div>
                        <div>{{ project.email_address }}</div>
                    </v-flex>
                    <v-flex xs12 sm6 md4 lg2>
                        <div class="caption grey--text">Attending Physician</div>
                        <div>{{ project.attending_physician }}</div>
                    </v-flex>

                    <v-flex xs12 sm12 md12>
                        <div class="caption grey--text">Complete Address</div>
                        <div>{{ project.complete_address }}</div>
                    </v-flex>

                    <v-flex xs12 sm2 md1 lg1>
                        <div class="caption grey--text">Title</div>
                        <div>{{ project.patient_title }}</div>
                    </v-flex>
                    <v-flex xs12 sm5 md5 lg3>
                        <div class="caption grey--text">Patient Name</div>
                        <div>{{ project.patient_name }}</div>
                    </v-flex>
                    <v-flex xs12 sm2 md1 lg2>
                        <div class="caption grey--text">Age</div>
                        <div>{{ project.age }}</div>
                    </v-flex>
                    <v-flex xs12 sm3 md5 lg2>
                        <div class="caption grey--text">Birthday</div>
                        <div>{{ project.birthday }}</div>
                    </v-flex>
                
                    <v-flex xs12 sm4 md4 lg2 class="d-lg-none">
                            <div class="caption grey--text">Email Address</div>
                            <div>{{ project.patient_email }}</div>
                    </v-flex>

                    <v-flex xs12 sm4 md4 lg2>
                        <div class="caption grey--text">Religion</div>
                        <div>{{ project.religion }}</div>
                    </v-flex>
                    <v-flex xs12 sm4 md4 lg2>
                        <div class="caption grey--text">Nationality</div>
                        <div>{{ project.nationality }}</div>
                    </v-flex>
                    <v-flex xs12 sm4 md4 lg4 class="d-none d-lg-block">
                            <div class="caption grey--text">Email Address</div>
                            <div>{{ project.patient_email }}</div>
                    </v-flex>
                    <v-flex xs12 sm4 md2 lg2>
                        <div class="caption grey--text">Landline</div>
                        <div>{{ project.patient_landline }}</div>
                    </v-flex>
                    <v-flex xs12 sm4 md2 lg4>
                        <div class="caption grey--text">Mobile Phone</div>
                        <div>{{ project.mobile }}</div>
                    </v-flex>
                    <v-flex xs12 sm4 md2 lg2>
                        <div class="caption grey--text">Fax</div>
                        <div>{{ project.fax }}</div>
                    </v-flex>

                    <v-flex xs12 sm12 md12>
                        <div class="caption grey--text">Complete Address</div>
                        <div>{{ project.patient_address }}</div>
                    </v-flex>
                </v-layout>
                <v-divider :inset="inset"></v-divider>
            </v-card>

        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                { title: 'Ms.', account_name: 'Lucille Teves', relationship: 'Mother', primary_care: 'Yes', landline: '123-09-98', email_address: 'lucilleteves@email.com', attending_physician: 'Vicky Belo',
                    complete_address: "Unit 26 #67 Col. Bravo Street Central Signal Village Taguig City, Philippines",
                    patient_title: "Mrs.", patient_name: "Luzviminda Quero Quero", age: "40", birthday: "January 12, 1987", religion: "Roman Catholic", nationality: "Filipino",
                    patient_landline: "675-98-67", mobile: "09876654321", patient_email: "luzyvi@mail.com.ph", fax: "467",
                    patient_address: "Unit 456 #67253 Maginhawa Street Bangkal Makati City, Philippines"
                },
                { title: 'Ms.', account_name: 'Lucille Teves', relationship: 'Mother', primary_care: 'No', landline: '123-09-98', email_address: 'lucilleteves@email.com', attending_physician: 'Vicky Belo',
                    complete_address: "Unit 456 #67253 Maginhawa Street Bangkal Makati City, Philippines",
                    patient_title: "Mrs.", patient_name: "Luzviminda Quero Quero", age: "40", birthday: "January 12, 1987", religion: "Roman Catholic", nationality: "Filipino",
                    patient_landline: "675-98-67", mobile: "09876654321", patient_email: "luzyvi@mail.com.ph", fax: "467",
                    patient_address: "Unit 26 #67 Col. Bravo Street Central Signal Village Taguig City, Philippines"
                },
                { title: 'Ms.', account_name: 'Lucille Teves', relationship: 'Mother', primary_care: 'Maybe', landline: '123-09-98', email_address: 'lucilleteves@email.com', attending_physician: 'Vicky Belo',
                    complete_address: "Unit 456 #67253 Maginhawa Street Bangkal Makati City, Philippines",
                    patient_title: "Mrs.", patient_name: "Luzviminda Quero Quero", age: "40", birthday: "January 12, 1987", religion: "Roman Catholic", nationality: "Filipino",
                    patient_landline: "675-98-67", mobile: "09876654321", patient_email: "luzyvi@mail.com.ph", fax: "467",
                    patient_address: "Unit 26 #67 Col. Bravo Street Central Signal Village Taguig City, Philippines"
                }

            ]
        }
    }
}
</script>

<style>

.project.Yes{
    border-left: 4px solid #3cd1c2;
}
.project.No{
    border-left: 4px solid orange;
}
.project.Maybe{
    border-left: 4px solid blue;
}

</style>
