<template>
    <v-file-input
        :rules="rules"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pick an avatar"
        prepend-icon="mdi-camera"
        label="Avatar"
        v-model="file"
        @change="onFileChange"
    ></v-file-input>
</template>

<script>
export default {
    data() {
        return {
            file: null,
            rules: [
                value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
            ],
        }
    },
    methods: {
        onFileChange(e) {
            this.$store.commit('setFileData', e)
            this.file = null
        },
    }
}
</script>