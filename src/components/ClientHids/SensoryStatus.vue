<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Vision</span> (with corrective lenses if tha petient usually wears them)</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2','3']"
                        label="Past"
                        v-model="ss.s1"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2','3']"
                        label="Present"
                        v-model="ss.s1"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Normal: sees adequately in most situations; can see medication labels and newsprint</div>
                    <div class="body-2">2. Partially impaired: cannot see medication label or newsprint but can see obstacles in path and the surrounding layout; can count fingers at arms length.</div>
                    <div class="body-2">3. Severely impaired: cannot locate objects without hearing or touching them or patient is none responsive</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Vision</span> (with corrective lenses if tha petient usually wears them)</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2','3']"
                        label="Past"
                        v-model="ss.s1"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2','3']"
                        label="Present"
                        v-model="ss.s1"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Normal: sees adequately in most situations; can see medication labels and newsprint</div>
                    <div class="body-2">2. Partially impaired: cannot see medication label or newsprint but can see obstacles in path and the surrounding layout; can count fingers at arms length.</div>
                    <div class="body-2">3. Severely impaired: cannot locate objects without hearing or touching them or patient is none responsive</div>
                </v-col>

            </v-row>
        </v-container>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: [ 'ss' ],
    data(){
        return {
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
}
</script>