<template>
    <div class="gastos">
        <form @submit.prevent="novoGasto">
            <label>Modelo</label>
            <input type="text" placeholder="Modelo" v-model="anotacao.descricao" />
            
            <button class="waves-effect waves-light btn-small">
                Salvar
            </button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Valor</th>
                    <th>Descricao</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(gasto, i) in gastos" :key="i">
                    <td>{{ gasto.id }}</td>
                    <td>{{ gasto.valor }}</td>
                    <td>{{ gasto.descricao }}</td>
                </tr>
            </tbody>
      </table>
    </div>
</template>

<script>
    import axios from 'axios';

export default {
    name:'gastoView',
    data() {
        return{
            gastos: [],
            valor: null,
            gasto: {
                descricao: ''
            }
        }

    },
    methods:{
        atualizar() {
            axios.get('gasto')
                .then(res => {
                    this.gastos = res.data;
                })
        },

        novoGasto(){
            axios.post('gasto', this.gasto).then(() =>{
                this.atualizar();
            })
        }
    },
    created(){
        this.atualizar();
    }
}

</script>
