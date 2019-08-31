var app = new Vue({
	el: "#app",
	data: {
		nome: "",
		telefone: "",
		email: "",
		cadastros: []
	},
	methods: {
		adicionar: function () {
			this.cadastros.push({ nome: this.nome, telefone: this.telefone, email: this.email });
			this.nome = "", this.telefone = "", this.email = "";
		},
		remover: function (index) {
			this.cadastros.splice(index, 1);
		}
	}
});