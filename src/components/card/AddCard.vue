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
            <button>Add</button>
        </form>
    </BaseCard>
</template>

<script>
export default {
    data() {
        return {
            enteredTitle: null,
            enteredDescription:null
        };
    },
    methods: {
        onSubmitForm() {
            console.log(this.enteredTitle, this.enteredDescription);
            console.log(this.cardsAmount)
        }
    }
}
</script>

<style scoped>
.card {
    width: 25%;
    min-width: 200px;
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
    background-color: rgba(95, 158, 160, 0.25);
    border: none;
    border-radius: 4px;
    color: rgb(64, 106, 107);
    cursor: pointer;
    font-weight: bold;
    outline: none;
    padding: 8px;
}

button:hover {
    background-color: rgba(95, 158, 160, 0.5);
}

button:active {
    background-color: rgba(95, 158, 160, 0.7);
}
</style>