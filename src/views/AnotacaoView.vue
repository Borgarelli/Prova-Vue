<template>
    
    <div class="anotacao">
        <form @submit.prevent="novoItem">
            <label>Modelo</label>
            <input type="text" placeholder="Modelo" v-model="anotacao.texto" />
            
            <button class="waves-effect waves-light btn-small">
                Salvar
            </button>
        </form>
    <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Texto</th>
            <th>Usuario</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(anotacao, i) in anotacoes" :key="i">
            <td>{{ anotacao.id }}</td>
            <td>{{ anotacao.texto }}</td>
            <td>{{ anotacao.usuario.nome }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
</template>

<script>
    import axios from 'axios';
    //import { mapActions } from 'vuex'

export default {
    name: 'anotacaoView',
    data() {
        return {
            anotacoes: [],
            anotacao: {
                texto: ''
            }
            

        }
    },
    methods: {
        atualizar() {
            axios.get('anotacao')
                .then(res => {
                    this.anotacoes = res.data;
                })
        },

        novoItem(){
            axios.post('anotacao', this.anotacao).then(() =>{
                this.atualizar();
            })
        }
    },
    created() {
        this.atualizar();
    }
}
</script>
