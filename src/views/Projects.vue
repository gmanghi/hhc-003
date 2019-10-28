<template>
    <div id="clients">
        <h1 class="subheading grey--text">Clients</h1>

        <v-container>
            <v-layout child-flex>
                <v-simple-table fixed-header>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">Account Name</th>
                        <th class="text-left">Position/Relationship</th>
                        <th class="text-left">Primary Care</th>
                        <th class="text-left">Contact Number</th>
                        <th class="text-left">Email</th>
                        <th class="text-left">Physician</th>
                        <th class="text-left">Address</th>
                        <th class="text-left">Patient Name</th>
                        <th class="text-left">Age</th>
                        <th class="text-left">Birthday</th>
                        <th class="text-left">Religion</th>
                        <th class="text-left">Nationality</th>
                        <th class="text-left">Landline</th>
                        <th class="text-left">Mobile Phone</th>
                        <th class="text-left">Email</th>
                        <th class="text-left">Fax</th>
                        <th class="text-left">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in desserts" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.name }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </v-layout>

            <!-- Popup Start -->
            <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="1200px">
                    <template v-slot:activator="{ on }">
                        <v-btn
                            fixed
                            dark
                            fab
                            bottom
                            right
                            color="pink"
                            v-on="on">
                            <v-icon small>mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    <v-form>
                        <v-card>
                            <v-card-title>
                                <span class="headline">Client</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" md="2" sm="3" xs="2">
                                            <v-autocomplete
                                            :items="['Mr.', 'Ms.', 'Mrs.', 'Dr.']"
                                            label="Title"
                                            ></v-autocomplete>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="3" >
                                            <v-text-field label="Client / Account Name*" v-model="member.account_name" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12"  md="3" sm="3">
                                            <v-text-field label="Position / Relationship" v-model="member.position" hint="example of helper text only on focus"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="3" sm="3" xs="2">
                                            <v-text-field label="Primary Care YES, If NO*" v-model="member.primary_care" required></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="4" sm="4">
                                            <v-text-field
                                            label="Landline / Mobile Phone / Fax*"
                                            hint="example of persistent helper text"
                                            persistent-hint
                                            required
                                            v-model="member.landline_mobile_fax"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-text-field label="Email Address*" v-model="member.email" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-text-field label="Attending Physician*" v-model="member.attending_physician" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="12" sm="12">
                                            <v-text-field label="Complete Address*" v-model="member.address" required></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="2"  sm="3" xs="2">
                                            <v-autocomplete
                                            :items="['Mr.', 'Ms.', 'Mrs.', 'Dr.']"
                                            label="Title"
                                            ></v-autocomplete>
                                        </v-col>
                                        <v-col cols="12" md="5" sm="3">
                                            <v-text-field label="Patient Name*" v-model="member.patient_name" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="2" sm="3">
                                            <v-text-field label="Age" v-model="member.age" hint="example of helper text only on focus" required></v-text-field>
                                        </v-col>
                                         <v-col cols="12" md="3" sm="3">
                                            <v-menu
                                            v-model="date_popup"
                                            :close-on-content-click="false"
                                            max-width="290"
                                            >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                :value="computedDateFormattedMomentjs"
                                                clearable
                                                label="Birthday"
                                                readonly
                                                v-on="on"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="member.birthday"
                                                @change="date_popup = false"
                                            ></v-date-picker>
                                            </v-menu>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-text-field label="Religion" v-model="member.religion" hint="example of helper text only on focus" required></v-text-field>
                                        </v-col>
                                         <v-col cols="12" md="4" sm="4">
                                            <v-text-field label="Nationality*" v-model="member.nationality" hint="example of helper text only on focus" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-text-field label="Landline" v-model="member.landline" hint="example of helper text only on focus" required></v-text-field>
                                        </v-col>

                                         <v-col cols="12" md="4" sm="4">
                                            <v-text-field label="Mobile Phone*" v-model="member.mobile" hint="example of helper text only on focus" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-text-field label="Email Address*" v-model="member.email_address" hint="example of helper text only on focus" required></v-text-field>
                                        </v-col>
                                         <v-col cols="12" md="4" sm="4">
                                            <v-text-field label="Fax" v-model="member.fax" hint="example of helper text only on focus" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="12" sm="12">
                                            <v-text-field label="Complete Address*" v-model="member.complete_address" required></v-text-field>
                                        </v-col>

                                        <!--
                                        <v-col cols="12">
                                            <v-text-field label="Password*" type="password" required></v-text-field>
                                        </v-col>
                                        
                                        <v-col cols="12" sm="6">
                                            <v-autocomplete
                                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                            label="Interests"
                                            multiple
                                            ></v-autocomplete>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-menu
                                            v-model="date_popup"
                                            :close-on-content-click="false"
                                            max-width="290"
                                            >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                :value="computedDateFormattedMomentjs"
                                                clearable
                                                label="Formatted with Moment.js"
                                                readonly
                                                v-on="on"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="date"
                                                @change="date_popup = false"
                                            ></v-date-picker>
                                            </v-menu>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <input type="file" @change="onFileChange" />
                                            <FileUpload />
                                        </v-col>
                                        -->
                                        <v-col cols="12" md="4" sm="4">
                                            <v-autocomplete
                                            :items="['Home Health Visit by HCP', 'Registered Nurse /  Caregiver Deployment', 'Laboratory / Radiology', 'Purchase / Rental of Medicine Equipment']"
                                            label="Case Management"
                                            multiple
                                            ></v-autocomplete>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-autocomplete
                                            :items="['Ambulatory Wellness Clinic', 'Caregiver Training Module', 'Senior Residential Facility']"
                                            label=""
                                            multiple
                                            ></v-autocomplete>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-autocomplete
                                            :items="['Walk-in', 'Home Service', 'Corporate', 'Delivery']"
                                            label="Home Vaccination Program"
                                            multiple
                                            ></v-autocomplete>
                                        </v-col>
                                    </v-row>
                                </v-container>
                                <small>*indicates required field</small>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                                <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-form>
                </v-dialog>
            </v-row>
            <!-- Popup End -->
        </v-container>
    </div>    
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,  
        date_popup: false,
        member: {
            first_name: '',
            middle_name: '',
            last_name: '',
            email: '',
            role: '',
            avatar: '',
        },
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
  }
</script>