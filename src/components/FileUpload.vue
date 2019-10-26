<template>
    <v-file-input
        :rules="rules"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pick an avatar"
        prepend-icon="mdi-camera"
        label="Avatar"
        @change="onFileChange"
    ></v-file-input>
</template>

<script>
export default {
    data() {
        return {
            rules: [
                value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
            ],
        }
    },
    methods: {
        onFileChange(e) {
            this.$store.commit('setFileData', e)
        }
    }
}
</script>