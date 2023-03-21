'use strict'

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: [],
            
        }
    },
    beforeMount() {
        //ciclare l'api per 10 volte
        for(let i = 1; i <= 10; i++){
            //prendere il link
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                //stampare in consol email random
                console.log(response.data.response);
                //stampare in pagina il numero
                this.message.push(response.data.response)

            });

        }
       
    }
}).mount('#app');
