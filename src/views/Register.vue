<template>
    <div class="empty-layout login">
        <h1>Register</h1>
        <form class="main-form" @submit.prevent="onSubmit">
            <div class="wrapper-login">
                <div class="subtitle-reg">Come up with a Username:</div>
                <input type="text" placeholder="Username" v-model.trim="v$.username.$model" />
                <p  :class="{ invalid: v$.username.$dirty && v$.username.required.$invalid }" 
                    class="error">Поле не должно быть
                    пустым
                </p>
                <div class="subtitle-reg">Add your email:</div>
                <input type="text" placeholder="Email" v-model.trim="v$.email.$model" />
                <p  :class="{ invalid: v$.email.$dirty && v$.email.required.$invalid }" 
                    class="error">Поле не должно быть
                    пустым
                </p>
                <p  :class="{ invalid: v$.email.$dirty && v$.email.email.$invalid }" 
                    class="error">Введите корекктный email
                </p>

                <div class="subtitle-reg">Come up with a password:</div>
                <input type="password" name="p" placeholder="Password" v-model.trim="v$.password.$model" />
                <p :class="{ invalid: v$.password.$dirty && v$.password.required.$invalid }" class="error">Введите пароль
                </p>
                <!-- <p  :class="{invalid: v$.password.$dirty && v$.password.required.$invalid}" 
                    class="error">Неверный пароль
                </p> -->
                <p :class="{ invalid: v$.password.$dirty && v$.password.minLength.$invalid }" class="error"> Пароль быть
                    больше {{ v$.password.minLength.$params.min }} симовлов. Вы ввели только {{ password.length }}
                </p>
                <div class="subtitle-reg">Repeat password:</div>
                <input type="password" name="p" placeholder="Password" v-model.trim="v$.confirmPassword.$model" />
                <p :class="{ invalid: v$.confirmPassword.$dirty && v$.password.$model != v$.confirmPassword.$model }"
                    class="error">Пароли не совпадают
                </p>
            </div>
            <div class="logout">
                <button type="submit" class="btn">Register</button>
            </div>
            <router-link to="/login" class="profile">Login</router-link>
        </form>
    </div>
</template>
<script>
import Vuelidate from '@vuelidate/core'
import { email, required, minLength } from '@vuelidate/validators'
export default {
    name: 'login',
    setup() {
        return {
            v$: Vuelidate()
        }
    },
    data: () => ({
        username: 'fdsgdf',
        email: 'sdfgd@mail.ru',
        password: '123456789000',
        confirmPassword: '123456789000'
    }),
    validations: {
        username: { required },
        email: { required, email },
        password: { required, minLength: minLength(12) },
        confirmPassword: {
            required,
            confirmPassword(value) {
                if (value == this.v$.password.$model) {
                    return true
                }
                return false
            }
        },
    },
    methods: {
        async onSubmit() {
            if (this.v$.$invalid) {
                this.v$.$touch()
                return
            }

            if (!this.v$.$error) {
                const formData = {
                    email: this.email,
                    password: this.password,
                    name: this.username
                }
                try{
                    await this.$store.dispatch('register', formData)
                    this.$router.push('/')
                } catch(err){}
            }
        }
    }
}
</script>