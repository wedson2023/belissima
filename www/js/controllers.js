angular.module('app.controllers', [])
  
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	console.log('entrou');


}])
   
.controller('listaProdutosCtrl', ['$scope', '$stateParams', '$ionicListDelegate',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicListDelegate) {

	var self = this;

	self.produtos = [
		{
			_id : 1,
			descricao : 'Pia Premiun 1.40x50cm BRACA',
			valor : 15.00,
			quantidade : 0
		},
		{
			_id : 2,
			descricao : 'Pia Premiun 1.40x50cm PRETA',
			valor : 10.00,
			quantidade : 0
		},
		{
			_id : 3,
			descricao : 'Tanque Simples 1.50x50cm BRACA',
			valor : 15.00,
			quantidade : 0
		},
		{
			_id : 4,
			descricao : 'Tanque Simples 1.50x50cm PRETA',
			valor : 10.00,
			quantidade : 0
		}
	]

	if(localStorage.getItem('produtos'))
	{
		var produtos = JSON.parse(localStorage.getItem('produtos'));
		produtos.forEach(function(elemento){
			var produto = self.produtos.filter(function(result){ return result._id === elemento._id })[0];
			produto.quantidade = elemento.quantidade;
		});
	}

	self.quantidade = function(produtos){
		var produto = self.produtos.filter(function(elemento){ return elemento._id == produtos._id })[0];
		produto.quantidade += 1;
	}

	self.verBtnDeletar = function() {
		if($ionicListDelegate.showDelete()){
			$ionicListDelegate.showDelete(false);
		}else{
			$ionicListDelegate.showDelete(true);
		}    	
	};

	self.deletar = function(produtos){
		var produto = self.produtos.filter(function(elemento){ return elemento._id == produtos._id })[0];
		produto.quantidade = 0;
		$ionicListDelegate.showDelete(false);
	}

	self.pedido = function(){
		var produto = self.produtos.filter(function(elemento){ return elemento.quantidade != 0 });
		if(produto.length){
			localStorage.setItem('produtos', JSON.stringify(produto));
			if(localStorage.getItem('produtos'))
			{
				location.href = '#/concluir';
			}
		}else{
			alert('Por favor selecione algum item da lista.');
		}	
	}

	self.limpar = function(){
		var con = confirm('Tem certeza que deseja limpar todos itens selecionados?');
		if(con){			
			for(x in self.produtos){
				self.produtos[x].quantidade = 0;
			}
			localStorage.clear();
		}
	}

}])
   
.controller('concluirPedidoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	var self = this;

	self.produtos = JSON.parse(localStorage.getItem('produtos'));

	self.total = 0;
	self.produtos.forEach(function(elemento){
		self.total += elemento.valor * elemento.quantidade
	});
}])
 