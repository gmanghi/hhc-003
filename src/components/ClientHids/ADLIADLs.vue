<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Grooming: </span>  Current ability to tend safely to personal  hygiene needs (i.e., washing face and hands, hair care,   shaving or make up, teeth or denture care, fingernail  care). </div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4']"
                        label="Past"
                        v-model="adl.adl1_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4']"
                        label="Present"
                        v-model="adl.adl1_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Able to groom self-unaided, with or without the use of assistive devices or adapted methods</div>
                    <div class="body-2">2. Grooming utensils must be placed within reach before able to complete grooming activities</div>
                    <div class="body-2">3. Someone must assist the patient to groom self</div>
                    <div class="body-2">4. Patient depends entirely upon someone else for grooming needs</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Current<span class="font-weight-bold"> Ability to Dress Upper Body</span> safely (with or  without dressing aids) including undergarments,  pullovers, front-opening shirts and blouses, managing  zippers, buttons, and snaps:</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4']"
                        label="Past"
                        v-model="adl.adl2_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4']"
                        label="Present"
                        v-model="adl.adl2_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Able to get clothes out of closets and drawers, put them on and remove them from the upper body without assistance</div>
                    <div class="body-2">2. Able to dress upper body without assistance if clothing is laid out or handed to the patient</div>
                    <div class="body-2">3. Someone must help the patient put on upper body clothing</div>
                    <div class="body-2">4. Patient depends entirely upon another person to dress the upper body</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Current<span class="font-weight-bold">  Ability to Dress Lower Body </span>  safely (with or  without dressing aids) including undergarments,  slacks, socks or nylons, shoes:</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4']"
                        label="Past"
                        v-model="adl.adl3_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4']"
                        label="Present"
                        v-model="adl.adl3_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Able to obtain, put on, and remove clothing and shoes without assistance</div>
                    <div class="body-2">2. Able to dress lower body without assistance if  clothing and shoes are laid out or handed to the patient</div>
                    <div class="body-2">3. Someone must help the patient put on undergarments, slacks, socks or nylons, and shoes</div>
                    <div class="body-2">4. Patient depends entirely upon another person to dress lower body</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Bathing:</span> Current ability to wash entire body safely. <span class="font-weight-bold">Excludes grooming (washing face, washing hands,  and shampooing hair). </span></div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5', '6', '7']"
                        label="Past"
                        v-model="adl.adl4_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5', '6', '7']"
                        label="Present"
                        v-model="adl.adl4_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Able to bathe self in shower or tub independently, including getting in and out of tub/shower</div>
                    <div class="body-2">2. With the use of devices, is able to bathe self in shower or tub independently, including getting in and out of the tub/shower</div>
                    <div class="body-2">3. Able to bathe in shower or tub with the intermittent assistance of another person:  (a) for intermittent supervision or encouragement or reminders, OR (b) to get in and out of the shower or tub, OR (c) For washing difficult to reach areas.</div>
                    <div class="body-2">4. Able to participate in bathing self in shower or tub, but requires presence of another person Throughout the bath for assistance or supervision. </div>
                    <div class="body-2">5. Unable to use the shower or tub, but able to bathe self independently with or without the use of devices at the sink, in chair, or on commode</div>
                    <div class="body-2">6. Unable to use the shower or tub, but able to   participate in bathing self in bed, at the sink, in bedside chair, or on commode, with the assistance or supervision of another person throughout the bath</div>
                    <div class="body-2">7. Unable to participate effectively in bathing and is bathed totally by another person</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Toilet Transferring:</span> Current ability to get to and from the  toilet or bedside commode safely and transfer on  and off toilet/commode.</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5']"
                        label="Past"
                        v-model="adl.adl5_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5']"
                        label="Present"
                        v-model="adl.adl5_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Able to get to and from the toilet and transfer independently with or without a device.</div>
                    <div class="body-2">2. When reminded, assisted, or supervised by  Another person, able to get to and from the toilet and transfer</div>
                    <div class="body-2">3. Unable to get to and from the toilet but is able to use a bedside commode (with or without assistance). </div>
                    <div class="body-2">4. Unable to get to and from the toilet or bedside commode but is able to use bedpan/urinal independently</div>
                    <div class="body-2">5. Is totally dependent in toileting </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Transferring:</span> Current ability to move safely from bed to  chair, or ability to turn and position self in bed if patient is bedfast</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5', '6']"
                        label="Past"
                        v-model="adl.adl6_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5', '6']"
                        label="Present"
                        v-model="adl.adl6_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Able to independently transfer</div>
                    <div class="body-2">2. Able to transfer with minimal human assistance or with use of an assistive device</div>
                    <div class="body-2">3. Able to bear weight and pivot during the transfer process but unable to transfer self</div>
                    <div class="body-2">4. Unable to transfer self and is unable to bear weight or pivot when transferred by another person</div>
                    <div class="body-2">5. Bedfast, unable to transfer but is able to turn and position self in bed </div>
                    <div class="body-2">6. Bedfast, unable to transfer but is able to turn and position self in bed </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold"> Ambulation/Locomotion: </span> Current ability to walk safely, once in a standing position, or use a wheelchair, once in a seated position, on a variety of surfaces. </div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5', '6', '7']"
                        label="Past"
                        v-model="adl.adl7_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5', '6', '7']"
                        label="Present"
                        v-model="adl.adl7_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Able to independently walk on even and uneven surfaces and negotiate stairs with or without railings (i.e., needs no human assistance or assistive device</div>
                    <div class="body-2">2. With the use of a one-handed device (e.g. cane, single crutch, hemi-walker), able to independently walk on even and uneven surfaces and negotiate stairs with or without railings</div>
                    <div class="body-2">3. Requires use of a two-handed device (e.g., walker or crutches) to walk alone on a level surface and/or requires human supervision or assistance to negotiate stairs or steps or uneven surfaces</div>
                    <div class="body-2">4. Able to walk only with the supervision or assistance of another person at all times</div>
                    <div class="body-2">5. Chairfast, unable to ambulate but is able to wheel self independently</div>
                    <div class="body-2">6. Chairfast, unable to ambulate and is unable to wheel self</div>
                    <div class="body-2">7. Bedfast, unable to ambulate or be up in a chair. </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold"> Feeding or Eating:  </span> Current ability to feed self-meals and snacks safely. Note: This refers only to the process of eating, chewing, and swallowing, not preparing the food to be eaten.</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5', '6']"
                        label="Past"
                        v-model="adl.adl8_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5', '6']"
                        label="Present"
                        v-model="adl.adl8_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Able to independently feed self</div>
                    <div class="body-2">2. Able to feed self independently but requires: (a) meal set-up; OR (b) intermittent assistance or supervision from another person; OR (c) a liquid, pureed or ground meat diet</div>
                    <div class="body-2">3. Unable to feed self and must be assisted or supervised throughout the meal/snack</div>
                    <div class="body-2">4. Able to take in nutrients orally and receives supplemental nutrients through a nasogastric tube or gastrostomy</div>
                    <div class="body-2">5. Unable to take in nutrients orally and is fed nutrients through a nasogastric tube or gastrostomy</div>
                    <div class="body-2">6. Unable to take in nutrients orally or by tube feeding</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Current  <span class="font-weight-bold">Ability to Plan and Prepare Light Meals  </span>(e.g., cereal, sandwich) or reheat delivered meals safely: </div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3']"
                        label="Past"
                        v-model="adl.adl9_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3']"
                        label="Present"
                        v-model="adl.adl9_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. (a) Able to independently plan and prepare all light meals for self or reheat delivered meals; OR  (b)  Is physically, cognitively, and mentally able to prepare light meals on a regular basis but has not routinely performed light meal preparation in the past (i.e., prior to this home care admission). </div>
                    <div class="body-2">2. Unable to prepare light meals on a regular basis due to physical, cognitive, or mental limitations. </div>
                    <div class="body-2">3. Unable to prepare any light meals or reheat any delivered meals</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Ability to Use Telephone: </span> Current ability to answer the  phone safely, including dialing numbers, and effectively  using the telephone to communicate. </div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5', '6']"
                        label="Past"
                        v-model="adl.adl10_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5', '6']"
                        label="Present"
                        v-model="adl.adl10_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Able to dial numbers and answer calls appropriately and as desired. </div>
                    <div class="body-2">2. Able to use a specially adapted telephone (i.e., large numbers on the dial, teletype phone for the deaf)  and call essential numbers</div>
                    <div class="body-2">3. Able to answer the telephone and carry on a normal conversation but has difficulty with placing calls. </div>
                    <div class="body-2">4. Able to answer the telephone only some of the  time or is able to carry on only a limited conversation</div>
                    <div class="body-2">5. Unable to answer the telephone at all but can listen if assisted with equipment. </div>
                    <div class="body-2">6. Totally unable to use the telephone.</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Has this patient had a multi-factor <span class="font-weight-bold">Fall Risk Assessment </span>(such as falls history, use of multiple medications, mental  impairment, toileting frequency, general  mobility/transferring impairment, environmental hazards)?  </div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3']"
                        label="Past"
                        v-model="adl.adl11_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3']"
                        label="Present"
                        v-model="adl.adl11_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. No multi-factor falls risk assessment conducted</div>
                    <div class="body-2">2. Yes, and it does not indicate a risk for falls</div>
                    <div class="body-2">3. Yes, and it indicates a risk for falls. </div>
                </v-col>
                
            </v-row>
        </v-container>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: [ 'adl' ],
    data(){
        return {
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
}
</script>