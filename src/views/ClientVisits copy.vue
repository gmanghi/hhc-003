<template>
    <div id="client-visits">
        <h1 class="subheading white--text">Scheduled Visits</h1>
        <v-container>
            <ClientNavbar></ClientNavbar>
            <v-row class="fill-height">
                <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on }">
                        <v-btn
                            fixed
                            dark
                            fab
                            bottom
                            right
                            color="pink"
                            @click="popup_create_visit">
                            <v-icon small>mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        >
                        <v-card>
                            <v-card-title>
                                <span class="headline">Schedule visit</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-autocomplete
                                                :items="professionals"
                                                label="Name"
                                                v-model="visit.professional"
                                                >
                                                <template slot="selection" slot-scope="data">
                                                    {{data.item.first_name}} {{ data.item.last_name }}
                                                </template>    
                                                <template slot="item" slot-scope="data">
                                                    {{data.item.first_name}} {{ data.item.last_name }}
                                                </template>
                                            </v-autocomplete>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-menu
                                                v-model="visit_date_popup"
                                                :close-on-content-click="false"
                                                max-width="290"
                                                >
                                                <template v-slot:activator="{ on }">
                                                    <v-text-field
                                                        :value="computedVisitDateFormattedMomentjs"
                                                        clearable
                                                        label="Date of visit*"
                                                        readonly
                                                        v-on="on">
                                                    </v-text-field>
                                                </template>
                                                <v-date-picker
                                                    v-model="visit_date"
                                                    @change="visit_date_popup = false"
                                                ></v-date-picker>
                                            </v-menu>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-combobox
                                                v-model="visit_shift"
                                                :items="['AM','PM']"
                                                label="Shift"
                                                single    
                                            ></v-combobox>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="popup_close">Close</v-btn>
                                <v-btn color="blue darken-1" v-if="action === 'create'" text @click="process_save">Save</v-btn>
                                <v-btn color="blue darken-1" v-if="action === 'update'" text @click="process_update">Update</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-form>
                    <v-overlay :value="overlay">
                        <v-progress-circular indeterminate size="64"></v-progress-circular>
                    </v-overlay>
                </v-dialog>
                <v-col>
                    <v-sheet height="64">
                        <v-toolbar flat color="white">
                            <v-btn outlined class="mr-4" @click="setToday">Today</v-btn>
                            <v-btn fab text small @click="prev"><v-icon small>mdi-chevron-left</v-icon></v-btn>
                            <v-btn fab text small @click="next"><v-icon small>mdi-chevron-right</v-icon></v-btn>
                            <v-toolbar-title>{{ title }}</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-menu bottom right>
                                <template v-slot:activator="{ on }">
                                    <v-btn outlined v-on="on">
                                        <span>{{ typeToLabel[type] }}</span>
                                        <v-icon right>mdi-menu-down</v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item @click="type = 'day'">
                                        <v-list-item-title>Day</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item @click="type = 'week'">
                                        <v-list-item-title>Week</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item @click="type = 'month'">
                                        <v-list-item-title>Month</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item @click="type = '4day'">
                                        <v-list-item-title>4 days</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-toolbar>
                    </v-sheet>
                    <v-sheet height="600">
                        <v-calendar
                            ref="calendar"
                            v-model="focus"
                            color="primary"
                            :events="events"
                            :event-color="getEventColor"
                            :event-margin-bottom="3"
                            :now="today"
                            :type="type"
                            @click:event="showEvent"
                            @click:more="viewDay"
                            @click:date="viewDay"
                            @change="updateRange">
                        </v-calendar>
                        <v-menu
                            v-model="selectedOpen"
                            :close-on-content-click="false"
                            :activator="selectedElement"
                            offset-x>
                            <v-card color="grey lighten-4" min-width="350px" flat>
                                <v-toolbar :color="selectedEvent.color" dark>
                                    <!-- <v-btn icon><v-icon>mdi-pencil</v-icon></v-btn> -->
                                    <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <!-- <v-btn icon><v-icon>mdi-heart</v-icon></v-btn> -->
                                    <!-- <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn> -->
                                </v-toolbar>
                                <v-card-text>
                                    <span v-html="selectedEvent.details"></span>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn text color="secondary" @click="selectedOpen = false">Cancel</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-menu>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
