<template>
    <div class="empty-layout login">
	    <h1>Login</h1>
        <form class="main-form" @submit.prevent="onSubmit">
            <div class="wrapper-login">
        	    <input  type="text" 
                        placeholder="Login"
                        v-model.trim="v$.email.$model"
                />
                <p  :class="{invalid: v$.email.$dirty && v$.email.required.$invalid}" 
                    class="error">Поле не должно быть пустым
                </p>
                <p  :class="{invalid: v$.email.$dirty && v$.email.email.$invalid}" 
                    class="error">Введите корекктный email
                </p>
            </div>
            <div class="wrapper-login">
                <input type="password" 
                        name="p" 
                        placeholder="Password"
                        v-model.trim="v$.password.$model"
                />
                <p  :class="{invalid: v$.password.$dirty && v$.password.required.$invalid}" 
                    class="error">Введите пароль
                </p>
                <!-- <p  :class="{invalid: v$.password.$dirty && v$.password.required.$invalid}" 
                    class="error">Неверный пароль
                </p> -->
                <p  :class="{invalid: v$.password.$dirty && v$.password.minLength.$invalid}" 
                    class="error">Пароль быть больше {{ v$.password.minLength.$params.min }} симовлов, а вы ввели {{ password.length }}
                </p> 
            </div>
            <div class="logout">
                <button type="submit" class="btn">login</button>
            </div>
        </form>
        <router-link to="/register" class="profile">Register</router-link>
    </div>
</template>
<script>
import Vuelidate from '@vuelidate/core'
import {email, required, minLength} from '@vuelidate/validators'
export default {
    name:'login',
    setup () {
        return {
            v$: Vuelidate()
        }
    },
    data: () => ({
        email:'',
        password:''
    }),
    validations:{
        email: {required, email},
        password: {required, minLength: minLength(12)}
    },
    methods:{
        async onSubmit() {
            if (this.v$.$invalid){
                this.v$.$touch()
                return
            }

            if (!this.v$.$error){
                const formData = {
                  email:this.email,
                  password:this.password
                }
                try{
                    await this.$store.dispatch('login',formData)
                    this.$router.push('/planning')
                } catch (e){
                    
                }
            }

        }
    } 
}
</script>
<style>
@import '//assets/main-style.css';
</style>