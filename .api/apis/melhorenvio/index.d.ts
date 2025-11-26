import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * Autenticação
     *
     * @summary Solicitação do token
     * @throws FetchError<401, types.SolicitacaoDoTokenResponse401> 401
     */
    solicitacaoDoToken(body: types.SolicitacaoDoTokenBodyParam, metadata: types.SolicitacaoDoTokenMetadataParam): Promise<FetchResponse<200, types.SolicitacaoDoTokenResponse200>>;
    /**
     * Autenticação
     *
     * @summary Listar informações de aplicativo
     * @throws FetchError<404, types.ListarInformacoesDeAplicativoResponse404> 404
     */
    listarInformacoesDeAplicativo(metadata: types.ListarInformacoesDeAplicativoMetadataParam): Promise<FetchResponse<200, types.ListarInformacoesDeAplicativoResponse200>>;
    /**
     * Envios
     *
     * @summary Cálculo de Fretes
     * @throws FetchError<422, types.CalculoDeFretesPorProdutosResponse422> 422
     */
    calculoDeFretesPorProdutos(body: types.CalculoDeFretesPorProdutosBodyParam, metadata: types.CalculoDeFretesPorProdutosMetadataParam): Promise<FetchResponse<200, types.CalculoDeFretesPorProdutosResponse200>>;
    /**
     * Carrinho de Compras
     *
     * @summary Inserir fretes no carrinho
     * @throws FetchError<422, types.InserirFretesNoCarrinhoResponse422> 422
     */
    inserirFretesNoCarrinho(body: types.InserirFretesNoCarrinhoBodyParam, metadata: types.InserirFretesNoCarrinhoMetadataParam): Promise<FetchResponse<201, types.InserirFretesNoCarrinhoResponse201>>;
    /**
     * Carrinho de Compras
     *
     * @summary Listar itens do carrinho
     * @throws FetchError<401, types.ListarItensDoCarrinhoResponse401> 401
     */
    listarItensDoCarrinho(metadata: types.ListarItensDoCarrinhoMetadataParam): Promise<FetchResponse<200, types.ListarItensDoCarrinhoResponse200>>;
    /**
     * Carrinho de Compras
     *
     * @summary Exibir informações de item do carrinho
     * @throws FetchError<400, types.ExibirInformacoesDeItemDoCarrinhoResponse400> 400
     */
    exibirInformacoesDeItemDoCarrinho(metadata: types.ExibirInformacoesDeItemDoCarrinhoMetadataParam): Promise<FetchResponse<200, types.ExibirInformacoesDeItemDoCarrinhoResponse200>>;
    /**
     * Carrinho de Compras
     *
     * @summary Remoção de itens do carrinho
     * @throws FetchError<400, types.RemocaoDeItensDoCarrinhoResponse400> 400
     */
    remocaoDeItensDoCarrinho(metadata: types.RemocaoDeItensDoCarrinhoMetadataParam): Promise<FetchResponse<204, types.RemocaoDeItensDoCarrinhoResponse204>>;
    /**
     * Geração de etiquetas
     *
     * @throws FetchError<422, types.GeracaoDeEtiquetasResponse422> 422
     */
    geracaoDeEtiquetas(body: types.GeracaoDeEtiquetasBodyParam, metadata: types.GeracaoDeEtiquetasMetadataParam): Promise<FetchResponse<200, types.GeracaoDeEtiquetasResponse200>>;
    geracaoDeEtiquetas(metadata: types.GeracaoDeEtiquetasMetadataParam): Promise<FetchResponse<200, types.GeracaoDeEtiquetasResponse200>>;
    /**
     * Impressão de etiquetas
     *
     * @throws FetchError<400, types.ImpressaoDeEtiquetasResponse400> 400
     */
    impressaoDeEtiquetas(body: types.ImpressaoDeEtiquetasBodyParam, metadata: types.ImpressaoDeEtiquetasMetadataParam): Promise<FetchResponse<200, types.ImpressaoDeEtiquetasResponse200>>;
    /**
     * Etiquetas
     *
     * @summary Pré-visualização de etiquetas
     * @throws FetchError<404, types.PreVisualizacaoDeEtiquetasResponse404> 404
     */
    preVisualizacaoDeEtiquetas(body: types.PreVisualizacaoDeEtiquetasBodyParam, metadata: types.PreVisualizacaoDeEtiquetasMetadataParam): Promise<FetchResponse<200, types.PreVisualizacaoDeEtiquetasResponse200>>;
    /**
     * Pagamento de envios (Checkout)
     *
     * @summary Compra de fretes
     * @throws FetchError<422, types.CompraDeFretes1Response422> 422
     */
    compraDeFretes1(body: types.CompraDeFretes1BodyParam, metadata: types.CompraDeFretes1MetadataParam): Promise<FetchResponse<200, types.CompraDeFretes1Response200>>;
    /**
     * Pesquisar etiqueta
     *
     * @throws FetchError<400, types.PesquisarEtiquetaResponse400> 400
     */
    pesquisarEtiqueta(metadata: types.PesquisarEtiquetaMetadataParam): Promise<FetchResponse<200, types.PesquisarEtiquetaResponse200>>;
    /**
     * Listar etiquetas
     *
     * @throws FetchError<401, types.ListarEtiquetasResponse401> 401
     */
    listarEtiquetas(metadata: types.ListarEtiquetasMetadataParam): Promise<FetchResponse<200, types.ListarEtiquetasResponse200>>;
    /**
     * Listar informações de uma etiqueta
     *
     * @throws FetchError<404, types.ListarInformacoesDeUmaEtiquetaResponse404> 404
     */
    listarInformacoesDeUmaEtiqueta(metadata: types.ListarInformacoesDeUmaEtiquetaMetadataParam): Promise<FetchResponse<200, types.ListarInformacoesDeUmaEtiquetaResponse200>>;
    /**
     * Verificar se etiqueta pode ser cancelada
     *
     * @throws FetchError<422, types.VerificarSeEtiquetaPodeSerCanceladaResponse422> 422
     */
    verificarSeEtiquetaPodeSerCancelada(body: types.VerificarSeEtiquetaPodeSerCanceladaBodyParam, metadata: types.VerificarSeEtiquetaPodeSerCanceladaMetadataParam): Promise<FetchResponse<200, types.VerificarSeEtiquetaPodeSerCanceladaResponse200>>;
    /**
     * Cancelamento de etiquetas
     *
     * @throws FetchError<422, types.CancelamentoDeEtiquetasResponse422> 422
     */
    cancelamentoDeEtiquetas(body: types.CancelamentoDeEtiquetasBodyParam, metadata: types.CancelamentoDeEtiquetasMetadataParam): Promise<FetchResponse<200, types.CancelamentoDeEtiquetasResponse200>>;
    /**
     * Lista todas as transportadoras disponíveis
     *
     * @summary Listar transportadoras
     * @throws FetchError<400, types.ListarTransportadorasResponse400> 400
     */
    listarTransportadoras(metadata: types.ListarTransportadorasMetadataParam): Promise<FetchResponse<200, types.ListarTransportadorasResponse200>>;
    /**
     * Lista informações detalhadas de uma transportadora específica
     *
     * @summary Listar informações de uma transportadora
     * @throws FetchError<400, types.ListarInformacoesDeUmaTransportadoraResponse400> 400
     */
    listarInformacoesDeUmaTransportadora(metadata: types.ListarInformacoesDeUmaTransportadoraMetadataParam): Promise<FetchResponse<200, types.ListarInformacoesDeUmaTransportadoraResponse200>>;
    /**
     * Lista todos os serviços de transportadoras disponíveis
     *
     * @summary Listar serviços
     * @throws FetchError<400, types.ListarServicosResponse400> 400
     */
    listarServicos(metadata: types.ListarServicosMetadataParam): Promise<FetchResponse<200, types.ListarServicosResponse200>>;
    /**
     * Lista informações detalhadas de um serviço específico
     *
     * @summary Listar informações de um serviço
     * @throws FetchError<400, types.ListarInformacoesDeUmServicoResponse400> 400
     */
    listarInformacoesDeUmServico(metadata: types.ListarInformacoesDeUmServicoMetadataParam): Promise<FetchResponse<200, types.ListarInformacoesDeUmServicoResponse200>>;
    /**
     * Lista todas agências de transportadoras disponíveis
     *
     * @summary Listar agências (e opções de filtro)
     * @throws FetchError<400, types.ListarAgenciasEOpcoesDeFiltroResponse400> 400
     */
    listarAgenciasEOpcoesDeFiltro(metadata?: types.ListarAgenciasEOpcoesDeFiltroMetadataParam): Promise<FetchResponse<200, types.ListarAgenciasEOpcoesDeFiltroResponse200>>;
    /**
     * Lista informações detalhadas de uma agência específica
     *
     * @summary Listar informações de uma agência
     * @throws FetchError<400, types.ListarInformacoesDeUmaAgenciaResponse400> 400
     */
    listarInformacoesDeUmaAgencia(metadata: types.ListarInformacoesDeUmaAgenciaMetadataParam): Promise<FetchResponse<200, types.ListarInformacoesDeUmaAgenciaResponse200>>;
    /**
     * Informações do usuário
     *
     * @summary Listar informações do usuário
     * @throws FetchError<401, types.ListarInformacoesDoUsuarioResponse401> 401
     */
    listarInformacoesDoUsuario(metadata: types.ListarInformacoesDoUsuarioMetadataParam): Promise<FetchResponse<200, types.ListarInformacoesDoUsuarioResponse200>>;
    /**
     * Informações do usuário
     *
     * @summary Listar endereços do usuário
     * @throws FetchError<401, types.ListarEnderecosDoUsuarioResponse401> 401
     */
    listarEnderecosDoUsuario(metadata: types.ListarEnderecosDoUsuarioMetadataParam): Promise<FetchResponse<200, types.ListarEnderecosDoUsuarioResponse200>>;
    /**
     * Informações do usuário
     *
     * @summary Saldo do usuário
     * @throws FetchError<401, types.SaldoDoUsuarioResponse401> 401
     */
    saldoDoUsuario(metadata: types.SaldoDoUsuarioMetadataParam): Promise<FetchResponse<200, types.SaldoDoUsuarioResponse200>>;
    /**
     * Inserir saldo na carteira do usuário
     *
     * @throws FetchError<400, types.InserirSaldoNaCarteiraDoUsuarioResponse400> 400
     */
    inserirSaldoNaCarteiraDoUsuario(body: types.InserirSaldoNaCarteiraDoUsuarioBodyParam, metadata: types.InserirSaldoNaCarteiraDoUsuarioMetadataParam): Promise<FetchResponse<200, types.InserirSaldoNaCarteiraDoUsuarioResponse200>>;
    /**
     * Cadastro e informações das lojas
     *
     * @summary Listar lojas do usuário
     * @throws FetchError<401, types.ListarLojasDoUsuarioResponse401> 401
     */
    listarLojasDoUsuario(metadata: types.ListarLojasDoUsuarioMetadataParam): Promise<FetchResponse<200, types.ListarLojasDoUsuarioResponse200>>;
    /**
     * Cadastro e informações das lojas
     *
     * @summary Cadastrar loja
     * @throws FetchError<401, types.CadastrarLojaResponse401> 401
     */
    cadastrarLoja(body: types.CadastrarLojaBodyParam, metadata: types.CadastrarLojaMetadataParam): Promise<FetchResponse<200, types.CadastrarLojaResponse200>>;
    /**
     * Cadastro e informações das lojas
     *
     * @summary Visualizar loja
     * @throws FetchError<404, types.VisualizarLojaResponse404> 404
     */
    visualizarLoja(metadata: types.VisualizarLojaMetadataParam): Promise<FetchResponse<200, types.VisualizarLojaResponse200>>;
    /**
     * Cadastro e visualização de endereços e telefones de lojas
     *
     * @summary Cadastrar endereço de uma loja
     * @throws FetchError<404, types.CadastrarEnderecoDeUmaLojaResponse404> 404
     */
    cadastrarEnderecoDeUmaLoja(body: types.CadastrarEnderecoDeUmaLojaBodyParam, metadata: types.CadastrarEnderecoDeUmaLojaMetadataParam): Promise<FetchResponse<200, types.CadastrarEnderecoDeUmaLojaResponse200>>;
    /**
     * Listar endereços de uma loja
     *
     * @throws FetchError<404, types.ListarEnderecosDeUmaLojaResponse404> 404
     */
    listarEnderecosDeUmaLoja(metadata: types.ListarEnderecosDeUmaLojaMetadataParam): Promise<FetchResponse<200, types.ListarEnderecosDeUmaLojaResponse200>>;
    /**
     * Cadastro e visualização de endereços e telefones de lojas
     *
     * @summary Cadastrar telefones de uma loja
     * @throws FetchError<422, types.CadastrarTelefonesDeUmaLojaResponse422> 422
     */
    cadastrarTelefonesDeUmaLoja(body: types.CadastrarTelefonesDeUmaLojaBodyParam, metadata: types.CadastrarTelefonesDeUmaLojaMetadataParam): Promise<FetchResponse<200, types.CadastrarTelefonesDeUmaLojaResponse200>>;
    /**
     * Cadastro e visualização de endereços e telefones de lojas
     *
     * @summary Listar telefones de uma loja
     * @throws FetchError<404, types.ListarTelefonesDeUmaLojaResponse404> 404
     */
    listarTelefonesDeUmaLoja(metadata: types.ListarTelefonesDeUmaLojaMetadataParam): Promise<FetchResponse<200, types.ListarTelefonesDeUmaLojaResponse200>>;
    /**
     * Retorna o status do ciclo de vida das etiquetas.
     *
     * @summary Status da etiqueta
     * @throws FetchError<400, types.RastreioDeEnviosResponse400> 400
     */
    rastreioDeEnvios(body: types.RastreioDeEnviosBodyParam, metadata: types.RastreioDeEnviosMetadataParam): Promise<FetchResponse<200, types.RastreioDeEnviosResponse200>>;
    /**
     * Impressão de etiquetas em arquivo
     *
     * @throws FetchError<401, types.ImpressaoDeEtiquetasEmArquivoResponse401> 401
     * @throws FetchError<404, types.ImpressaoDeEtiquetasEmArquivoResponse404> 404
     */
    impressaoDeEtiquetasEmArquivo(metadata: types.ImpressaoDeEtiquetasEmArquivoMetadataParam): Promise<FetchResponse<200, types.ImpressaoDeEtiquetasEmArquivoResponse200>>;
    /**
     * Logística Reversa
     *
     * @summary Inserir Logística Reversa no carrinho
     * @throws FetchError<422, types.InserirLogisticaReversaNoCarrinhoResponse422> 422
     */
    inserirLogisticaReversaNoCarrinho(body: types.InserirLogisticaReversaNoCarrinhoBodyParam, metadata: types.InserirLogisticaReversaNoCarrinhoMetadataParam): Promise<FetchResponse<201, types.InserirLogisticaReversaNoCarrinhoResponse201>>;
    /**
     * Gerar link de impressão do Documento Auxiliar de Conteúdo Eletrônico
     *
     * @summary Impressão de DACE
     * @throws FetchError<401, types.ImpressaoDaceResponse401> 401
     * @throws FetchError<404, types.ImpressaoDaceResponse404> 404
     */
    impressaoDace(metadata: types.ImpressaoDaceMetadataParam): Promise<FetchResponse<200, types.ImpressaoDaceResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
