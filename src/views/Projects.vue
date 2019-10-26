<template>
    <div id="projects">
        <h1 class="subheading grey--text">Projects</h1>
        <v-container class="my-5">
            <v-expansion-panels>
                <v-expansion-panel v-for="project in myProjects" :key="project.title">
                    <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        
                                <div class="font-weight-bold">due {{ project.due }}</div>
                                <div>{{ project.content }}</div>
                            
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem perferendis nam totam illo, amet deleniti iusto blanditiis, magnam eum placeat, dolore cupiditate? Itaque eius id accusamus corporis consectetur ratione!'},
            ]
        } 
    },
    computed: {
        myProjects(){
            return this.projects.filter(project => {
                return project.person === 'The Net Ninja'
            })
        }
    }
    
}
</script>