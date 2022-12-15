<template>
    <BaseCard class="card">
        <form class="form-card" @submit.prevent="onSubmitForm">
            <input
                type="text"
                placeholder="Card title"
                v-model="enteredTitle"
            >
            <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                placeholder="Card description"
                v-model="enteredDescription"
            ></textarea>
            <BaseButton>Add</BaseButton>
        </form>
    </BaseCard>
</template>

<script>
export default {
    emits: ['cardCreated'],
    data() {
        return {
            enteredTitle: null,
            enteredDescription:null
        };
    },
    methods: {
        onSubmitForm() {
            console.log(this.enteredTitle, this.enteredDescription);
            this.$emit('cardCreated', {
                cardTitle: this.enteredTitle,
                cardDescription: this.enteredDescription
            });
        }
    }
}
</script>

<style scoped>
.card {
    min-width: 200px;
    margin: 0;
}

.form-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

input,
textarea {
    background-color: transparent;
    border: none;
    border-radius: 4px;
    outline: none;
    padding: 4px;
    width: 100%;
}

input {
    margin-top: 16px;
    font-size: 18px;
    font-weight: bold;
}

textarea {
    resize: none;
}

button {
    align-self: flex-end;
}
</style>