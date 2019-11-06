<template>
    <div id="clients-requests">
        <h1 class="subheading grey--text">Clients Requests</h1>
        <v-container>
            <v-card>
                <v-card-title>
                    List of Requests
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-card-search-outline"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :search="search"
                >
                    <template v-slot:item.status="{ item }">
                        <v-chip :color="getColor(item.status)" dark>{{ item.status }}</v-chip>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-btn
                            color="blue-grey"
                            class="ma-2 white--text"
                            @click="popBooking">
                            Book
                            <v-icon right dark>mdi-book-open-variant</v-icon>
                        </v-btn>    
                        <v-btn
                            color="red"
                            class="ma-2 white--text"
                            @click="deleteRequest">
                            Remove
                            <v-icon right dark>mdi-delete</v-icon>
                        </v-btn> 
                    </template>
                </v-data-table>
            </v-card>
            <v-snackbar
                v-model="snackbar"
                :multi-line="multiLine">
                {{ text }}
                <v-btn
                    color="blue"
                    text
                    @click="snackbar = false">
                    Close
                </v-btn>
            </v-snackbar>

            <!-- Start Popup -->
            <v-dialog v-model="dialog" persistent max-width="600px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Booking Form</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <h3>Needs more informations but basically booking process will happen on this popup</h3>
                                <h3>Once done, the status of the request will become complete.</h3>
                            </v-row>
                        </v-container>

                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            <!-- End Popup -->
        </v-container>
    </div>
</template>

<script>
export default {
    data () {
      return {
            dialog: false,
            snackbar: false,
            search: '',
            multiLine: true,
            headers: [
                {
                    text: 'Request ID',
                    align: 'center',
                    sortable: true,
                    value: 'id',
                },
                { text: 'Date of Request', align: 'center', value: 'date' },
                { text: 'Requested By', align: 'center', value: 'requestedBy' },
                { text: 'Status', align: 'center', value: 'status' },
                { text: 'Actions', align: 'center', value: 'actions' },
            ],
            desserts: [
                {
                id: '2019-00001',
                date: '2019-01-01',
                requestedBy: 'Angelo',
                status: 'Complete',
                actions: 'create',
                },
                {
                id: '2019-00002',
                date: '2019-01-02',
                requestedBy: 'Kris',
                status: 'Pending',
                actions: 'create',
                },
                {
                id: '2019-00003',
                date: '2019-01-03',
                requestedBy: 'Roy',
                status: 'New',
                actions: 'create',
                },
                {
                id: '2019-00004',
                date: '2019-01-04',
                requestedBy: 'Stephen',
                status: 'Complete',
                actions: 'create',
                },
                {
                id: '2019-00005',
                date: '2019-01-05',
                requestedBy: 'Bronson',
                status: 'Pending',
                actions: 'create',
                },
                {
                id: '2019-00006',
                date: '2019-01-06',
                requestedBy: 'Ernani',
                status: 'New',
                actions: 'create',
                },
                {
                id: '2019-00007',
                date: '2019-01-07',
                requestedBy: 'Robert',
                status: 'Complete',
                actions: 'create',
                },
                {
                id: '2019-00008',
                date: '2019-01-08',
                requestedBy: 'Neil',
                status: 'Pending',
                actions: 'create',
                },
                {
                id: '2019-00009',
                date: '2019-01-09',
                requestedBy: 'Mon',
                status: 'New',
                actions: 'create',
                },
                {
                id: '2019-00010',
                date: '2019-01-10',
                requestedBy: 'Cha',
                status: 'Complete',
                actions: 'create',
                },
            ],
        }
    },
    methods: {
        getColor (calories) {
            switch(calories){
                case 'Complete':
                return 'blue';
                break;
                case 'Pending':
                return 'orange';
                break;
                case 'New':
                return 'red';
                break;
            }
        },
        deleteRequest(){
            this.text = 'This will delete the request'
            this.snackbar = true;
        },
        popBooking(){
            this.dialog = true;
        }
    },
  }
</script>