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
            <div class="d-flex-end">
                <BaseButton
                    type="button"
                    v-if="buttonTitle === 'Edit'"
                    @click="onDelete"
                >delete</BaseButton>
                <BaseButton v-if="buttonVisible">{{ buttonTitle }}</BaseButton>
            </div>
        </form>
    </BaseCard>
</template>

<script>
export default {
    props: ['cardData'],
    emits: ['cardCreated', 'deleteCard'],
    data() {
        return {
            enteredTitle: '',
            enteredDescription: '',
            buttonTitle: 'Add',
        };
    },
    mounted() {
        if(this.cardData) {
            this.enteredTitle = this.cardData.title;
            this.enteredDescription = this.cardData.description;
            this.buttonTitle = 'Edit';
        }
    },
    computed: {
        buttonVisible() {
            return (this.enteredTitle !== '' && this.enteredDescription !== '');
        }
    },
    methods: {
        onSubmitForm() {
            console.log(this.enteredTitle, this.enteredDescription);
            this.$emit('cardCreated', {
                cardTitle: this.enteredTitle,
                cardDescription: this.enteredDescription
            });
        },
        onDelete() {
            this.$emit('deleteCard');
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

.d-flex-end {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
}

</style>