import ClientNavbar from '@/components/ClientNavbar'
export default {
    components: {
        ClientNavbar
    },
    data() {
        return {
            dialog: false,
            valid: true,
            action: 'create',
            overlay: false,
            visit_date_popup: false,
            visit_date: '',
            visit_shift: '',
            today: '2019-11-19',
            focus: '2019-11-19',
            type: 'month',
            typeToLabel: {
                month: 'Month',
                week: 'Week',
                day: 'Day',
                '4day': '4 Days',
            },
            start: null,
            end: null,
            selectedEvent: {},
            selectedElement: null,
            selectedOpen: false,
            // events: [],
            visit: {},
        }
    },
    mounted() {
        const parent = this
        this.$store.dispatch("ClientVisits/getVisits").then(function(data){
            // parent.events = data
            parent.$store.dispatch("Professional/getProfessionals")
        }).catch(function(error){
            console.log(error)
        })
    },
    computed: {
        ...mapGetters({
            professionals: 'Professional/professionals',
            events: 'ClientVisits/visits'
        }),
        computedVisitDateFormattedMomentjs(){
            return this.visit_date ? moment(this.visit_date).format('YYYY-MM-DD') : ''
        },
        title () {
            const { start, end } = this
            if (!start || !end) {
                return ''
            }

            const startMonth = this.monthFormatter(start)
            const endMonth = this.monthFormatter(end)
            const suffixMonth = startMonth === endMonth ? '' : endMonth

            const startYear = start.year
            const endYear = end.year
            const suffixYear = startYear === endYear ? '' : endYear

            const startDay = start.day + this.nth(start.day)
            const endDay = end.day + this.nth(end.day)

            switch (this.type) {
                case 'month':
                return `${startMonth} ${startYear}`
                case 'week':
                case '4day':
                return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
                case 'day':
                return `${startMonth} ${startDay} ${startYear}`
            }
            return ''
        },
        monthFormatter () {
            return this.$refs.calendar.getFormatter({
                timeZone: 'UTC', month: 'long',
            })
        },
    },
    methods: {
        popup_close(){
            this.dialog = false
        },
        popup_create_visit(){
            this.dialog = true
        },
        process_save(){
            const parent = this
            let time_start = ''
            let time_end = ''
            if(this.visit_shift == 'AM'){
                time_start = new Date(this.visit_date + ' ' + '07:00')
                time_end = new Date(this.visit_date + ' ' + '19:00')
            }
            else{
                time_start = new Date(this.visit_date + ' ' + '19:00')
                time_end = new Date(this.visit_date + ' ' + '07:00')

                time_end = new Date(time_end.setDate(time_end.getDate() + 1))
                // console.log(time_end)
            }
            const data = {}
            data.professional = this.visit.professional.first_name + ' ' + this.visit.professional.last_name
            data.time_start = time_start
            data.time_end = time_end
            console.log(data)
            this.$store.commit('ClientVisits/setVisit', data)
            this.$store.dispatch("ClientVisits/createVisit").then(function(doc){
                console.log('saveVisit',doc)
                parent.dialog = false
            }).catch(function(error){
                console.log(error)
            })
        },
        viewDay ({ date }) {
            this.focus = date
            this.type = 'day'
        },
        getEventColor (event) {
            return event.color
        },
        setToday () {
            this.focus = this.today
        },
        prev () {
            this.$refs.calendar.prev()
        },
        next () {
            this.$refs.calendar.next()
        },
        showEvent ({ nativeEvent, event }) {
            const open = () => {
                this.selectedEvent = event
                this.selectedElement = nativeEvent.target
                setTimeout(() => this.selectedOpen = true, 10)
            }

            if (this.selectedOpen) {
                this.selectedOpen = false
                setTimeout(open, 10)
            } else {
                open()
            }

            nativeEvent.stopPropagation()
        },
        updateRange ({ start, end }) {
            // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
            this.start = start
            this.end = end
        },
        nth (d) {
            return d > 3 && d < 21
                ? 'th'
                : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
        },
    },
}
</script>