<template>
    <div class="Lances">
        <form @submit.prevent="novoLance">
            <label>Lances</label>
            <input type="text" placeholder="Jogador" v-model="lance.jogador" />
            <input type="text" placeholder="Descrição" v-model="lance.descricao" />
            
            <button class="waves-effect waves-light btn-small">
                Salvar
            </button>
        </form>

        <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Data/hora</th>
                        <th>Jogador</th>
                        <th>Descricao</th>
                    </tr>
                </thead>

                <tbody>
                <tr v-for="(lance, i) in lances" :key="i">
                    <td>{{ lance.id }}</td>
                    <td>{{ lance.dataHora }}</td>
                    <td>{{ lance.jogador}}</td>
                    <td>{{ lance.descricao }}</td>
                </tr>
            </tbody>
            </table>
    </div>    
</template>

<script>
import axios from 'axios';

export default {
    name: 'lancesView',
    data() {
        return {
            lances: [],
            jogador: '',
            lance:{
                descricao: ''
            }
        }
    },
    methods: {
        atualizar() {
            axios.get('lance')
                .then(res => {
                    this.lances = res.data;
                })
        },
        novoLance(){
            axios.post('lance', this.lance).then(() =>{
                this.atualizar();
            })
        }
    },
    created() {
        this.atualizar();
    }
}
</script>
