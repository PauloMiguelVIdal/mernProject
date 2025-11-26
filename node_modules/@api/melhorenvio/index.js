"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'melhorenvio/unknown (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Autenticação
     *
     * @summary Solicitação do token
     * @throws FetchError<401, types.SolicitacaoDoTokenResponse401> 401
     */
    SDK.prototype.solicitacaoDoToken = function (body, metadata) {
        return this.core.fetch('/oauth/token', 'post', body, metadata);
    };
    /**
     * Autenticação
     *
     * @summary Listar informações de aplicativo
     * @throws FetchError<404, types.ListarInformacoesDeAplicativoResponse404> 404
     */
    SDK.prototype.listarInformacoesDeAplicativo = function (metadata) {
        return this.core.fetch('/api/v2/me/shipment/app-settings', 'get', metadata);
    };
    /**
     * Envios
     *
     * @summary Cálculo de Fretes
     * @throws FetchError<422, types.CalculoDeFretesPorProdutosResponse422> 422
     */
    SDK.prototype.calculoDeFretesPorProdutos = function (body, metadata) {
        return this.core.fetch('/api/v2/me/shipment/calculate', 'post', body, metadata);
    };
    /**
     * Carrinho de Compras
     *
     * @summary Inserir fretes no carrinho
     * @throws FetchError<422, types.InserirFretesNoCarrinhoResponse422> 422
     */
    SDK.prototype.inserirFretesNoCarrinho = function (body, metadata) {
        return this.core.fetch('/api/v2/me/cart', 'post', body, metadata);
    };
    /**
     * Carrinho de Compras
     *
     * @summary Listar itens do carrinho
     * @throws FetchError<401, types.ListarItensDoCarrinhoResponse401> 401
     */
    SDK.prototype.listarItensDoCarrinho = function (metadata) {
        return this.core.fetch('/api/v2/me/cart', 'get', metadata);
    };
    /**
     * Carrinho de Compras
     *
     * @summary Exibir informações de item do carrinho
     * @throws FetchError<400, types.ExibirInformacoesDeItemDoCarrinhoResponse400> 400
     */
    SDK.prototype.exibirInformacoesDeItemDoCarrinho = function (metadata) {
        return this.core.fetch('/api/v2/me/cart/{id}', 'get', metadata);
    };
    /**
     * Carrinho de Compras
     *
     * @summary Remoção de itens do carrinho
     * @throws FetchError<400, types.RemocaoDeItensDoCarrinhoResponse400> 400
     */
    SDK.prototype.remocaoDeItensDoCarrinho = function (metadata) {
        return this.core.fetch('/api/v2/me/cart/{id}', 'delete', metadata);
    };
    SDK.prototype.geracaoDeEtiquetas = function (body, metadata) {
        return this.core.fetch('/api/v2/me/shipment/generate', 'post', body, metadata);
    };
    /**
     * Impressão de etiquetas
     *
     * @throws FetchError<400, types.ImpressaoDeEtiquetasResponse400> 400
     */
    SDK.prototype.impressaoDeEtiquetas = function (body, metadata) {
        return this.core.fetch('/api/v2/me/shipment/print', 'post', body, metadata);
    };
    /**
     * Etiquetas
     *
     * @summary Pré-visualização de etiquetas
     * @throws FetchError<404, types.PreVisualizacaoDeEtiquetasResponse404> 404
     */
    SDK.prototype.preVisualizacaoDeEtiquetas = function (body, metadata) {
        return this.core.fetch('/api/v2/me/shipment/preview', 'post', body, metadata);
    };
    /**
     * Pagamento de envios (Checkout)
     *
     * @summary Compra de fretes
     * @throws FetchError<422, types.CompraDeFretes1Response422> 422
     */
    SDK.prototype.compraDeFretes1 = function (body, metadata) {
        return this.core.fetch('/api/v2/me/shipment/checkout', 'post', body, metadata);
    };
    /**
     * Pesquisar etiqueta
     *
     * @throws FetchError<400, types.PesquisarEtiquetaResponse400> 400
     */
    SDK.prototype.pesquisarEtiqueta = function (metadata) {
        return this.core.fetch('/api/v2/me/orders/search', 'get', metadata);
    };
    /**
     * Listar etiquetas
     *
     * @throws FetchError<401, types.ListarEtiquetasResponse401> 401
     */
    SDK.prototype.listarEtiquetas = function (metadata) {
        return this.core.fetch('/api/v2/me/orders', 'get', metadata);
    };
    /**
     * Listar informações de uma etiqueta
     *
     * @throws FetchError<404, types.ListarInformacoesDeUmaEtiquetaResponse404> 404
     */
    SDK.prototype.listarInformacoesDeUmaEtiqueta = function (metadata) {
        return this.core.fetch('/api/v2/me/orders/{id}', 'get', metadata);
    };
    /**
     * Verificar se etiqueta pode ser cancelada
     *
     * @throws FetchError<422, types.VerificarSeEtiquetaPodeSerCanceladaResponse422> 422
     */
    SDK.prototype.verificarSeEtiquetaPodeSerCancelada = function (body, metadata) {
        return this.core.fetch('/api/v2/me/shipment/cancellable', 'post', body, metadata);
    };
    /**
     * Cancelamento de etiquetas
     *
     * @throws FetchError<422, types.CancelamentoDeEtiquetasResponse422> 422
     */
    SDK.prototype.cancelamentoDeEtiquetas = function (body, metadata) {
        return this.core.fetch('/api/v2/me/shipment/cancel', 'post', body, metadata);
    };
    /**
     * Lista todas as transportadoras disponíveis
     *
     * @summary Listar transportadoras
     * @throws FetchError<400, types.ListarTransportadorasResponse400> 400
     */
    SDK.prototype.listarTransportadoras = function (metadata) {
        return this.core.fetch('/api/v2/me/shipment/companies', 'get', metadata);
    };
    /**
     * Lista informações detalhadas de uma transportadora específica
     *
     * @summary Listar informações de uma transportadora
     * @throws FetchError<400, types.ListarInformacoesDeUmaTransportadoraResponse400> 400
     */
    SDK.prototype.listarInformacoesDeUmaTransportadora = function (metadata) {
        return this.core.fetch('/api/v2/me/shipment/companies/{companyId}', 'get', metadata);
    };
    /**
     * Lista todos os serviços de transportadoras disponíveis
     *
     * @summary Listar serviços
     * @throws FetchError<400, types.ListarServicosResponse400> 400
     */
    SDK.prototype.listarServicos = function (metadata) {
        return this.core.fetch('/api/v2/me/shipment/services', 'get', metadata);
    };
    /**
     * Lista informações detalhadas de um serviço específico
     *
     * @summary Listar informações de um serviço
     * @throws FetchError<400, types.ListarInformacoesDeUmServicoResponse400> 400
     */
    SDK.prototype.listarInformacoesDeUmServico = function (metadata) {
        return this.core.fetch('/api/v2/me/shipment/services/{serviceId}', 'get', metadata);
    };
    /**
     * Lista todas agências de transportadoras disponíveis
     *
     * @summary Listar agências (e opções de filtro)
     * @throws FetchError<400, types.ListarAgenciasEOpcoesDeFiltroResponse400> 400
     */
    SDK.prototype.listarAgenciasEOpcoesDeFiltro = function (metadata) {
        return this.core.fetch('/api/v2/me/shipment/agencies', 'get', metadata);
    };
    /**
     * Lista informações detalhadas de uma agência específica
     *
     * @summary Listar informações de uma agência
     * @throws FetchError<400, types.ListarInformacoesDeUmaAgenciaResponse400> 400
     */
    SDK.prototype.listarInformacoesDeUmaAgencia = function (metadata) {
        return this.core.fetch('/api/v2/me/shipment/agencies/{agencyId}', 'get', metadata);
    };
    /**
     * Informações do usuário
     *
     * @summary Listar informações do usuário
     * @throws FetchError<401, types.ListarInformacoesDoUsuarioResponse401> 401
     */
    SDK.prototype.listarInformacoesDoUsuario = function (metadata) {
        return this.core.fetch('/api/v2/me', 'get', metadata);
    };
    /**
     * Informações do usuário
     *
     * @summary Listar endereços do usuário
     * @throws FetchError<401, types.ListarEnderecosDoUsuarioResponse401> 401
     */
    SDK.prototype.listarEnderecosDoUsuario = function (metadata) {
        return this.core.fetch('/api/v2/me/addresses', 'get', metadata);
    };
    /**
     * Informações do usuário
     *
     * @summary Saldo do usuário
     * @throws FetchError<401, types.SaldoDoUsuarioResponse401> 401
     */
    SDK.prototype.saldoDoUsuario = function (metadata) {
        return this.core.fetch('/api/v2/me/balance', 'get', metadata);
    };
    /**
     * Inserir saldo na carteira do usuário
     *
     * @throws FetchError<400, types.InserirSaldoNaCarteiraDoUsuarioResponse400> 400
     */
    SDK.prototype.inserirSaldoNaCarteiraDoUsuario = function (body, metadata) {
        return this.core.fetch('/api/v2/me/balance', 'post', body, metadata);
    };
    /**
     * Cadastro e informações das lojas
     *
     * @summary Listar lojas do usuário
     * @throws FetchError<401, types.ListarLojasDoUsuarioResponse401> 401
     */
    SDK.prototype.listarLojasDoUsuario = function (metadata) {
        return this.core.fetch('/api/v2/me/companies', 'get', metadata);
    };
    /**
     * Cadastro e informações das lojas
     *
     * @summary Cadastrar loja
     * @throws FetchError<401, types.CadastrarLojaResponse401> 401
     */
    SDK.prototype.cadastrarLoja = function (body, metadata) {
        return this.core.fetch('/api/v2/me/companies', 'post', body, metadata);
    };
    /**
     * Cadastro e informações das lojas
     *
     * @summary Visualizar loja
     * @throws FetchError<404, types.VisualizarLojaResponse404> 404
     */
    SDK.prototype.visualizarLoja = function (metadata) {
        return this.core.fetch('/api/v2/me/companies/{storeId}', 'get', metadata);
    };
    /**
     * Cadastro e visualização de endereços e telefones de lojas
     *
     * @summary Cadastrar endereço de uma loja
     * @throws FetchError<404, types.CadastrarEnderecoDeUmaLojaResponse404> 404
     */
    SDK.prototype.cadastrarEnderecoDeUmaLoja = function (body, metadata) {
        return this.core.fetch('/api/v2/me/companies/{storeId}/addresses', 'post', body, metadata);
    };
    /**
     * Listar endereços de uma loja
     *
     * @throws FetchError<404, types.ListarEnderecosDeUmaLojaResponse404> 404
     */
    SDK.prototype.listarEnderecosDeUmaLoja = function (metadata) {
        return this.core.fetch('/api/v2/me/companies/{storeId}/addresses', 'get', metadata);
    };
    /**
     * Cadastro e visualização de endereços e telefones de lojas
     *
     * @summary Cadastrar telefones de uma loja
     * @throws FetchError<422, types.CadastrarTelefonesDeUmaLojaResponse422> 422
     */
    SDK.prototype.cadastrarTelefonesDeUmaLoja = function (body, metadata) {
        return this.core.fetch('/api/v2/me/companies/{storeId}/phones', 'post', body, metadata);
    };
    /**
     * Cadastro e visualização de endereços e telefones de lojas
     *
     * @summary Listar telefones de uma loja
     * @throws FetchError<404, types.ListarTelefonesDeUmaLojaResponse404> 404
     */
    SDK.prototype.listarTelefonesDeUmaLoja = function (metadata) {
        return this.core.fetch('/api/v2/me/companies/{storeId}/phones', 'get', metadata);
    };
    /**
     * Retorna o status do ciclo de vida das etiquetas.
     *
     * @summary Status da etiqueta
     * @throws FetchError<400, types.RastreioDeEnviosResponse400> 400
     */
    SDK.prototype.rastreioDeEnvios = function (body, metadata) {
        return this.core.fetch('/api/v2/me/shipment/tracking', 'post', body, metadata);
    };
    /**
     * Impressão de etiquetas em arquivo
     *
     * @throws FetchError<401, types.ImpressaoDeEtiquetasEmArquivoResponse401> 401
     * @throws FetchError<404, types.ImpressaoDeEtiquetasEmArquivoResponse404> 404
     */
    SDK.prototype.impressaoDeEtiquetasEmArquivo = function (metadata) {
        return this.core.fetch('/api/v2/me/imprimir/{arquivo}/{id}', 'get', metadata);
    };
    /**
     * Logística Reversa
     *
     * @summary Inserir Logística Reversa no carrinho
     * @throws FetchError<422, types.InserirLogisticaReversaNoCarrinhoResponse422> 422
     */
    SDK.prototype.inserirLogisticaReversaNoCarrinho = function (body, metadata) {
        return this.core.fetch('/api/v2/me/cart/reverse', 'post', body, metadata);
    };
    /**
     * Gerar link de impressão do Documento Auxiliar de Conteúdo Eletrônico
     *
     * @summary Impressão de DACE
     * @throws FetchError<401, types.ImpressaoDaceResponse401> 401
     * @throws FetchError<404, types.ImpressaoDaceResponse404> 404
     */
    SDK.prototype.impressaoDace = function (metadata) {
        return this.core.fetch('/api/v2/me/imprimir/dace/{arquivo}/{order_id}', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
