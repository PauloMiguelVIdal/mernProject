declare const CadastrarEnderecoDeUmaLoja: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["postal_code", "address", "number", "complement", "city", "state"];
        readonly properties: {
            readonly postal_code: {
                readonly type: "string";
                readonly description: "Código Postal - CEP / EX: 01010010";
                readonly examples: readonly ["01010010"];
            };
            readonly address: {
                readonly type: "string";
                readonly description: "Endereço | Logradouro / Ex: Av. Teste";
            };
            readonly number: {
                readonly type: "string";
                readonly description: "Número / Ex: 123";
            };
            readonly complement: {
                readonly type: "string";
                readonly description: "Complemento / Ex: Casa - Apto - ABC";
            };
            readonly city: {
                readonly type: "string";
                readonly description: "Cidade / Ex: São Paulo";
            };
            readonly state: {
                readonly type: "string";
                readonly description: "Estado / Ex: São Paulo";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly storeId: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "ID da loja";
                };
            };
            readonly required: readonly ["storeId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "Content-type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Content-type", "Accept", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [32336];
                };
                readonly label: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
                readonly postal_code: {
                    readonly type: "string";
                    readonly examples: readonly ["07110000"];
                };
                readonly address: {
                    readonly type: "string";
                    readonly examples: readonly ["Av Teste"];
                };
                readonly number: {
                    readonly type: "string";
                    readonly examples: readonly ["123"];
                };
                readonly complement: {
                    readonly type: "string";
                    readonly examples: readonly ["ABC"];
                };
                readonly district: {};
                readonly latitude: {};
                readonly longitude: {};
                readonly confirmed_at: {};
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-03-30 17:08:23"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-03-30 17:08:23"];
                };
                readonly city: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [5269];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly examples: readonly ["São Paulo"];
                        };
                        readonly state: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [25];
                                };
                                readonly state: {
                                    readonly type: "string";
                                    readonly examples: readonly ["São Paulo"];
                                };
                                readonly state_abbr: {
                                    readonly type: "string";
                                    readonly examples: readonly ["SP"];
                                };
                                readonly country: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["BR"];
                                        };
                                        readonly country: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Brazil"];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["No query results for model [App\\Company]."];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CadastrarLoja: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name", "email", "description", "company_name", "document", "state_register"];
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "Nome / Ex: Melhor Loja";
                readonly examples: readonly ["Melhor Loja"];
            };
            readonly email: {
                readonly type: "string";
                readonly description: "Endereço de contato e-mail / Ex: contato@melhorloja.me";
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Descrição da Loja";
            };
            readonly company_name: {
                readonly type: "string";
                readonly description: "Nome da Loja";
            };
            readonly document: {
                readonly type: "string";
                readonly description: "Número do Documento / Ex: 89.157.108/0001-04";
            };
            readonly state_register: {
                readonly type: "string";
                readonly description: "Inscrição Estadual / Ex: 476.210.979.481";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "Content-type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Content-type", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Melhor Loja"];
                };
                readonly email: {
                    readonly type: "string";
                    readonly examples: readonly ["contato@melhorloja.me"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["Descrição da loja"];
                };
                readonly company_name: {
                    readonly type: "string";
                    readonly examples: readonly ["Nome da Loja"];
                };
                readonly document: {
                    readonly type: "string";
                    readonly examples: readonly ["89157108000104"];
                };
                readonly state_register: {
                    readonly type: "string";
                    readonly examples: readonly ["476210979481"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["781f86be-c3be-47e7-9bef-70b8675a55c3"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-03-30 16:53:56"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-03-30 16:53:56"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthenticated."];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CadastrarTelefonesDeUmaLoja: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["type", "phone"];
        readonly properties: {
            readonly type: {
                readonly type: "string";
                readonly description: "Tipo de contato: \"mobile\" ou \"fixed\"";
                readonly default: "mobile";
                readonly examples: readonly ["mobile"];
            };
            readonly phone: {
                readonly type: "string";
                readonly description: "Número: 11987654321";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly storeId: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "ID da Loja";
                };
            };
            readonly required: readonly ["storeId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "Content-type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Content-type", "Accept", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["mobile"];
                };
                readonly phone: {
                    readonly type: "string";
                    readonly examples: readonly ["5530203020"];
                };
                readonly country_id: {
                    readonly type: "string";
                    readonly examples: readonly ["BR"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-03-30 20:28:52"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-03-30 20:28:52"];
                };
                readonly id: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [42303];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["The given data was invalid."];
                };
                readonly errors: {
                    readonly type: "object";
                    readonly properties: {
                        readonly phone: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["O campo phone não pode ser superior a 11 caracteres."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CalculoDeFretesPorProdutos: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["from", "to"];
        readonly properties: {
            readonly from: {
                readonly type: "object";
                readonly description: "Local de partida";
                readonly required: readonly ["postal_code"];
                readonly properties: {
                    readonly postal_code: {
                        readonly type: "string";
                        readonly description: "Cep Local de Partida";
                        readonly examples: readonly ["01002001"];
                    };
                };
            };
            readonly to: {
                readonly type: "object";
                readonly description: "Local de Recebimento";
                readonly required: readonly ["postal_code"];
                readonly properties: {
                    readonly postal_code: {
                        readonly type: "string";
                        readonly description: "Cep local de Recebimento";
                    };
                };
            };
            readonly products: {
                readonly type: "array";
                readonly description: "Listagem dos produtos contidos no pacote";
                readonly items: {
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Identificador do Produto";
                        };
                        readonly width: {
                            readonly type: "integer";
                            readonly description: "Largura";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly height: {
                            readonly type: "integer";
                            readonly description: "Altura";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly length: {
                            readonly type: "integer";
                            readonly description: "Comprimento";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly weight: {
                            readonly type: "number";
                            readonly description: "Peso";
                            readonly format: "float";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly insurance_value: {
                            readonly type: "number";
                            readonly description: "Valor do produto que será utilizado para o cálculo do seguro do frete";
                            readonly format: "float";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly quantity: {
                            readonly type: "integer";
                            readonly description: "Número de itens";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                    };
                    readonly required: readonly ["id", "width", "height", "length", "weight", "insurance_value", "quantity"];
                    readonly type: "object";
                };
            };
            readonly options: {
                readonly type: "object";
                readonly description: "Opções de Serviços de Entrega";
                readonly properties: {
                    readonly receipt: {
                        readonly type: "boolean";
                        readonly description: "Aviso de Recebimento";
                    };
                    readonly own_hand: {
                        readonly type: "boolean";
                        readonly description: "Mão Própria";
                    };
                };
            };
            readonly volumes: {
                readonly type: "array";
                readonly description: "Atributos do objeto";
                readonly items: {
                    readonly properties: {
                        readonly width: {
                            readonly type: "integer";
                            readonly description: "Largura";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly heigth: {
                            readonly type: "integer";
                            readonly description: "Altura";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly lenght: {
                            readonly type: "integer";
                            readonly description: "Comprimento";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly weight: {
                            readonly type: "number";
                            readonly description: "Peso";
                            readonly format: "float";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly insurance_value: {
                            readonly type: "number";
                            readonly description: "Valor do produto que será utilizado para o cálculo do seguro do frete";
                            readonly format: "float";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                    };
                    readonly required: readonly ["width", "heigth", "lenght", "weight", "insurance_value"];
                    readonly type: "object";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "application/json";
                };
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "application/json";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Token";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Content-Type", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "integer";
                        readonly default: 0;
                        readonly examples: readonly [1];
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly examples: readonly ["PAC"];
                    };
                    readonly price: {
                        readonly type: "string";
                        readonly examples: readonly ["37.79"];
                    };
                    readonly custom_price: {
                        readonly type: "string";
                        readonly examples: readonly ["37.79"];
                    };
                    readonly discount: {
                        readonly type: "string";
                        readonly examples: readonly ["2.09"];
                    };
                    readonly currency: {
                        readonly type: "string";
                        readonly examples: readonly ["R$"];
                    };
                    readonly delivery_time: {
                        readonly type: "integer";
                        readonly default: 0;
                        readonly examples: readonly [9];
                    };
                    readonly delivery_range: {
                        readonly type: "object";
                        readonly properties: {
                            readonly min: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [8];
                            };
                            readonly max: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [9];
                            };
                        };
                    };
                    readonly custom_delivery_time: {
                        readonly type: "integer";
                        readonly default: 0;
                        readonly examples: readonly [9];
                    };
                    readonly custom_delivery_range: {
                        readonly type: "object";
                        readonly properties: {
                            readonly min: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [8];
                            };
                            readonly max: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [9];
                            };
                        };
                    };
                    readonly packages: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly price: {
                                    readonly type: "string";
                                    readonly examples: readonly ["37.79"];
                                };
                                readonly discount: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2.09"];
                                };
                                readonly format: {
                                    readonly type: "string";
                                    readonly examples: readonly ["box"];
                                };
                                readonly dimensions: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly height: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [2];
                                        };
                                        readonly width: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [11];
                                        };
                                        readonly length: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [16];
                                        };
                                    };
                                };
                                readonly weight: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0.10"];
                                };
                                readonly insurance_value: {
                                    readonly type: "string";
                                    readonly examples: readonly ["50.00"];
                                };
                                readonly products: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                                readonly examples: readonly ["pequeno"];
                                            };
                                            readonly quantity: {
                                                readonly type: "integer";
                                                readonly default: 0;
                                                readonly examples: readonly [1];
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly additional_services: {
                        readonly type: "object";
                        readonly properties: {
                            readonly receipt: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [true];
                            };
                            readonly own_hand: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [true];
                            };
                            readonly collect: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [false];
                            };
                        };
                    };
                    readonly company: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [1];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Correios"];
                            };
                            readonly picture: {
                                readonly type: "string";
                                readonly examples: readonly ["https://sandbox.melhorenvio.com.br/images/shipping-companies/correios.png"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["The given data was invalid."];
                };
                readonly errors: {
                    readonly type: "object";
                    readonly properties: {
                        readonly "from.postal_code": {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["O campo from.postal code é obrigatório."];
                            };
                        };
                        readonly "to.postal_code": {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["O campo to.postal code é obrigatório."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CancelamentoDeEtiquetas: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["order"];
        readonly properties: {
            readonly order: {
                readonly type: "object";
                readonly description: "Informações da etiqueta a ser cancelada e o motivo para o cancelamento";
                readonly required: readonly ["id", "reason_id"];
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "ID da etiqueta a ser cancelada";
                    };
                    readonly reason_id: {
                        readonly type: "string";
                        readonly description: "Código referente ao tipo de cancelamento, para o propósito de integrações é sempre 2.";
                        readonly default: "2";
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly description: "Descrição do motivo para cancelar a etiqueta.";
                    };
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Content-Type", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly "6d4935c4-cc03-43b4-b8c4-beef6f141e14": {
                    readonly type: "object";
                    readonly properties: {
                        readonly canceled: {
                            readonly type: "boolean";
                            readonly default: true;
                            readonly examples: readonly [true];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["The given data was invalid."];
                };
                readonly errors: {
                    readonly type: "object";
                    readonly properties: {
                        readonly "order.reason_id": {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["O campo order.reason_id é obrigatório."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CompraDeFretes1: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["orders"];
        readonly properties: {
            readonly orders: {
                readonly type: "array";
                readonly description: "Pedidos";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Content-Type", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly purchase: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["f1261eb6-fa71-4cae-8267-7d332b42da4d"];
                        };
                        readonly protocol: {
                            readonly type: "string";
                            readonly examples: readonly ["PUR-20220326201"];
                        };
                        readonly total: {
                            readonly type: "number";
                            readonly default: 0;
                            readonly examples: readonly [25.35];
                        };
                        readonly discount: {
                            readonly type: "number";
                            readonly default: 0;
                            readonly examples: readonly [5.71];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["paid"];
                        };
                        readonly paid_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2022-03-29 21:15:53"];
                        };
                        readonly canceled_at: {};
                        readonly created_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2022-03-29 21:15:53"];
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2022-03-29 21:15:53"];
                        };
                        readonly payment: {};
                        readonly transactions: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["8ff6e5b5-92bb-44a6-85f1-576d15c9cb58"];
                                    };
                                    readonly protocol: {
                                        readonly type: "string";
                                        readonly examples: readonly ["TRN-20220357400"];
                                    };
                                    readonly value: {
                                        readonly type: "number";
                                        readonly default: 0;
                                        readonly examples: readonly [25.35];
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["debit"];
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                        readonly examples: readonly ["authorized"];
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Pagamento de envios (PUR-20220326201)"];
                                    };
                                    readonly authorized_at: {
                                        readonly type: "string";
                                        readonly examples: readonly ["2022-03-29 21:15:53"];
                                    };
                                    readonly unauthorized_at: {};
                                    readonly reserved_at: {};
                                    readonly canceled_at: {};
                                    readonly created_at: {
                                        readonly type: "string";
                                        readonly examples: readonly ["2022-03-29 21:15:53"];
                                    };
                                    readonly description_internal: {};
                                    readonly reason: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "integer";
                                                readonly default: 0;
                                                readonly examples: readonly [7];
                                            };
                                            readonly label: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Pagamento de envios"];
                                            };
                                            readonly description: {
                                                readonly type: "string";
                                                readonly examples: readonly [""];
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly orders: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["d345836e-061b-490a-b01e-6f7daa2def65"];
                                    };
                                    readonly protocol: {
                                        readonly type: "string";
                                        readonly examples: readonly ["ORD-20220395511"];
                                    };
                                    readonly service_id: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [3];
                                    };
                                    readonly agency_id: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [40];
                                    };
                                    readonly contract: {};
                                    readonly service_code: {};
                                    readonly quote: {
                                        readonly type: "number";
                                        readonly default: 0;
                                        readonly examples: readonly [25.35];
                                    };
                                    readonly price: {
                                        readonly type: "number";
                                        readonly default: 0;
                                        readonly examples: readonly [25.35];
                                    };
                                    readonly coupon: {};
                                    readonly discount: {
                                        readonly type: "number";
                                        readonly default: 0;
                                        readonly examples: readonly [5.71];
                                    };
                                    readonly delivery_min: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [5];
                                    };
                                    readonly delivery_max: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [6];
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                        readonly examples: readonly ["released"];
                                    };
                                    readonly reminder: {};
                                    readonly insurance_value: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [50];
                                    };
                                    readonly weight: {};
                                    readonly width: {};
                                    readonly height: {};
                                    readonly length: {};
                                    readonly diameter: {};
                                    readonly format: {
                                        readonly type: "string";
                                        readonly examples: readonly ["box"];
                                    };
                                    readonly billed_weight: {
                                        readonly type: "number";
                                        readonly default: 0;
                                        readonly examples: readonly [3.5];
                                    };
                                    readonly receipt: {
                                        readonly type: "boolean";
                                        readonly default: true;
                                        readonly examples: readonly [false];
                                    };
                                    readonly own_hand: {
                                        readonly type: "boolean";
                                        readonly default: true;
                                        readonly examples: readonly [false];
                                    };
                                    readonly collect: {
                                        readonly type: "boolean";
                                        readonly default: true;
                                        readonly examples: readonly [false];
                                    };
                                    readonly collect_scheduled_at: {};
                                    readonly reverse: {
                                        readonly type: "boolean";
                                        readonly default: true;
                                        readonly examples: readonly [false];
                                    };
                                    readonly non_commercial: {
                                        readonly type: "boolean";
                                        readonly default: true;
                                        readonly examples: readonly [false];
                                    };
                                    readonly authorization_code: {};
                                    readonly tracking: {};
                                    readonly self_tracking: {};
                                    readonly delivery_receipt: {};
                                    readonly additional_info: {};
                                    readonly cte_key: {};
                                    readonly paid_at: {
                                        readonly type: "string";
                                        readonly examples: readonly ["2022-03-29 21:15:53"];
                                    };
                                    readonly generated_at: {};
                                    readonly posted_at: {};
                                    readonly delivered_at: {};
                                    readonly canceled_at: {};
                                    readonly suspended_at: {};
                                    readonly expired_at: {};
                                    readonly created_at: {
                                        readonly type: "string";
                                        readonly examples: readonly ["2022-03-29 20:24:10"];
                                    };
                                    readonly updated_at: {
                                        readonly type: "string";
                                        readonly examples: readonly ["2022-03-29 21:15:53"];
                                    };
                                    readonly parse_pi_at: {};
                                    readonly from: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Teste ME"];
                                            };
                                            readonly phone: {
                                                readonly type: "string";
                                                readonly examples: readonly ["5598105050"];
                                            };
                                            readonly email: {
                                                readonly type: "string";
                                                readonly examples: readonly ["melhorenvio@teste.com"];
                                            };
                                            readonly document: {
                                                readonly type: "string";
                                                readonly examples: readonly ["16571478358"];
                                            };
                                            readonly company_document: {
                                                readonly type: "string";
                                                readonly examples: readonly ["04517623000197"];
                                            };
                                            readonly state_register: {
                                                readonly type: "string";
                                                readonly examples: readonly ["563025255115"];
                                            };
                                            readonly postal_code: {
                                                readonly type: "string";
                                                readonly examples: readonly ["7110000"];
                                            };
                                            readonly address: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Rua Teste"];
                                            };
                                            readonly location_number: {
                                                readonly type: "string";
                                                readonly examples: readonly ["100"];
                                            };
                                            readonly complement: {
                                                readonly type: "string";
                                                readonly examples: readonly ["CASA"];
                                            };
                                            readonly district: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Bairro Teste"];
                                            };
                                            readonly city: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Guarulhos"];
                                            };
                                            readonly state_abbr: {
                                                readonly type: "string";
                                                readonly examples: readonly ["SP"];
                                            };
                                            readonly country_id: {
                                                readonly type: "string";
                                                readonly examples: readonly ["BR"];
                                            };
                                            readonly latitude: {};
                                            readonly longitude: {};
                                            readonly note: {
                                                readonly type: "string";
                                                readonly examples: readonly ["observação"];
                                            };
                                        };
                                    };
                                    readonly to: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Melhor Envio Teste"];
                                            };
                                            readonly phone: {
                                                readonly type: "string";
                                                readonly examples: readonly ["1999999999"];
                                            };
                                            readonly email: {
                                                readonly type: "string";
                                                readonly examples: readonly ["melhorenvio@teste.com"];
                                            };
                                            readonly document: {
                                                readonly type: "string";
                                                readonly examples: readonly ["73646548010"];
                                            };
                                            readonly company_document: {
                                                readonly type: "string";
                                                readonly examples: readonly ["89794131000100"];
                                            };
                                            readonly state_register: {
                                                readonly type: "string";
                                                readonly examples: readonly ["123456"];
                                            };
                                            readonly postal_code: {
                                                readonly type: "string";
                                                readonly examples: readonly ["26210000"];
                                            };
                                            readonly address: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Avenida Marechal Floriano Peixoto"];
                                            };
                                            readonly location_number: {
                                                readonly type: "string";
                                                readonly examples: readonly ["123"];
                                            };
                                            readonly complement: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Ap 2"];
                                            };
                                            readonly district: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Centro"];
                                            };
                                            readonly city: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Nova Iguacu"];
                                            };
                                            readonly state_abbr: {
                                                readonly type: "string";
                                                readonly examples: readonly ["RJ"];
                                            };
                                            readonly country_id: {
                                                readonly type: "string";
                                                readonly examples: readonly ["BR"];
                                            };
                                            readonly latitude: {};
                                            readonly longitude: {};
                                            readonly note: {
                                                readonly type: "string";
                                                readonly examples: readonly ["observação"];
                                            };
                                        };
                                    };
                                    readonly service: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "integer";
                                                readonly default: 0;
                                                readonly examples: readonly [3];
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                                readonly examples: readonly [".Package"];
                                            };
                                            readonly status: {
                                                readonly type: "string";
                                                readonly examples: readonly ["available"];
                                            };
                                            readonly type: {
                                                readonly type: "string";
                                                readonly examples: readonly ["normal"];
                                            };
                                            readonly range: {
                                                readonly type: "string";
                                                readonly examples: readonly ["interstate"];
                                            };
                                            readonly restrictions: {
                                                readonly type: "string";
                                                readonly examples: readonly ["{\"insurance_value\":{\"min\":0,\"max\":29900},\"formats\":{\"box\":{\"weight\":{\"min\":0.001,\"max\":120},\"width\":{\"min\":1,\"max\":105},\"height\":{\"min\":1,\"max\":100},\"length\":{\"min\":1,\"max\":181},\"sum\":386}}}"];
                                            };
                                            readonly requirements: {
                                                readonly type: "string";
                                                readonly examples: readonly ["[\"names\",\"phones\",\"addresses\",\"documents\",\"invoice\"]"];
                                            };
                                            readonly optionals: {
                                                readonly type: "string";
                                                readonly examples: readonly ["[\"AR\",\"VD\"]"];
                                            };
                                            readonly company: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly id: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [2];
                                                    };
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["Jadlog"];
                                                    };
                                                    readonly status: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["available"];
                                                    };
                                                    readonly picture: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["/images/shipping-companies/jadlog.png"];
                                                    };
                                                    readonly use_own_contract: {
                                                        readonly type: "boolean";
                                                        readonly default: true;
                                                        readonly examples: readonly [false];
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly agency: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "integer";
                                                readonly default: 0;
                                                readonly examples: readonly [40];
                                            };
                                            readonly company_id: {
                                                readonly type: "integer";
                                                readonly default: 0;
                                                readonly examples: readonly [2];
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                                readonly examples: readonly ["CO LIMEIRA 01"];
                                            };
                                            readonly initials: {
                                                readonly type: "string";
                                                readonly examples: readonly ["CO-LMR-01"];
                                            };
                                            readonly code: {
                                                readonly type: "string";
                                                readonly examples: readonly ["1008530"];
                                            };
                                            readonly status: {
                                                readonly type: "string";
                                                readonly examples: readonly ["available"];
                                            };
                                            readonly company_name: {
                                                readonly type: "string";
                                                readonly examples: readonly ["KRONOS CARGO LTDA ME"];
                                            };
                                            readonly email: {
                                                readonly type: "string";
                                                readonly examples: readonly ["kronos.lmr@jadlog.com.br"];
                                            };
                                            readonly note: {};
                                            readonly created_at: {
                                                readonly type: "string";
                                                readonly examples: readonly ["2017-09-11 17:47:14"];
                                            };
                                            readonly updated_at: {
                                                readonly type: "string";
                                                readonly examples: readonly ["2017-10-19 16:47:33"];
                                            };
                                            readonly address: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly id: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [40];
                                                    };
                                                    readonly label: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["Agência JadLog"];
                                                    };
                                                    readonly postal_code: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["13485208"];
                                                    };
                                                    readonly address: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["Rua Jose Malaman 77"];
                                                    };
                                                    readonly number: {};
                                                    readonly complement: {};
                                                    readonly district: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["Jardim Residencial Granja Machado"];
                                                    };
                                                    readonly latitude: {
                                                        readonly type: "number";
                                                        readonly default: 0;
                                                        readonly examples: readonly [-22.5501559];
                                                    };
                                                    readonly longitude: {
                                                        readonly type: "number";
                                                        readonly default: 0;
                                                        readonly examples: readonly [-47.3830416];
                                                    };
                                                    readonly confirmed_at: {};
                                                    readonly created_at: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["2017-09-11 17:47:14"];
                                                    };
                                                    readonly updated_at: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["2017-10-19 16:47:33"];
                                                    };
                                                    readonly city: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly id: {
                                                                readonly type: "integer";
                                                                readonly default: 0;
                                                                readonly examples: readonly [5010];
                                                            };
                                                            readonly city: {
                                                                readonly type: "string";
                                                                readonly examples: readonly ["Limeira"];
                                                            };
                                                            readonly state: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly id: {
                                                                        readonly type: "integer";
                                                                        readonly default: 0;
                                                                        readonly examples: readonly [25];
                                                                    };
                                                                    readonly state: {
                                                                        readonly type: "string";
                                                                        readonly examples: readonly ["São Paulo"];
                                                                    };
                                                                    readonly state_abbr: {
                                                                        readonly type: "string";
                                                                        readonly examples: readonly ["SP"];
                                                                    };
                                                                    readonly country: {
                                                                        readonly type: "object";
                                                                        readonly properties: {
                                                                            readonly id: {
                                                                                readonly type: "string";
                                                                                readonly examples: readonly ["BR"];
                                                                            };
                                                                            readonly country: {
                                                                                readonly type: "string";
                                                                                readonly examples: readonly ["Brazil"];
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                            readonly phone: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly id: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [40];
                                                    };
                                                    readonly label: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["Agência JadLog"];
                                                    };
                                                    readonly phone: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["1934433954"];
                                                    };
                                                    readonly type: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["fixed"];
                                                    };
                                                    readonly country_id: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["BR"];
                                                    };
                                                    readonly confirmed_at: {};
                                                    readonly created_at: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["2017-09-11 17:47:14"];
                                                    };
                                                    readonly updated_at: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["2017-09-11 17:47:14"];
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly invoice: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly model: {
                                                readonly type: "string";
                                                readonly examples: readonly ["55"];
                                            };
                                            readonly number: {
                                                readonly type: "string";
                                                readonly examples: readonly ["9248"];
                                            };
                                            readonly serie: {
                                                readonly type: "string";
                                                readonly examples: readonly ["1"];
                                            };
                                            readonly key: {
                                                readonly type: "string";
                                                readonly examples: readonly ["31190307586261000184550010000092481404848162"];
                                            };
                                            readonly value: {};
                                            readonly cfop: {};
                                            readonly issued_at: {
                                                readonly type: "string";
                                                readonly examples: readonly ["2019-03-01 00:00:00"];
                                            };
                                            readonly uploaded_at: {};
                                            readonly to_document: {};
                                        };
                                    };
                                    readonly tags: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {};
                                        };
                                    };
                                    readonly products: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["Papel adesivo para etiquetas 1"];
                                                };
                                                readonly quantity: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [3];
                                                };
                                                readonly unitary_value: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [100];
                                                };
                                                readonly weight: {};
                                            };
                                        };
                                    };
                                    readonly generated_key: {};
                                };
                            };
                        };
                        readonly paypal_discounts: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {};
                            };
                        };
                    };
                };
                readonly digitable: {};
                readonly redirect: {};
                readonly message: {};
                readonly token: {};
                readonly payment_id: {};
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["The given data was invalid."];
                };
                readonly errors: {
                    readonly type: "object";
                    readonly properties: {
                        readonly orders: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["Existe uma ou mais orders que já foram pagas."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ExibirInformacoesDeItemDoCarrinho: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: "id";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "ID do Pedido";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "application/json";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obritatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["c7e6f6a1-88a2-4b76-95e1-eb9f344f2885"];
                };
                readonly protocol: {
                    readonly type: "string";
                    readonly examples: readonly ["ORD-20220397320"];
                };
                readonly service_id: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [3];
                };
                readonly agency_id: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [49];
                };
                readonly contract: {};
                readonly service_code: {};
                readonly quote: {
                    readonly type: "number";
                    readonly default: 0;
                    readonly examples: readonly [25.35];
                };
                readonly price: {
                    readonly type: "number";
                    readonly default: 0;
                    readonly examples: readonly [25.35];
                };
                readonly coupon: {};
                readonly discount: {
                    readonly type: "number";
                    readonly default: 0;
                    readonly examples: readonly [5.71];
                };
                readonly delivery_min: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [5];
                };
                readonly delivery_max: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [6];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["pending"];
                };
                readonly reminder: {};
                readonly insurance_value: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [50];
                };
                readonly weight: {};
                readonly width: {};
                readonly height: {};
                readonly length: {};
                readonly diameter: {};
                readonly format: {
                    readonly type: "string";
                    readonly examples: readonly ["box"];
                };
                readonly billed_weight: {
                    readonly type: "number";
                    readonly default: 0;
                    readonly examples: readonly [3.5];
                };
                readonly receipt: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly own_hand: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly collect: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly collect_scheduled_at: {};
                readonly reverse: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly non_commercial: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly authorization_code: {};
                readonly tracking: {};
                readonly self_tracking: {};
                readonly delivery_receipt: {};
                readonly additional_info: {};
                readonly cte_key: {};
                readonly paid_at: {};
                readonly generated_at: {};
                readonly posted_at: {};
                readonly delivered_at: {};
                readonly canceled_at: {};
                readonly suspended_at: {};
                readonly expired_at: {};
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-03-29 14:17:08"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-03-29 14:17:08"];
                };
                readonly parse_pi_at: {};
                readonly from: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Teste Magento"];
                        };
                        readonly phone: {
                            readonly type: "string";
                            readonly examples: readonly ["5598105050"];
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly examples: readonly ["melhorenvio@teste.com"];
                        };
                        readonly document: {
                            readonly type: "string";
                            readonly examples: readonly ["16571478358"];
                        };
                        readonly company_document: {
                            readonly type: "string";
                            readonly examples: readonly ["04517623000197"];
                        };
                        readonly state_register: {
                            readonly type: "string";
                            readonly examples: readonly ["563025255115"];
                        };
                        readonly postal_code: {
                            readonly type: "string";
                            readonly examples: readonly ["7110000"];
                        };
                        readonly address: {
                            readonly type: "string";
                            readonly examples: readonly ["Rua Teste"];
                        };
                        readonly location_number: {
                            readonly type: "string";
                            readonly examples: readonly ["100"];
                        };
                        readonly complement: {
                            readonly type: "string";
                            readonly examples: readonly ["CASA"];
                        };
                        readonly district: {
                            readonly type: "string";
                            readonly examples: readonly ["Bairro teste"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly examples: readonly ["Guarulhos"];
                        };
                        readonly state_abbr: {
                            readonly type: "string";
                            readonly examples: readonly ["SP"];
                        };
                        readonly country_id: {
                            readonly type: "string";
                            readonly examples: readonly ["BR"];
                        };
                        readonly latitude: {};
                        readonly longitude: {};
                        readonly note: {
                            readonly type: "string";
                            readonly examples: readonly ["observação"];
                        };
                    };
                };
                readonly to: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Melhor Envio"];
                        };
                        readonly phone: {
                            readonly type: "string";
                            readonly examples: readonly ["1999999999"];
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly examples: readonly ["melhorenvio@teste.com"];
                        };
                        readonly document: {
                            readonly type: "string";
                            readonly examples: readonly ["73646548010"];
                        };
                        readonly company_document: {
                            readonly type: "string";
                            readonly examples: readonly ["89794131000100"];
                        };
                        readonly state_register: {
                            readonly type: "string";
                            readonly examples: readonly ["123456"];
                        };
                        readonly postal_code: {
                            readonly type: "string";
                            readonly examples: readonly ["26210000"];
                        };
                        readonly address: {
                            readonly type: "string";
                            readonly examples: readonly ["Avenida Marechal Floriano Peixoto"];
                        };
                        readonly location_number: {
                            readonly type: "string";
                            readonly examples: readonly ["123"];
                        };
                        readonly complement: {
                            readonly type: "string";
                            readonly examples: readonly ["ap 2"];
                        };
                        readonly district: {
                            readonly type: "string";
                            readonly examples: readonly ["Centro"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly examples: readonly ["Nova Iguacu"];
                        };
                        readonly state_abbr: {
                            readonly type: "string";
                            readonly examples: readonly ["RJ"];
                        };
                        readonly country_id: {
                            readonly type: "string";
                            readonly examples: readonly ["BR"];
                        };
                        readonly latitude: {};
                        readonly longitude: {};
                        readonly note: {
                            readonly type: "string";
                            readonly examples: readonly ["Observação"];
                        };
                    };
                };
                readonly service: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [3];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly [".Package"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["available"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["normal"];
                        };
                        readonly range: {
                            readonly type: "string";
                            readonly examples: readonly ["interstate"];
                        };
                        readonly restrictions: {
                            readonly type: "string";
                            readonly examples: readonly ["{\"insurance_value\":{\"min\":0,\"max\":29900},\"formats\":{\"box\":{\"weight\":{\"min\":0.001,\"max\":120},\"width\":{\"min\":1,\"max\":105},\"height\":{\"min\":1,\"max\":100},\"length\":{\"min\":1,\"max\":181},\"sum\":386}}}"];
                        };
                        readonly requirements: {
                            readonly type: "string";
                            readonly examples: readonly ["[\"names\",\"phones\",\"addresses\",\"documents\",\"invoice\"]"];
                        };
                        readonly optionals: {
                            readonly type: "string";
                            readonly examples: readonly ["[\"AR\",\"VD\"]"];
                        };
                        readonly company: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [2];
                                };
                                readonly name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Jadlog"];
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly examples: readonly ["available"];
                                };
                                readonly picture: {
                                    readonly type: "string";
                                    readonly examples: readonly ["/images/shipping-companies/jadlog.png"];
                                };
                                readonly use_own_contract: {
                                    readonly type: "boolean";
                                    readonly default: true;
                                    readonly examples: readonly [false];
                                };
                            };
                        };
                    };
                };
                readonly agency: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [49];
                        };
                        readonly company_id: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [2];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["CO MIRASSOL 01 "];
                        };
                        readonly initials: {
                            readonly type: "string";
                            readonly examples: readonly ["CO-MSL-01"];
                        };
                        readonly code: {
                            readonly type: "string";
                            readonly examples: readonly ["1008588"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["available"];
                        };
                        readonly company_name: {
                            readonly type: "string";
                            readonly examples: readonly ["RODOZELLI EXPRESS LTDA ME"];
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly examples: readonly ["bozelli.msl@jadlog.com.br"];
                        };
                        readonly note: {};
                        readonly created_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2017-09-11 17:47:14"];
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2018-03-12 23:48:11"];
                        };
                        readonly address: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [49];
                                };
                                readonly label: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Agência JadLog"];
                                };
                                readonly postal_code: {
                                    readonly type: "string";
                                    readonly examples: readonly ["15130000"];
                                };
                                readonly address: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Rua Frei Antonio Zimmermann 2020"];
                                };
                                readonly number: {};
                                readonly complement: {};
                                readonly district: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Jardim Alvorada"];
                                };
                                readonly latitude: {
                                    readonly type: "number";
                                    readonly default: 0;
                                    readonly examples: readonly [-20.8201453];
                                };
                                readonly longitude: {
                                    readonly type: "number";
                                    readonly default: 0;
                                    readonly examples: readonly [-49.4951883];
                                };
                                readonly confirmed_at: {};
                                readonly created_at: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2017-09-11 17:47:14"];
                                };
                                readonly updated_at: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2017-10-19 16:47:34"];
                                };
                                readonly city: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [5047];
                                        };
                                        readonly city: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Mirassol"];
                                        };
                                        readonly state: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [25];
                                                };
                                                readonly state: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["São Paulo"];
                                                };
                                                readonly state_abbr: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["SP"];
                                                };
                                                readonly country: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly id: {
                                                            readonly type: "string";
                                                            readonly examples: readonly ["BR"];
                                                        };
                                                        readonly country: {
                                                            readonly type: "string";
                                                            readonly examples: readonly ["Brazil"];
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly phone: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [49];
                                };
                                readonly label: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Agência JadLog"];
                                };
                                readonly phone: {
                                    readonly type: "string";
                                    readonly examples: readonly ["1732532042"];
                                };
                                readonly type: {
                                    readonly type: "string";
                                    readonly examples: readonly ["fixed"];
                                };
                                readonly country_id: {
                                    readonly type: "string";
                                    readonly examples: readonly ["BR"];
                                };
                                readonly confirmed_at: {};
                                readonly created_at: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2017-09-11 17:47:14"];
                                };
                                readonly updated_at: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2017-09-11 17:47:14"];
                                };
                            };
                        };
                    };
                };
                readonly invoice: {
                    readonly type: "object";
                    readonly properties: {
                        readonly model: {
                            readonly type: "string";
                            readonly examples: readonly ["55"];
                        };
                        readonly number: {
                            readonly type: "string";
                            readonly examples: readonly ["9248"];
                        };
                        readonly serie: {
                            readonly type: "string";
                            readonly examples: readonly ["1"];
                        };
                        readonly key: {
                            readonly type: "string";
                            readonly examples: readonly ["31190307586261000184550010000092481404848162"];
                        };
                        readonly value: {};
                        readonly cfop: {};
                        readonly issued_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2019-03-01 00:00:00"];
                        };
                        readonly uploaded_at: {};
                        readonly to_document: {};
                    };
                };
                readonly tags: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {};
                    };
                };
                readonly products: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Papel adesivo para etiquetas 1"];
                            };
                            readonly quantity: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [3];
                            };
                            readonly unitary_value: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [100];
                            };
                            readonly weight: {};
                        };
                    };
                };
                readonly generated_key: {};
                readonly volumes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [101609];
                            };
                            readonly height: {
                                readonly type: "string";
                                readonly examples: readonly ["10.00"];
                            };
                            readonly width: {
                                readonly type: "string";
                                readonly examples: readonly ["15.00"];
                            };
                            readonly length: {
                                readonly type: "string";
                                readonly examples: readonly ["20.00"];
                            };
                            readonly diameter: {
                                readonly type: "string";
                                readonly examples: readonly ["0.00"];
                            };
                            readonly weight: {
                                readonly type: "string";
                                readonly examples: readonly ["3.50"];
                            };
                            readonly format: {
                                readonly type: "string";
                                readonly examples: readonly ["box"];
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-03-29 14:17:08"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-03-29 14:17:08"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["No query results for model [App\\Order]."];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GeracaoDeEtiquetas: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly orders: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Content-Type", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly "b1ad6622-50b0-4e96-b395-730544e60085": {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "boolean";
                            readonly default: true;
                            readonly examples: readonly [true];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly examples: readonly ["Envio gerado com sucesso"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["The given data was invalid."];
                };
                readonly errors: {
                    readonly type: "object";
                    readonly properties: {
                        readonly "orders.0": {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["O campo orders.0 deve ser uma string."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ImpressaoDace: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly arquivo: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "zpl, jpeg ou pdf";
                };
                readonly order_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Order id do envio desejado";
                };
            };
            readonly required: readonly ["arquivo", "order_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Content-Type", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthenticated"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["No query results for model [App\\Order] {{order_id}}"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ImpressaoDeEtiquetas: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["orders"];
        readonly properties: {
            readonly mode: {
                readonly type: "string";
                readonly description: "Modo: private / public";
            };
            readonly orders: {
                readonly type: "array";
                readonly description: "Pedidos";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Content-Type", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://sandbox.melhorenvio.com.br/imprimir/ixQLaqqjmb2E"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthenticated."];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ImpressaoDeEtiquetasEmArquivo: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly arquivo: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "zpl, jpeg ou pdf";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Order id do envio desejado";
                };
            };
            readonly required: readonly ["arquivo", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Content-Type", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthenticated"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["No query results for model [App\\Order] {{order_id}}"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const InserirFretesNoCarrinho: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["service", "from", "to", "products", "volumes"];
        readonly properties: {
            readonly service: {
                readonly type: "integer";
                readonly description: "Id referente do serviço da transportadora";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly agency: {
                readonly type: "integer";
                readonly description: "Id da agência/unidade onde será postado o envio (consultar regras das transportadoras)";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly from: {
                readonly type: "object";
                readonly description: "Informações do remetente do envio";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "Nome";
                    };
                    readonly phone: {
                        readonly type: "string";
                        readonly description: "Telefone";
                    };
                    readonly email: {
                        readonly type: "string";
                        readonly description: "E-mail";
                    };
                    readonly document: {
                        readonly type: "string";
                        readonly description: "CPF";
                    };
                    readonly company_document: {
                        readonly type: "string";
                        readonly description: "CNPJ";
                    };
                    readonly state_register: {
                        readonly type: "string";
                        readonly description: "Inscrição Estadual";
                    };
                    readonly address: {
                        readonly type: "string";
                        readonly description: "Logradouro";
                    };
                    readonly complement: {
                        readonly type: "string";
                        readonly description: "Complemento";
                    };
                    readonly number: {
                        readonly type: "string";
                        readonly description: "Número";
                    };
                    readonly district: {
                        readonly type: "string";
                        readonly description: "Bairro";
                    };
                    readonly city: {
                        readonly type: "string";
                        readonly description: "Cidade";
                    };
                    readonly country_id: {
                        readonly type: "string";
                        readonly description: "País";
                    };
                    readonly postal_code: {
                        readonly type: "string";
                        readonly description: "Cep";
                    };
                    readonly state_abbr: {
                        readonly type: "string";
                        readonly description: "Estado";
                    };
                    readonly note: {
                        readonly type: "string";
                        readonly description: "Observação";
                    };
                };
            };
            readonly to: {
                readonly type: "object";
                readonly description: "Informações do destinatário do envio";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "Nome";
                    };
                    readonly phone: {
                        readonly type: "string";
                        readonly description: "Telefone";
                    };
                    readonly email: {
                        readonly type: "string";
                        readonly description: "E-mail";
                    };
                    readonly document: {
                        readonly type: "string";
                        readonly description: "CPF";
                    };
                    readonly company_document: {
                        readonly type: "string";
                        readonly description: "CNPJ";
                    };
                    readonly state_register: {
                        readonly type: "string";
                        readonly description: "Inscrição Estadual";
                    };
                    readonly address: {
                        readonly type: "string";
                        readonly description: "Logradouro";
                    };
                    readonly complement: {
                        readonly type: "string";
                        readonly description: "Complemento";
                    };
                    readonly number: {
                        readonly type: "string";
                        readonly description: "Número";
                    };
                    readonly district: {
                        readonly type: "string";
                        readonly description: "Bairro";
                    };
                    readonly city: {
                        readonly type: "string";
                        readonly description: "Cidade";
                    };
                    readonly country_id: {
                        readonly type: "string";
                        readonly description: "País";
                    };
                    readonly postal_code: {
                        readonly type: "string";
                        readonly description: "Cep";
                    };
                    readonly state_abbr: {
                        readonly type: "string";
                        readonly description: "Estado";
                    };
                    readonly note: {
                        readonly type: "string";
                        readonly description: "Observação";
                    };
                };
            };
            readonly products: {
                readonly type: "array";
                readonly description: "Informações dos produtos que serão enviados (utilizado na declaração de conteúdo)";
                readonly items: {
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Nome";
                        };
                        readonly quantity: {
                            readonly type: "string";
                            readonly description: "Quantidade";
                        };
                        readonly unitary_value: {
                            readonly type: "string";
                            readonly description: "Valor Unitário";
                        };
                    };
                    readonly required: readonly ["name"];
                    readonly type: "object";
                };
            };
            readonly volumes: {
                readonly type: "array";
                readonly description: "Descrição dos volumes contidos no envio";
                readonly items: {
                    readonly properties: {
                        readonly height: {
                            readonly type: "integer";
                            readonly description: "Altura";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly width: {
                            readonly type: "integer";
                            readonly description: "Largura";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly length: {
                            readonly type: "integer";
                            readonly description: "Comprimento";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly weight: {
                            readonly type: "number";
                            readonly description: "Peso";
                            readonly format: "float";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                    };
                    readonly required: readonly ["height", "width", "length", "weight"];
                    readonly type: "object";
                };
            };
            readonly options: {
                readonly type: "object";
                readonly description: "Informações complementares do envio";
                readonly required: readonly ["insurance_value", "receipt", "own_hand", "reverse", "non_commercial"];
                readonly properties: {
                    readonly insurance_value: {
                        readonly type: "number";
                        readonly description: "Valor Segurado";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly receipt: {
                        readonly type: "boolean";
                        readonly description: "Flag para setar o serviço adicional de Aviso de Recebimento,";
                    };
                    readonly own_hand: {
                        readonly type: "boolean";
                        readonly description: "Flag para setar o serviço  adicional de Mãos Próprias";
                    };
                    readonly reverse: {
                        readonly type: "boolean";
                        readonly description: "Flag para identificar o envio como Envio reverso";
                    };
                    readonly non_commercial: {
                        readonly type: "boolean";
                        readonly description: "Flag para identificar o envio como um Envio não comercial";
                    };
                    readonly invoice: {
                        readonly type: "object";
                        readonly required: readonly ["key"];
                        readonly properties: {
                            readonly key: {
                                readonly type: "string";
                                readonly description: "Chave da Nota Fiscal";
                            };
                        };
                    };
                    readonly plataform: {
                        readonly type: "string";
                    };
                    readonly tags: {
                        readonly type: "array";
                        readonly items: {
                            readonly properties: {
                                readonly tag: {
                                    readonly type: "string";
                                    readonly description: "Identificação do pedido na plataforma";
                                };
                                readonly Url: {
                                    readonly type: "string";
                                    readonly description: "Url da plataforma";
                                };
                            };
                            readonly type: "object";
                        };
                    };
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Content-Type", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["10b87ac0-e99d-4aa4-b8b0-b147a84e16bf"];
                };
                readonly protocol: {
                    readonly type: "string";
                    readonly examples: readonly ["ORD-20220397305"];
                };
                readonly service_id: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [3];
                };
                readonly agency_id: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [48];
                };
                readonly contract: {};
                readonly service_code: {};
                readonly quote: {
                    readonly type: "number";
                    readonly default: 0;
                    readonly examples: readonly [25.35];
                };
                readonly price: {
                    readonly type: "number";
                    readonly default: 0;
                    readonly examples: readonly [25.35];
                };
                readonly coupon: {};
                readonly discount: {
                    readonly type: "number";
                    readonly default: 0;
                    readonly examples: readonly [5.71];
                };
                readonly delivery_min: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [5];
                };
                readonly delivery_max: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [6];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["pending"];
                };
                readonly reminder: {};
                readonly insurance_value: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [50];
                };
                readonly weight: {};
                readonly width: {};
                readonly height: {};
                readonly length: {};
                readonly diameter: {};
                readonly format: {
                    readonly type: "string";
                    readonly examples: readonly ["box"];
                };
                readonly billed_weight: {
                    readonly type: "number";
                    readonly default: 0;
                    readonly examples: readonly [3.5];
                };
                readonly receipt: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly own_hand: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly collect: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly collect_scheduled_at: {};
                readonly reverse: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly non_commercial: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly authorization_code: {};
                readonly tracking: {};
                readonly self_tracking: {};
                readonly delivery_receipt: {};
                readonly additional_info: {};
                readonly cte_key: {};
                readonly paid_at: {};
                readonly generated_at: {};
                readonly posted_at: {};
                readonly delivered_at: {};
                readonly canceled_at: {};
                readonly suspended_at: {};
                readonly expired_at: {};
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-03-29 12:50:19"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-03-29 12:50:19"];
                };
                readonly parse_pi_at: {};
                readonly products: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Papel adesivo para etiquetas 1"];
                            };
                            readonly quantity: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [3];
                            };
                            readonly unitary_value: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [100];
                            };
                            readonly weight: {};
                        };
                    };
                };
                readonly volumes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [101594];
                            };
                            readonly height: {
                                readonly type: "string";
                                readonly examples: readonly ["10.00"];
                            };
                            readonly width: {
                                readonly type: "string";
                                readonly examples: readonly ["15.00"];
                            };
                            readonly length: {
                                readonly type: "string";
                                readonly examples: readonly ["20.00"];
                            };
                            readonly diameter: {
                                readonly type: "string";
                                readonly examples: readonly ["0.00"];
                            };
                            readonly weight: {
                                readonly type: "string";
                                readonly examples: readonly ["3.50"];
                            };
                            readonly format: {
                                readonly type: "string";
                                readonly examples: readonly ["box"];
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-03-29 12:50:19"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-03-29 12:50:19"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly volumes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Peso do pacote 1 não informado"];
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const InserirLogisticaReversaNoCarrinho: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["service", "new_sender_mail", "new_sender_phone", "insurance_value", "from", "to", "package"];
        readonly properties: {
            readonly service: {
                readonly type: "integer";
                readonly description: "Id referente do serviço da transportadora";
                readonly format: "int32";
                readonly examples: readonly [1];
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly new_sender_mail: {
                readonly type: "string";
                readonly description: "e-mail do remetente que estará realizando a devolução";
                readonly examples: readonly ["remetente@melhorenvio.com"];
            };
            readonly new_sender_phone: {
                readonly type: "string";
                readonly description: "celular do remetente que estará realizando a devolução";
            };
            readonly insurance_value: {
                readonly type: "number";
                readonly description: "Valor declarado";
                readonly default: 0;
                readonly format: "double";
                readonly minimum: -1.7976931348623157e+308;
                readonly maximum: 1.7976931348623157e+308;
            };
            readonly agency: {
                readonly type: "integer";
                readonly description: "Id da agência/unidade onde será postado o envio (consultar regras das transportadoras)";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly from: {
                readonly type: "object";
                readonly description: "Informações do remetente do envio";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "Nome";
                    };
                    readonly phone: {
                        readonly type: "string";
                        readonly description: "Telefone";
                    };
                    readonly email: {
                        readonly type: "string";
                        readonly description: "E-mail";
                    };
                    readonly document: {
                        readonly type: "string";
                        readonly description: "CPF";
                    };
                    readonly company_document: {
                        readonly type: "string";
                        readonly description: "CNPJ";
                    };
                    readonly state_register: {
                        readonly type: "string";
                        readonly description: "Inscrição Estadual";
                    };
                    readonly address: {
                        readonly type: "string";
                        readonly description: "Logradouro";
                    };
                    readonly complement: {
                        readonly type: "string";
                        readonly description: "Complemento";
                    };
                    readonly number: {
                        readonly type: "string";
                        readonly description: "Número";
                    };
                    readonly district: {
                        readonly type: "string";
                        readonly description: "Bairro";
                    };
                    readonly city: {
                        readonly type: "string";
                        readonly description: "Cidade";
                    };
                    readonly country_id: {
                        readonly type: "string";
                        readonly description: "País";
                    };
                    readonly postal_code: {
                        readonly type: "string";
                        readonly description: "Cep";
                    };
                    readonly state_abbr: {
                        readonly type: "string";
                        readonly description: "Estado";
                    };
                    readonly note: {
                        readonly type: "string";
                        readonly description: "Observação";
                    };
                };
            };
            readonly to: {
                readonly type: "object";
                readonly description: "Informações do destinatário do envio";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "Nome";
                    };
                    readonly phone: {
                        readonly type: "string";
                        readonly description: "Telefone";
                    };
                    readonly email: {
                        readonly type: "string";
                        readonly description: "E-mail";
                    };
                    readonly document: {
                        readonly type: "string";
                        readonly description: "CPF";
                    };
                    readonly company_document: {
                        readonly type: "string";
                        readonly description: "CNPJ";
                    };
                    readonly state_register: {
                        readonly type: "string";
                        readonly description: "Inscrição Estadual";
                    };
                    readonly address: {
                        readonly type: "string";
                        readonly description: "Logradouro";
                    };
                    readonly complement: {
                        readonly type: "string";
                        readonly description: "Complemento";
                    };
                    readonly number: {
                        readonly type: "string";
                        readonly description: "Número";
                    };
                    readonly district: {
                        readonly type: "string";
                        readonly description: "Bairro";
                    };
                    readonly city: {
                        readonly type: "string";
                        readonly description: "Cidade";
                    };
                    readonly country_id: {
                        readonly type: "string";
                        readonly description: "País";
                    };
                    readonly postal_code: {
                        readonly type: "string";
                        readonly description: "Cep";
                    };
                    readonly state_abbr: {
                        readonly type: "string";
                        readonly description: "Estado";
                    };
                    readonly note: {
                        readonly type: "string";
                        readonly description: "Observação";
                    };
                };
            };
            readonly products: {
                readonly type: "array";
                readonly description: "Informações dos produtos que serão enviados (utilizado na declaração de conteúdo). Obrigatório caso seja uma devolução de um envio não intermediado originalmente pelo Melhor Envio";
                readonly items: {
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Nome";
                        };
                        readonly quantity: {
                            readonly type: "string";
                            readonly description: "Quantidade";
                        };
                        readonly unitary_value: {
                            readonly type: "string";
                            readonly description: "Valor unitário";
                        };
                        readonly weight: {
                            readonly type: "number";
                            readonly description: "Peso";
                            readonly format: "float";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                    };
                    readonly required: readonly ["name", "weight"];
                    readonly type: "object";
                };
            };
            readonly package: {
                readonly type: "object";
                readonly description: "Descrição dos volumes contidos no envio";
                readonly required: readonly ["height", "width", "length", "weight"];
                readonly properties: {
                    readonly height: {
                        readonly type: "integer";
                        readonly description: "Altura";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly width: {
                        readonly type: "integer";
                        readonly description: "Largura";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly length: {
                        readonly type: "integer";
                        readonly description: "Comprimento";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly weight: {
                        readonly type: "number";
                        readonly description: "Peso";
                        readonly format: "float";
                        readonly minimum: -3.402823669209385e+38;
                        readonly maximum: 3.402823669209385e+38;
                    };
                };
            };
            readonly options: {
                readonly type: "array";
                readonly description: "Informações complementares do envio";
                readonly items: {
                    readonly properties: {
                        readonly own_hand: {
                            readonly type: "boolean";
                            readonly description: "Serviço de mãos próprias";
                            readonly default: false;
                        };
                        readonly receipt: {
                            readonly type: "boolean";
                            readonly description: "Aviso de recebimento";
                            readonly default: false;
                        };
                        readonly collect: {
                            readonly type: "boolean";
                            readonly description: "Coleta";
                            readonly default: false;
                        };
                        readonly platform: {
                            readonly type: "string";
                        };
                        readonly tags: {
                            readonly type: "array";
                            readonly items: {
                                readonly properties: {
                                    readonly tag: {
                                        readonly type: "string";
                                        readonly description: "Identificação do pedido na plataforma";
                                    };
                                    readonly Url: {
                                        readonly type: "string";
                                        readonly description: "Url da plataforma";
                                    };
                                };
                                readonly type: "object";
                            };
                        };
                    };
                    readonly type: "object";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Content-Type", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["10b87ac0-e99d-4aa4-b8b0-b147a84e16bf"];
                };
                readonly protocol: {
                    readonly type: "string";
                    readonly examples: readonly ["ORD-20220397305"];
                };
                readonly service_id: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [3];
                };
                readonly agency_id: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [48];
                };
                readonly contract: {};
                readonly service_code: {};
                readonly quote: {
                    readonly type: "number";
                    readonly default: 0;
                    readonly examples: readonly [25.35];
                };
                readonly price: {
                    readonly type: "number";
                    readonly default: 0;
                    readonly examples: readonly [25.35];
                };
                readonly coupon: {};
                readonly discount: {
                    readonly type: "number";
                    readonly default: 0;
                    readonly examples: readonly [5.71];
                };
                readonly delivery_min: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [5];
                };
                readonly delivery_max: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [6];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["pending"];
                };
                readonly reminder: {};
                readonly insurance_value: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [50];
                };
                readonly weight: {};
                readonly width: {};
                readonly height: {};
                readonly length: {};
                readonly diameter: {};
                readonly format: {
                    readonly type: "string";
                    readonly examples: readonly ["box"];
                };
                readonly billed_weight: {
                    readonly type: "number";
                    readonly default: 0;
                    readonly examples: readonly [3.5];
                };
                readonly receipt: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly own_hand: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly collect: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly collect_scheduled_at: {};
                readonly reverse: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly non_commercial: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly authorization_code: {};
                readonly tracking: {};
                readonly self_tracking: {};
                readonly delivery_receipt: {};
                readonly additional_info: {};
                readonly cte_key: {};
                readonly paid_at: {};
                readonly generated_at: {};
                readonly posted_at: {};
                readonly delivered_at: {};
                readonly canceled_at: {};
                readonly suspended_at: {};
                readonly expired_at: {};
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-03-29 12:50:19"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-03-29 12:50:19"];
                };
                readonly parse_pi_at: {};
                readonly products: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Papel adesivo para etiquetas 1"];
                            };
                            readonly quantity: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [3];
                            };
                            readonly unitary_value: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [100];
                            };
                            readonly weight: {};
                        };
                    };
                };
                readonly volumes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [101594];
                            };
                            readonly height: {
                                readonly type: "string";
                                readonly examples: readonly ["10.00"];
                            };
                            readonly width: {
                                readonly type: "string";
                                readonly examples: readonly ["15.00"];
                            };
                            readonly length: {
                                readonly type: "string";
                                readonly examples: readonly ["20.00"];
                            };
                            readonly diameter: {
                                readonly type: "string";
                                readonly examples: readonly ["0.00"];
                            };
                            readonly weight: {
                                readonly type: "string";
                                readonly examples: readonly ["3.50"];
                            };
                            readonly format: {
                                readonly type: "string";
                                readonly examples: readonly ["box"];
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-03-29 12:50:19"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-03-29 12:50:19"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly volumes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Peso do pacote 1 não informado"];
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const InserirSaldoNaCarteiraDoUsuario: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["gateway", "value", "slug"];
        readonly properties: {
            readonly gateway: {
                readonly type: "string";
                readonly description: "Ex: yapay-transparente";
            };
            readonly value: {
                readonly type: "string";
                readonly description: "Valor. Ex: 10.50";
            };
            readonly slug: {
                readonly type: "string";
                readonly description: "Ex: pix | boleto";
            };
            readonly redirect_url: {
                readonly type: "string";
                readonly description: "https://seuenderecoderetorno.me";
            };
            readonly finger_print: {
                readonly type: "string";
                readonly description: "Finger Print";
            };
            readonly company_name: {
                readonly type: "string";
                readonly description: "Nome Empresa";
            };
            readonly cnpj: {
                readonly type: "string";
                readonly description: "CNPJ Empresa";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Content-Type", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly payment: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["c7793ea8-ee50-45a0-9f0c-809ff34c17c8"];
                        };
                        readonly protocol: {
                            readonly type: "string";
                            readonly examples: readonly ["PAY-2022032545"];
                        };
                        readonly value: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [1000];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["pending"];
                        };
                        readonly redirect: {
                            readonly type: "string";
                            readonly examples: readonly ["https://sandbox.melhorenvio.com.br"];
                        };
                        readonly response: {};
                        readonly authorized_at: {};
                        readonly unauthorized_at: {};
                        readonly canceled_at: {};
                        readonly chargeback_at: {};
                        readonly created_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2022-03-30 18:06:55"];
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2022-03-30 18:06:55"];
                        };
                        readonly link: {};
                        readonly payment_gateway_id: {};
                        readonly gateway: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [2];
                                };
                                readonly slug: {
                                    readonly type: "string";
                                    readonly examples: readonly ["mercado-pago"];
                                };
                                readonly name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Mercado Pago"];
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly examples: readonly ["available"];
                                };
                                readonly min_value: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [1];
                                };
                                readonly picture: {
                                    readonly type: "string";
                                    readonly examples: readonly ["https://melhorenvio.s3.sa-east-1.amazonaws.com/payment-gateways/mercado-pago.png"];
                                };
                                readonly website: {
                                    readonly type: "string";
                                    readonly examples: readonly ["https://www.mercadopago.com.br"];
                                };
                            };
                        };
                        readonly method: {};
                        readonly transaction: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly examples: readonly ["a9f49db7-2dd5-4e79-bd06-3a90829e359d"];
                                };
                                readonly protocol: {
                                    readonly type: "string";
                                    readonly examples: readonly ["TRN-20220357461"];
                                };
                                readonly value: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [1000];
                                };
                                readonly type: {
                                    readonly type: "string";
                                    readonly examples: readonly ["credit"];
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly examples: readonly ["pending"];
                                };
                                readonly description: {};
                                readonly authorized_at: {};
                                readonly unauthorized_at: {};
                                readonly reserved_at: {};
                                readonly canceled_at: {};
                                readonly created_at: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2022-03-30 18:06:55"];
                                };
                                readonly description_internal: {};
                                readonly reason: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [6];
                                        };
                                        readonly label: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Inserção de crédito"];
                                        };
                                        readonly description: {
                                            readonly type: "string";
                                            readonly examples: readonly [""];
                                        };
                                    };
                                };
                            };
                        };
                        readonly user: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly examples: readonly ["779f4d62-c5b4-41e3-b0b0-ae2eb1509825"];
                                };
                                readonly protocol: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [3477];
                                };
                                readonly firstname: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Magno"];
                                };
                                readonly lastname: {
                                    readonly type: "string";
                                    readonly examples: readonly ["xxxxxxxxx"];
                                };
                                readonly email: {
                                    readonly type: "string";
                                    readonly examples: readonly ["x@melhorenvio.com"];
                                };
                                readonly picture: {};
                                readonly thumbnail: {};
                                readonly document: {
                                    readonly type: "string";
                                    readonly examples: readonly ["xxxxxxxxxxx"];
                                };
                                readonly birthdate: {
                                    readonly type: "string";
                                    readonly examples: readonly ["xxxx-xx-xx 00:00:00"];
                                };
                                readonly email_confirmed_at: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2021-06-22 12:17:00"];
                                };
                                readonly email_alternative: {};
                                readonly access_at: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2021-09-01 12:31:29"];
                                };
                                readonly created_at: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2021-06-22 12:17:00"];
                                };
                                readonly updated_at: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2021-06-22 12:17:38"];
                                };
                            };
                        };
                    };
                };
                readonly redirect: {
                    readonly type: "string";
                    readonly examples: readonly ["https://sandbox.melhorenvio.com.br/checkout/notify/2"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
                readonly digitable: {};
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthenticated."];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ListarAgenciasEOpcoesDeFiltro: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly company: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "ID da transportadora";
                };
                readonly country: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "País";
                };
                readonly state: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Estado / Exemplos: RS, SP, RJ, etc.";
                };
                readonly city: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Cidade / Exemplos: Porto+Alegre, São+Paulo, Rio+de+Janeiro, etc";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ListarEnderecosDeUmaLoja: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly storeId: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "ID da loja";
                };
            };
            readonly required: readonly ["storeId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "Content-type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Content-type", "Accept", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly current_page: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [32336];
                            };
                            readonly label: {
                                readonly type: "string";
                                readonly examples: readonly [""];
                            };
                            readonly postal_code: {
                                readonly type: "string";
                                readonly examples: readonly ["07110000"];
                            };
                            readonly address: {
                                readonly type: "string";
                                readonly examples: readonly ["Av Teste"];
                            };
                            readonly number: {
                                readonly type: "string";
                                readonly examples: readonly ["123"];
                            };
                            readonly complement: {
                                readonly type: "string";
                                readonly examples: readonly ["ABC"];
                            };
                            readonly district: {};
                            readonly latitude: {};
                            readonly longitude: {};
                            readonly confirmed_at: {};
                            readonly created_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-03-30 17:08:23"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-03-30 17:08:23"];
                            };
                            readonly city: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [5269];
                                    };
                                    readonly city: {
                                        readonly type: "string";
                                        readonly examples: readonly ["São Paulo"];
                                    };
                                    readonly state: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "integer";
                                                readonly default: 0;
                                                readonly examples: readonly [25];
                                            };
                                            readonly state: {
                                                readonly type: "string";
                                                readonly examples: readonly ["São Paulo"];
                                            };
                                            readonly state_abbr: {
                                                readonly type: "string";
                                                readonly examples: readonly ["SP"];
                                            };
                                            readonly country: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly id: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["BR"];
                                                    };
                                                    readonly country: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["Brazil"];
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly first_page_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://sandbox.melhorenvio.com.br/api/v2/me/companies/781f86be-c3be-47e7-9bef-70b8675a55c3/addresses?page=1"];
                };
                readonly from: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly last_page: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly last_page_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://sandbox.melhorenvio.com.br/api/v2/me/companies/781f86be-c3be-47e7-9bef-70b8675a55c3/addresses?page=1"];
                };
                readonly next_page_url: {};
                readonly path: {
                    readonly type: "string";
                    readonly examples: readonly ["https://sandbox.melhorenvio.com.br/api/v2/me/companies/781f86be-c3be-47e7-9bef-70b8675a55c3/addresses"];
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [10];
                };
                readonly prev_page_url: {};
                readonly to: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly total: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["No query results for model [App\\Company]."];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ListarEnderecosDoUsuario: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthenticated."];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ListarEtiquetas: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "{Pending | Released | Posted | Delivered | Cancelled | Not Delivered}";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly current_page: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {};
                    };
                };
                readonly first_page_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://sandbox.melhorenvio.com.br/api/v2/me/orders?page=1"];
                };
                readonly from: {};
                readonly last_page: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly last_page_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://sandbox.melhorenvio.com.br/api/v2/me/orders?page=1"];
                };
                readonly next_page_url: {};
                readonly path: {
                    readonly type: "string";
                    readonly examples: readonly ["https://sandbox.melhorenvio.com.br/api/v2/me/orders"];
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [10];
                };
                readonly prev_page_url: {};
                readonly to: {};
                readonly total: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthenticated."];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ListarInformacoesDeAplicativo: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obritatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Não há configurações salvas"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ListarInformacoesDeUmServico: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "ID do serviço";
                };
            };
            readonly required: readonly ["serviceId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["PAC"];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["normal"];
                };
                readonly range: {
                    readonly type: "string";
                    readonly examples: readonly ["interstate"];
                };
                readonly restrictions: {
                    readonly type: "object";
                    readonly properties: {
                        readonly insurance_value: {
                            readonly type: "object";
                            readonly properties: {
                                readonly min: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                };
                                readonly max: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [3000];
                                };
                            };
                        };
                        readonly formats: {
                            readonly type: "object";
                            readonly properties: {
                                readonly box: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly weight: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly min: {
                                                    readonly type: "number";
                                                    readonly default: 0;
                                                    readonly examples: readonly [0.001];
                                                };
                                                readonly max: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [30];
                                                };
                                            };
                                        };
                                        readonly width: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly min: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [11];
                                                };
                                                readonly max: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [105];
                                                };
                                            };
                                        };
                                        readonly height: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly min: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [2];
                                                };
                                                readonly max: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [105];
                                                };
                                            };
                                        };
                                        readonly length: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly min: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [16];
                                                };
                                                readonly max: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [105];
                                                };
                                            };
                                        };
                                        readonly sum: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [200];
                                        };
                                    };
                                };
                                readonly roll: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly weight: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly min: {
                                                    readonly type: "number";
                                                    readonly default: 0;
                                                    readonly examples: readonly [0.001];
                                                };
                                                readonly max: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [30];
                                                };
                                            };
                                        };
                                        readonly diameter: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly min: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [5];
                                                };
                                                readonly max: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [91];
                                                };
                                            };
                                        };
                                        readonly length: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly min: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [18];
                                                };
                                                readonly max: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [105];
                                                };
                                            };
                                        };
                                        readonly sum: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [200];
                                        };
                                    };
                                };
                                readonly letter: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly weight: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly min: {
                                                    readonly type: "number";
                                                    readonly default: 0;
                                                    readonly examples: readonly [0.001];
                                                };
                                                readonly max: {
                                                    readonly type: "number";
                                                    readonly default: 0;
                                                    readonly examples: readonly [0.5];
                                                };
                                            };
                                        };
                                        readonly width: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly min: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [11];
                                                };
                                                readonly max: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [60];
                                                };
                                            };
                                        };
                                        readonly length: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly min: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [16];
                                                };
                                                readonly max: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [60];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly requirements: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["names"];
                    };
                };
                readonly optionals: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["AR"];
                    };
                };
                readonly company: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [1];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Correios"];
                        };
                        readonly picture: {
                            readonly type: "string";
                            readonly examples: readonly ["https://sandbox.melhorenvio.com.br/images/shipping-companies/correios.png"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ListarInformacoesDeUmaAgencia: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly agencyId: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "ID da agência";
                };
            };
            readonly required: readonly ["agencyId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [4];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["LJ OSASCO 01"];
                };
                readonly initials: {
                    readonly type: "string";
                    readonly examples: readonly ["LJ-OSC-01"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["1008139"];
                };
                readonly company_name: {
                    readonly type: "string";
                    readonly examples: readonly ["MEG LOGISTICA E TRANSPORTES LTDA"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["available"];
                };
                readonly email: {
                    readonly type: "string";
                    readonly examples: readonly ["meg.osc@jadlog.com.br"];
                };
                readonly note: {};
                readonly company_id: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [2];
                };
                readonly address: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [4];
                        };
                        readonly label: {
                            readonly type: "string";
                            readonly examples: readonly ["Agência JadLog"];
                        };
                        readonly postal_code: {
                            readonly type: "string";
                            readonly examples: readonly ["06210130"];
                        };
                        readonly address: {
                            readonly type: "string";
                            readonly examples: readonly ["Rua Armenia 259/644"];
                        };
                        readonly number: {};
                        readonly complement: {};
                        readonly district: {
                            readonly type: "string";
                            readonly examples: readonly ["Presidente Altino"];
                        };
                        readonly latitude: {
                            readonly type: "number";
                            readonly default: 0;
                            readonly examples: readonly [-23.5278746];
                        };
                        readonly longitude: {
                            readonly type: "number";
                            readonly default: 0;
                            readonly examples: readonly [-46.7652875];
                        };
                        readonly confirmed_at: {};
                        readonly created_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2017-09-11 17:47:13"];
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2017-10-19 16:47:31"];
                        };
                        readonly city: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [5094];
                                };
                                readonly city: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Osasco"];
                                };
                                readonly state: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [25];
                                        };
                                        readonly state: {
                                            readonly type: "string";
                                            readonly examples: readonly ["São Paulo"];
                                        };
                                        readonly state_abbr: {
                                            readonly type: "string";
                                            readonly examples: readonly ["SP"];
                                        };
                                        readonly country: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["BR"];
                                                };
                                                readonly country: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["Brazil"];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly phone: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [4];
                        };
                        readonly label: {
                            readonly type: "string";
                            readonly examples: readonly ["Agência JadLog"];
                        };
                        readonly phone: {
                            readonly type: "string";
                            readonly examples: readonly ["1136891717"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["fixed"];
                        };
                        readonly country_id: {
                            readonly type: "string";
                            readonly examples: readonly ["BR"];
                        };
                        readonly confirmed_at: {};
                        readonly created_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2017-09-11 17:47:13"];
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2017-09-11 17:47:13"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ListarInformacoesDeUmaEtiqueta: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Id da order correspondente à etiqueta de envio";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["34105e98-bb32-4e85-8b0f-8bd2c888eb31"];
                };
                readonly protocol: {
                    readonly type: "string";
                    readonly examples: readonly ["ORD-20220395517"];
                };
                readonly service_id: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly agency_id: {};
                readonly contract: {
                    readonly type: "string";
                    readonly examples: readonly ["9912415671"];
                };
                readonly service_code: {};
                readonly quote: {
                    readonly type: "number";
                    readonly default: 0;
                    readonly examples: readonly [31.13];
                };
                readonly price: {
                    readonly type: "number";
                    readonly default: 0;
                    readonly examples: readonly [31.13];
                };
                readonly coupon: {};
                readonly discount: {
                    readonly type: "number";
                    readonly default: 0;
                    readonly examples: readonly [4.15];
                };
                readonly delivery_min: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [8];
                };
                readonly delivery_max: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [9];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["posted"];
                };
                readonly reminder: {};
                readonly insurance_value: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [50];
                };
                readonly weight: {};
                readonly width: {};
                readonly height: {};
                readonly length: {};
                readonly diameter: {};
                readonly format: {
                    readonly type: "string";
                    readonly examples: readonly ["box"];
                };
                readonly billed_weight: {
                    readonly type: "number";
                    readonly default: 0;
                    readonly examples: readonly [3.5];
                };
                readonly receipt: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly own_hand: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly collect: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly collect_scheduled_at: {};
                readonly reverse: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly non_commercial: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly authorization_code: {
                    readonly type: "string";
                    readonly examples: readonly ["2022032920"];
                };
                readonly tracking: {
                    readonly type: "string";
                    readonly examples: readonly ["ME220021P96BR"];
                };
                readonly self_tracking: {
                    readonly type: "string";
                    readonly examples: readonly ["ME220021P96BR"];
                };
                readonly delivery_receipt: {};
                readonly additional_info: {};
                readonly cte_key: {};
                readonly paid_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-03-29 20:43:37"];
                };
                readonly generated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-03-29 20:43:50"];
                };
                readonly posted_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-03-29 21:00:06"];
                };
                readonly delivered_at: {};
                readonly canceled_at: {};
                readonly suspended_at: {};
                readonly expired_at: {};
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-03-29 20:24:51"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-03-29 21:00:06"];
                };
                readonly parse_pi_at: {};
                readonly from: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Teste ME"];
                        };
                        readonly phone: {
                            readonly type: "string";
                            readonly examples: readonly ["5598105050"];
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly examples: readonly ["melhorenvio@teste.com"];
                        };
                        readonly document: {
                            readonly type: "string";
                            readonly examples: readonly ["16571478358"];
                        };
                        readonly company_document: {
                            readonly type: "string";
                            readonly examples: readonly ["04517623000197"];
                        };
                        readonly state_register: {
                            readonly type: "string";
                            readonly examples: readonly ["563025255115"];
                        };
                        readonly postal_code: {
                            readonly type: "string";
                            readonly examples: readonly ["7110000"];
                        };
                        readonly address: {
                            readonly type: "string";
                            readonly examples: readonly ["Rua Teste"];
                        };
                        readonly location_number: {
                            readonly type: "string";
                            readonly examples: readonly ["100"];
                        };
                        readonly complement: {
                            readonly type: "string";
                            readonly examples: readonly ["CASA"];
                        };
                        readonly district: {
                            readonly type: "string";
                            readonly examples: readonly ["Bairro Teste"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly examples: readonly ["Guarulhos"];
                        };
                        readonly state_abbr: {
                            readonly type: "string";
                            readonly examples: readonly ["SP"];
                        };
                        readonly country_id: {
                            readonly type: "string";
                            readonly examples: readonly ["BR"];
                        };
                        readonly latitude: {};
                        readonly longitude: {};
                        readonly note: {
                            readonly type: "string";
                            readonly examples: readonly ["observação"];
                        };
                    };
                };
                readonly to: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Melhor Envio Teste"];
                        };
                        readonly phone: {
                            readonly type: "string";
                            readonly examples: readonly ["1999999999"];
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly examples: readonly ["melhorenvio@teste.com"];
                        };
                        readonly document: {
                            readonly type: "string";
                            readonly examples: readonly ["73646548010"];
                        };
                        readonly company_document: {
                            readonly type: "string";
                            readonly examples: readonly ["89794131000100"];
                        };
                        readonly state_register: {
                            readonly type: "string";
                            readonly examples: readonly ["123456"];
                        };
                        readonly postal_code: {
                            readonly type: "string";
                            readonly examples: readonly ["26210000"];
                        };
                        readonly address: {
                            readonly type: "string";
                            readonly examples: readonly ["Avenida Marechal Floriano Peixoto"];
                        };
                        readonly location_number: {
                            readonly type: "string";
                            readonly examples: readonly ["123"];
                        };
                        readonly complement: {
                            readonly type: "string";
                            readonly examples: readonly ["Ap 2"];
                        };
                        readonly district: {
                            readonly type: "string";
                            readonly examples: readonly ["Centro"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly examples: readonly ["Nova Iguacu"];
                        };
                        readonly state_abbr: {
                            readonly type: "string";
                            readonly examples: readonly ["RJ"];
                        };
                        readonly country_id: {
                            readonly type: "string";
                            readonly examples: readonly ["BR"];
                        };
                        readonly latitude: {};
                        readonly longitude: {};
                        readonly note: {
                            readonly type: "string";
                            readonly examples: readonly ["observação"];
                        };
                    };
                };
                readonly service: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [1];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["PAC"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["available"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["normal"];
                        };
                        readonly range: {
                            readonly type: "string";
                            readonly examples: readonly ["interstate"];
                        };
                        readonly restrictions: {
                            readonly type: "string";
                            readonly examples: readonly ["{\"insurance_value\":{\"min\":0,\"max\":3000},\"formats\":{\"box\":{\"weight\":{\"min\":0.001,\"max\":30},\"width\":{\"min\":11,\"max\":105},\"height\":{\"min\":2,\"max\":105},\"length\":{\"min\":16,\"max\":105},\"sum\":200},\"roll\":{\"weight\":{\"min\":0.001,\"max\":30},\"diameter\":{\"min\":5,\"max\":91},\"length\":{\"min\":18,\"max\":105},\"sum\":200},\"letter\":{\"weight\":{\"min\":0.001,\"max\":0.5},\"width\":{\"min\":11,\"max\":60},\"length\":{\"min\":16,\"max\":60}}}}"];
                        };
                        readonly requirements: {
                            readonly type: "string";
                            readonly examples: readonly ["[\"names\",\"addresses\"]"];
                        };
                        readonly optionals: {
                            readonly type: "string";
                            readonly examples: readonly ["[\"AR\",\"MP\",\"VD\"]"];
                        };
                        readonly company: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [1];
                                };
                                readonly name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Correios"];
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly examples: readonly ["available"];
                                };
                                readonly picture: {
                                    readonly type: "string";
                                    readonly examples: readonly ["/images/shipping-companies/correios.png"];
                                };
                                readonly use_own_contract: {
                                    readonly type: "boolean";
                                    readonly default: true;
                                    readonly examples: readonly [false];
                                };
                            };
                        };
                    };
                };
                readonly agency: {};
                readonly invoice: {
                    readonly type: "object";
                    readonly properties: {
                        readonly model: {
                            readonly type: "string";
                            readonly examples: readonly ["55"];
                        };
                        readonly number: {
                            readonly type: "string";
                            readonly examples: readonly ["9248"];
                        };
                        readonly serie: {
                            readonly type: "string";
                            readonly examples: readonly ["1"];
                        };
                        readonly key: {
                            readonly type: "string";
                            readonly examples: readonly ["31190307586261000184550010000092481404848162"];
                        };
                        readonly value: {};
                        readonly cfop: {};
                        readonly issued_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2019-03-01 00:00:00"];
                        };
                        readonly uploaded_at: {};
                        readonly to_document: {};
                    };
                };
                readonly tags: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {};
                    };
                };
                readonly products: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Papel adesivo para etiquetas 1"];
                            };
                            readonly quantity: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [3];
                            };
                            readonly unitary_value: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [100];
                            };
                            readonly weight: {};
                        };
                    };
                };
                readonly generated_key: {};
                readonly conciliation: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["paid"];
                        };
                        readonly service_code: {};
                        readonly from_postal_code: {
                            readonly type: "string";
                            readonly examples: readonly ["7110000"];
                        };
                        readonly from_city: {
                            readonly type: "string";
                            readonly examples: readonly ["Guarulhos"];
                        };
                        readonly from_state_abbr: {
                            readonly type: "string";
                            readonly examples: readonly ["SP"];
                        };
                        readonly to_postal_code: {
                            readonly type: "string";
                            readonly examples: readonly ["26210000"];
                        };
                        readonly to_city: {
                            readonly type: "string";
                            readonly examples: readonly ["Nova Iguacu"];
                        };
                        readonly to_state_abbr: {
                            readonly type: "string";
                            readonly examples: readonly ["RJ"];
                        };
                        readonly authorization_code: {
                            readonly type: "string";
                            readonly examples: readonly ["2022032920"];
                        };
                        readonly tracking: {
                            readonly type: "string";
                            readonly examples: readonly ["ME220021P96BR"];
                        };
                        readonly quote: {
                            readonly type: "number";
                            readonly default: 0;
                            readonly examples: readonly [38.13];
                        };
                        readonly price: {
                            readonly type: "number";
                            readonly default: 0;
                            readonly examples: readonly [38.13];
                        };
                        readonly discount: {
                            readonly type: "number";
                            readonly default: 0;
                            readonly examples: readonly [11.15];
                        };
                        readonly value: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [7];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["debit"];
                        };
                        readonly insurance_value: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [50];
                        };
                        readonly weight: {};
                        readonly width: {};
                        readonly height: {};
                        readonly length: {};
                        readonly diameter: {};
                        readonly format: {
                            readonly type: "string";
                            readonly examples: readonly ["box"];
                        };
                        readonly billed_weight: {
                            readonly type: "number";
                            readonly default: 0;
                            readonly examples: readonly [3.5];
                        };
                        readonly receipt: {
                            readonly type: "boolean";
                            readonly default: true;
                            readonly examples: readonly [false];
                        };
                        readonly own_hand: {
                            readonly type: "boolean";
                            readonly default: true;
                            readonly examples: readonly [false];
                        };
                        readonly collect: {
                            readonly type: "boolean";
                            readonly default: true;
                            readonly examples: readonly [false];
                        };
                        readonly distinct_metrics: {
                            readonly type: "boolean";
                            readonly default: true;
                            readonly examples: readonly [true];
                        };
                        readonly paid_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2022-03-29 21:05:40"];
                        };
                        readonly canceled_at: {};
                        readonly created_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2022-03-29 21:00:08"];
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2022-03-29 21:05:40"];
                        };
                        readonly rate: {};
                        readonly user: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly examples: readonly ["779f4d62-c5b4-41e3-b0b0-ae2eb1509825"];
                                };
                                readonly protocol: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [3477];
                                };
                                readonly firstname: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Magno"];
                                };
                                readonly lastname: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Fonseca da Silva"];
                                };
                                readonly email: {
                                    readonly type: "string";
                                    readonly examples: readonly ["magno.silva@melhorenvio.com"];
                                };
                                readonly picture: {};
                                readonly thumbnail: {};
                                readonly document: {
                                    readonly type: "string";
                                    readonly examples: readonly ["00773389016"];
                                };
                                readonly birthdate: {
                                    readonly type: "string";
                                    readonly examples: readonly ["1983-10-14 00:00:00"];
                                };
                                readonly email_confirmed_at: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2021-06-22 12:17:00"];
                                };
                                readonly email_alternative: {};
                                readonly access_at: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2021-09-01 12:31:29"];
                                };
                                readonly created_at: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2021-06-22 12:17:00"];
                                };
                                readonly updated_at: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2021-06-22 12:17:38"];
                                };
                            };
                        };
                        readonly group: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly examples: readonly ["ded4290f-64fc-4de4-b5fa-e82cf9eba60d"];
                                };
                                readonly protocol: {
                                    readonly type: "string";
                                    readonly examples: readonly ["CGP-2022038647"];
                                };
                                readonly total: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [7];
                                };
                                readonly type: {
                                    readonly type: "string";
                                    readonly examples: readonly ["debit"];
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly examples: readonly ["paid"];
                                };
                                readonly paid_at: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2022-03-29 21:05:40"];
                                };
                                readonly canceled_at: {};
                                readonly created_at: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2022-03-29 21:05:40"];
                                };
                                readonly updated_at: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2022-03-29 21:05:40"];
                                };
                            };
                        };
                        readonly agency: {};
                    };
                };
                readonly volumes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [99768];
                            };
                            readonly height: {
                                readonly type: "string";
                                readonly examples: readonly ["10.00"];
                            };
                            readonly width: {
                                readonly type: "string";
                                readonly examples: readonly ["15.00"];
                            };
                            readonly length: {
                                readonly type: "string";
                                readonly examples: readonly ["20.00"];
                            };
                            readonly diameter: {
                                readonly type: "string";
                                readonly examples: readonly ["0.00"];
                            };
                            readonly weight: {
                                readonly type: "string";
                                readonly examples: readonly ["3.50"];
                            };
                            readonly format: {
                                readonly type: "string";
                                readonly examples: readonly ["box"];
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-03-29 20:24:51"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-03-29 20:24:51"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["No query results for model [App\\Order]."];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ListarInformacoesDeUmaTransportadora: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyId: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Id da transportadora";
                };
            };
            readonly required: readonly ["companyId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "integer";
                        readonly default: 0;
                        readonly examples: readonly [2];
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly examples: readonly ["Jadlog"];
                    };
                    readonly picture: {
                        readonly type: "string";
                        readonly examples: readonly ["https://sandbox.melhorenvio.com.br/images/shipping-companies/jadlog.png"];
                    };
                    readonly services: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [3];
                                };
                                readonly name: {
                                    readonly type: "string";
                                    readonly examples: readonly [".Package"];
                                };
                                readonly type: {
                                    readonly type: "string";
                                    readonly examples: readonly ["normal"];
                                };
                                readonly range: {
                                    readonly type: "string";
                                    readonly examples: readonly ["interstate"];
                                };
                                readonly restrictions: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly insurance_value: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly min: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [0];
                                                };
                                                readonly max: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [29900];
                                                };
                                            };
                                        };
                                        readonly formats: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly box: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly weight: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly min: {
                                                                    readonly type: "number";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [0.001];
                                                                };
                                                                readonly max: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [120];
                                                                };
                                                            };
                                                        };
                                                        readonly width: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly min: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [1];
                                                                };
                                                                readonly max: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [105];
                                                                };
                                                            };
                                                        };
                                                        readonly height: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly min: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [1];
                                                                };
                                                                readonly max: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [100];
                                                                };
                                                            };
                                                        };
                                                        readonly length: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly min: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [1];
                                                                };
                                                                readonly max: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [181];
                                                                };
                                                            };
                                                        };
                                                        readonly sum: {
                                                            readonly type: "integer";
                                                            readonly default: 0;
                                                            readonly examples: readonly [386];
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                                readonly requirements: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly examples: readonly ["names"];
                                    };
                                };
                                readonly optionals: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly examples: readonly ["AR"];
                                    };
                                };
                                readonly company: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [2];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Jadlog"];
                                        };
                                        readonly status: {
                                            readonly type: "string";
                                            readonly examples: readonly ["available"];
                                        };
                                        readonly picture: {
                                            readonly type: "string";
                                            readonly examples: readonly ["/images/shipping-companies/jadlog.png"];
                                        };
                                        readonly use_own_contract: {
                                            readonly type: "boolean";
                                            readonly default: true;
                                            readonly examples: readonly [false];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ListarInformacoesDoUsuario: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthenticated."];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ListarItensDoCarrinho: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "application/json";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obritatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly current_page: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["4d9a896c-9057-490d-94ea-abb23565463c"];
                            };
                            readonly protocol: {
                                readonly type: "string";
                                readonly examples: readonly ["ORD-20220397315"];
                            };
                            readonly service_id: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [2];
                            };
                            readonly agency_id: {};
                            readonly contract: {
                                readonly type: "string";
                                readonly examples: readonly ["9912415671"];
                            };
                            readonly service_code: {};
                            readonly quote: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [50.93];
                            };
                            readonly price: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [50.93];
                            };
                            readonly coupon: {};
                            readonly discount: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [10.95];
                            };
                            readonly delivery_min: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [3];
                            };
                            readonly delivery_max: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [4];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["pending"];
                            };
                            readonly reminder: {};
                            readonly insurance_value: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [50];
                            };
                            readonly weight: {};
                            readonly width: {};
                            readonly height: {};
                            readonly length: {};
                            readonly diameter: {};
                            readonly format: {
                                readonly type: "string";
                                readonly examples: readonly ["box"];
                            };
                            readonly billed_weight: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [3.5];
                            };
                            readonly receipt: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [false];
                            };
                            readonly own_hand: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [false];
                            };
                            readonly collect: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [false];
                            };
                            readonly collect_scheduled_at: {};
                            readonly reverse: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [false];
                            };
                            readonly non_commercial: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [false];
                            };
                            readonly authorization_code: {};
                            readonly tracking: {};
                            readonly self_tracking: {};
                            readonly delivery_receipt: {};
                            readonly additional_info: {};
                            readonly cte_key: {};
                            readonly paid_at: {};
                            readonly generated_at: {};
                            readonly posted_at: {};
                            readonly delivered_at: {};
                            readonly canceled_at: {};
                            readonly suspended_at: {};
                            readonly expired_at: {};
                            readonly created_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-03-29 13:17:46"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-03-29 13:17:46"];
                            };
                            readonly parse_pi_at: {};
                            readonly from: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Teste ME"];
                                    };
                                    readonly phone: {
                                        readonly type: "string";
                                        readonly examples: readonly ["5598105050"];
                                    };
                                    readonly email: {
                                        readonly type: "string";
                                        readonly examples: readonly ["melhorenvio@teste.com"];
                                    };
                                    readonly document: {
                                        readonly type: "string";
                                        readonly examples: readonly ["16571478358"];
                                    };
                                    readonly company_document: {
                                        readonly type: "string";
                                        readonly examples: readonly ["04517623000197"];
                                    };
                                    readonly state_register: {
                                        readonly type: "string";
                                        readonly examples: readonly ["563025255115"];
                                    };
                                    readonly postal_code: {
                                        readonly type: "string";
                                        readonly examples: readonly ["7110000"];
                                    };
                                    readonly address: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Rua Teste"];
                                    };
                                    readonly location_number: {
                                        readonly type: "string";
                                        readonly examples: readonly ["100"];
                                    };
                                    readonly complement: {
                                        readonly type: "string";
                                        readonly examples: readonly ["CASA"];
                                    };
                                    readonly district: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Bairro Teste"];
                                    };
                                    readonly city: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Guarulhos"];
                                    };
                                    readonly state_abbr: {
                                        readonly type: "string";
                                        readonly examples: readonly ["SP"];
                                    };
                                    readonly country_id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["BR"];
                                    };
                                    readonly latitude: {};
                                    readonly longitude: {};
                                    readonly note: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Teste ME"];
                                    };
                                };
                            };
                            readonly to: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["ME Teste"];
                                    };
                                    readonly phone: {
                                        readonly type: "string";
                                        readonly examples: readonly ["1999999999"];
                                    };
                                    readonly email: {
                                        readonly type: "string";
                                        readonly examples: readonly ["melhorenvio@teste.com"];
                                    };
                                    readonly document: {
                                        readonly type: "string";
                                        readonly examples: readonly ["73646548010"];
                                    };
                                    readonly company_document: {
                                        readonly type: "string";
                                        readonly examples: readonly ["89794131000100"];
                                    };
                                    readonly state_register: {
                                        readonly type: "string";
                                        readonly examples: readonly ["123456"];
                                    };
                                    readonly postal_code: {
                                        readonly type: "string";
                                        readonly examples: readonly ["26210000"];
                                    };
                                    readonly address: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Avenida Marechal Floriano Peixoto"];
                                    };
                                    readonly location_number: {
                                        readonly type: "string";
                                        readonly examples: readonly ["123"];
                                    };
                                    readonly complement: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Ap 2"];
                                    };
                                    readonly district: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Centro"];
                                    };
                                    readonly city: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Nova Iguacu"];
                                    };
                                    readonly state_abbr: {
                                        readonly type: "string";
                                        readonly examples: readonly ["RJ"];
                                    };
                                    readonly country_id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["BR"];
                                    };
                                    readonly latitude: {};
                                    readonly longitude: {};
                                    readonly note: {
                                        readonly type: "string";
                                        readonly examples: readonly ["ME Teste"];
                                    };
                                };
                            };
                            readonly service: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [2];
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["SEDEX"];
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                        readonly examples: readonly ["available"];
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["express"];
                                    };
                                    readonly range: {
                                        readonly type: "string";
                                        readonly examples: readonly ["interstate"];
                                    };
                                    readonly restrictions: {
                                        readonly type: "string";
                                        readonly examples: readonly ["{\"insurance_value\":{\"min\":0,\"max\":10000},\"formats\":{\"box\":{\"weight\":{\"min\":0.001,\"max\":30},\"width\":{\"min\":11,\"max\":105},\"height\":{\"min\":2,\"max\":105},\"length\":{\"min\":16,\"max\":105},\"sum\":200},\"roll\":{\"weight\":{\"min\":0.001,\"max\":30},\"diameter\":{\"min\":5,\"max\":91},\"length\":{\"min\":18,\"max\":105},\"sum\":200},\"letter\":{\"weight\":{\"min\":0.001,\"max\":0.5},\"width\":{\"min\":11,\"max\":60},\"length\":{\"min\":16,\"max\":60}}}}"];
                                    };
                                    readonly requirements: {
                                        readonly type: "string";
                                        readonly examples: readonly ["[\"names\",\"addresses\"]"];
                                    };
                                    readonly optionals: {
                                        readonly type: "string";
                                        readonly examples: readonly ["[\"AR\",\"MP\",\"VD\"]"];
                                    };
                                    readonly company: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "integer";
                                                readonly default: 0;
                                                readonly examples: readonly [1];
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Correios"];
                                            };
                                            readonly status: {
                                                readonly type: "string";
                                                readonly examples: readonly ["available"];
                                            };
                                            readonly picture: {
                                                readonly type: "string";
                                                readonly examples: readonly ["/images/shipping-companies/correios.png"];
                                            };
                                            readonly use_own_contract: {
                                                readonly type: "boolean";
                                                readonly default: true;
                                                readonly examples: readonly [false];
                                            };
                                        };
                                    };
                                };
                            };
                            readonly agency: {};
                            readonly invoice: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly model: {};
                                    readonly number: {};
                                    readonly serie: {
                                        readonly type: "string";
                                        readonly examples: readonly ["1"];
                                    };
                                    readonly key: {};
                                    readonly value: {};
                                    readonly cfop: {};
                                    readonly issued_at: {};
                                    readonly uploaded_at: {};
                                    readonly to_document: {};
                                };
                            };
                            readonly tags: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {};
                                };
                            };
                            readonly products: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Papel adesivo para etiquetas 1"];
                                        };
                                        readonly quantity: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [3];
                                        };
                                        readonly unitary_value: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [100];
                                        };
                                        readonly weight: {};
                                    };
                                };
                            };
                            readonly generated_key: {};
                            readonly volumes: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [101604];
                                        };
                                        readonly height: {
                                            readonly type: "string";
                                            readonly examples: readonly ["10.00"];
                                        };
                                        readonly width: {
                                            readonly type: "string";
                                            readonly examples: readonly ["15.00"];
                                        };
                                        readonly length: {
                                            readonly type: "string";
                                            readonly examples: readonly ["20.00"];
                                        };
                                        readonly diameter: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0.00"];
                                        };
                                        readonly weight: {
                                            readonly type: "string";
                                            readonly examples: readonly ["3.50"];
                                        };
                                        readonly format: {
                                            readonly type: "string";
                                            readonly examples: readonly ["box"];
                                        };
                                        readonly created_at: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2022-03-29 13:17:46"];
                                        };
                                        readonly updated_at: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2022-03-29 13:17:46"];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly first_page_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://sandbox.melhorenvio.com.br/api/v2/me/cart?page=1"];
                };
                readonly from: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly last_page: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly last_page_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://sandbox.melhorenvio.com.br/api/v2/me/cart?page=1"];
                };
                readonly next_page_url: {};
                readonly path: {
                    readonly type: "string";
                    readonly examples: readonly ["https://sandbox.melhorenvio.com.br/api/v2/me/cart"];
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [10];
                };
                readonly prev_page_url: {};
                readonly to: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [3];
                };
                readonly total: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [3];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthenticated."];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ListarLojasDoUsuario: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "Content-type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Content-type", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly current_page: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["bde0e453-1d10-4245-a447-d376ae24be55"];
                            };
                            readonly protocol: {
                                readonly type: "string";
                                readonly examples: readonly ["COM-2021063464"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Minha Loja teste"];
                            };
                            readonly email: {};
                            readonly website: {};
                            readonly picture: {};
                            readonly thumbnail: {};
                            readonly description: {};
                            readonly company_name: {};
                            readonly document: {};
                            readonly state_register: {};
                            readonly created_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2021-06-22 12:17:38"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2021-06-22 12:17:38"];
                            };
                        };
                    };
                };
                readonly first_page_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://sandbox.melhorenvio.com.br/api/v2/me/companies?page=1"];
                };
                readonly from: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly last_page: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly last_page_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://sandbox.melhorenvio.com.br/api/v2/me/companies?page=1"];
                };
                readonly next_page_url: {};
                readonly path: {
                    readonly type: "string";
                    readonly examples: readonly ["https://sandbox.melhorenvio.com.br/api/v2/me/companies"];
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [10];
                };
                readonly prev_page_url: {};
                readonly to: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly total: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthenticated."];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ListarServicos: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "integer";
                        readonly default: 0;
                        readonly examples: readonly [1];
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly examples: readonly ["PAC"];
                    };
                    readonly type: {
                        readonly type: "string";
                        readonly examples: readonly ["normal"];
                    };
                    readonly range: {
                        readonly type: "string";
                        readonly examples: readonly ["interstate"];
                    };
                    readonly restrictions: {
                        readonly type: "object";
                        readonly properties: {
                            readonly insurance_value: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly min: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [0];
                                    };
                                    readonly max: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [3000];
                                    };
                                };
                            };
                            readonly formats: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly box: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly weight: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly min: {
                                                        readonly type: "number";
                                                        readonly default: 0;
                                                        readonly examples: readonly [0.001];
                                                    };
                                                    readonly max: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [30];
                                                    };
                                                };
                                            };
                                            readonly width: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly min: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [11];
                                                    };
                                                    readonly max: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [105];
                                                    };
                                                };
                                            };
                                            readonly height: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly min: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [2];
                                                    };
                                                    readonly max: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [105];
                                                    };
                                                };
                                            };
                                            readonly length: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly min: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [16];
                                                    };
                                                    readonly max: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [105];
                                                    };
                                                };
                                            };
                                            readonly sum: {
                                                readonly type: "integer";
                                                readonly default: 0;
                                                readonly examples: readonly [200];
                                            };
                                        };
                                    };
                                    readonly roll: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly weight: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly min: {
                                                        readonly type: "number";
                                                        readonly default: 0;
                                                        readonly examples: readonly [0.001];
                                                    };
                                                    readonly max: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [30];
                                                    };
                                                };
                                            };
                                            readonly diameter: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly min: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [5];
                                                    };
                                                    readonly max: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [91];
                                                    };
                                                };
                                            };
                                            readonly length: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly min: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [18];
                                                    };
                                                    readonly max: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [105];
                                                    };
                                                };
                                            };
                                            readonly sum: {
                                                readonly type: "integer";
                                                readonly default: 0;
                                                readonly examples: readonly [200];
                                            };
                                        };
                                    };
                                    readonly letter: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly weight: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly min: {
                                                        readonly type: "number";
                                                        readonly default: 0;
                                                        readonly examples: readonly [0.001];
                                                    };
                                                    readonly max: {
                                                        readonly type: "number";
                                                        readonly default: 0;
                                                        readonly examples: readonly [0.5];
                                                    };
                                                };
                                            };
                                            readonly width: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly min: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [11];
                                                    };
                                                    readonly max: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [60];
                                                    };
                                                };
                                            };
                                            readonly length: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly min: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [16];
                                                    };
                                                    readonly max: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [60];
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly requirements: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly examples: readonly ["names"];
                        };
                    };
                    readonly optionals: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly examples: readonly ["AR"];
                        };
                    };
                    readonly company: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [1];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Correios"];
                            };
                            readonly picture: {
                                readonly type: "string";
                                readonly examples: readonly ["https://sandbox.melhorenvio.com.br/images/shipping-companies/correios.png"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ListarTelefonesDeUmaLoja: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly storeId: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "ID da Loja";
                };
            };
            readonly required: readonly ["storeId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Content-Type", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly current_page: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [42304];
                            };
                            readonly label: {};
                            readonly phone: {
                                readonly type: "string";
                                readonly examples: readonly ["5340302030"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["mobile"];
                            };
                            readonly country_id: {
                                readonly type: "string";
                                readonly examples: readonly ["BR"];
                            };
                            readonly confirmed_at: {};
                            readonly created_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-03-30 20:32:31"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-03-30 20:32:31"];
                            };
                        };
                    };
                };
                readonly first_page_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://sandbox.melhorenvio.com.br/api/v2/me/companies/bde0e453-1d10-4245-a447-d376ae24be55/phones?page=1"];
                };
                readonly from: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly last_page: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly last_page_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://sandbox.melhorenvio.com.br/api/v2/me/companies/bde0e453-1d10-4245-a447-d376ae24be55/phones?page=1"];
                };
                readonly next_page_url: {};
                readonly path: {
                    readonly type: "string";
                    readonly examples: readonly ["https://sandbox.melhorenvio.com.br/api/v2/me/companies/bde0e453-1d10-4245-a447-d376ae24be55/phones"];
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [10];
                };
                readonly prev_page_url: {};
                readonly to: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [2];
                };
                readonly total: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [2];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["No query results for model [App\\Company]."];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ListarTransportadoras: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "integer";
                        readonly default: 0;
                        readonly examples: readonly [1];
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly examples: readonly ["Correios"];
                    };
                    readonly picture: {
                        readonly type: "string";
                        readonly examples: readonly ["https://sandbox.melhorenvio.com.br/images/shipping-companies/correios.png"];
                    };
                    readonly services: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [1];
                                };
                                readonly name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["PAC"];
                                };
                                readonly type: {
                                    readonly type: "string";
                                    readonly examples: readonly ["normal"];
                                };
                                readonly range: {
                                    readonly type: "string";
                                    readonly examples: readonly ["interstate"];
                                };
                                readonly restrictions: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly insurance_value: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly min: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [0];
                                                };
                                                readonly max: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [3000];
                                                };
                                            };
                                        };
                                        readonly formats: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly box: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly weight: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly min: {
                                                                    readonly type: "number";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [0.001];
                                                                };
                                                                readonly max: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [30];
                                                                };
                                                            };
                                                        };
                                                        readonly width: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly min: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [11];
                                                                };
                                                                readonly max: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [105];
                                                                };
                                                            };
                                                        };
                                                        readonly height: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly min: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [2];
                                                                };
                                                                readonly max: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [105];
                                                                };
                                                            };
                                                        };
                                                        readonly length: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly min: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [16];
                                                                };
                                                                readonly max: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [105];
                                                                };
                                                            };
                                                        };
                                                        readonly sum: {
                                                            readonly type: "integer";
                                                            readonly default: 0;
                                                            readonly examples: readonly [200];
                                                        };
                                                    };
                                                };
                                                readonly roll: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly weight: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly min: {
                                                                    readonly type: "number";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [0.001];
                                                                };
                                                                readonly max: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [30];
                                                                };
                                                            };
                                                        };
                                                        readonly diameter: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly min: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [5];
                                                                };
                                                                readonly max: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [91];
                                                                };
                                                            };
                                                        };
                                                        readonly length: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly min: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [18];
                                                                };
                                                                readonly max: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [105];
                                                                };
                                                            };
                                                        };
                                                        readonly sum: {
                                                            readonly type: "integer";
                                                            readonly default: 0;
                                                            readonly examples: readonly [200];
                                                        };
                                                    };
                                                };
                                                readonly letter: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly weight: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly min: {
                                                                    readonly type: "number";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [0.001];
                                                                };
                                                                readonly max: {
                                                                    readonly type: "number";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [0.5];
                                                                };
                                                            };
                                                        };
                                                        readonly width: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly min: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [11];
                                                                };
                                                                readonly max: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [60];
                                                                };
                                                            };
                                                        };
                                                        readonly length: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly min: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [16];
                                                                };
                                                                readonly max: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [60];
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                                readonly requirements: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly examples: readonly ["names"];
                                    };
                                };
                                readonly optionals: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly examples: readonly ["AR"];
                                    };
                                };
                                readonly company: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [1];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Correios"];
                                        };
                                        readonly status: {
                                            readonly type: "string";
                                            readonly examples: readonly ["available"];
                                        };
                                        readonly picture: {
                                            readonly type: "string";
                                            readonly examples: readonly ["/images/shipping-companies/correios.png"];
                                        };
                                        readonly use_own_contract: {
                                            readonly type: "boolean";
                                            readonly default: true;
                                            readonly examples: readonly [false];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const PesquisarEtiqueta: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly q: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Informar o código de autorização, protocolo, código de rastreio, ID do envio ou documento.";
                };
                readonly status: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Informar o status.  {pending|released|posted|delivered|canceled|undelivered}";
                };
            };
            readonly required: readonly ["q"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "Content-type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Content-type", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly examples: readonly ["04c13ada-68e6-41df-a2c6-ff5f3e7560f8"];
                    };
                    readonly protocol: {
                        readonly type: "string";
                        readonly examples: readonly ["ORD-20220395512"];
                    };
                    readonly service_id: {
                        readonly type: "integer";
                        readonly default: 0;
                        readonly examples: readonly [3];
                    };
                    readonly contract: {};
                    readonly service_code: {};
                    readonly quote: {
                        readonly type: "number";
                        readonly default: 0;
                        readonly examples: readonly [25.35];
                    };
                    readonly price: {
                        readonly type: "number";
                        readonly default: 0;
                        readonly examples: readonly [25.35];
                    };
                    readonly coupon: {};
                    readonly discount: {
                        readonly type: "number";
                        readonly default: 0;
                        readonly examples: readonly [5.71];
                    };
                    readonly delivery_min: {
                        readonly type: "integer";
                        readonly default: 0;
                        readonly examples: readonly [5];
                    };
                    readonly delivery_max: {
                        readonly type: "integer";
                        readonly default: 0;
                        readonly examples: readonly [6];
                    };
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["released"];
                    };
                    readonly reminder: {};
                    readonly insurance_value: {
                        readonly type: "integer";
                        readonly default: 0;
                        readonly examples: readonly [50];
                    };
                    readonly weight: {};
                    readonly width: {};
                    readonly height: {};
                    readonly length: {};
                    readonly diameter: {};
                    readonly format: {
                        readonly type: "string";
                        readonly examples: readonly ["box"];
                    };
                    readonly billed_weight: {
                        readonly type: "number";
                        readonly default: 0;
                        readonly examples: readonly [3.5];
                    };
                    readonly receipt: {
                        readonly type: "boolean";
                        readonly default: true;
                        readonly examples: readonly [false];
                    };
                    readonly own_hand: {
                        readonly type: "boolean";
                        readonly default: true;
                        readonly examples: readonly [false];
                    };
                    readonly collect: {
                        readonly type: "boolean";
                        readonly default: true;
                        readonly examples: readonly [false];
                    };
                    readonly collect_scheduled_at: {};
                    readonly reverse: {
                        readonly type: "boolean";
                        readonly default: true;
                        readonly examples: readonly [false];
                    };
                    readonly non_commercial: {
                        readonly type: "boolean";
                        readonly default: true;
                        readonly examples: readonly [false];
                    };
                    readonly authorization_code: {
                        readonly type: "string";
                        readonly examples: readonly ["2022032921"];
                    };
                    readonly tracking: {
                        readonly type: "string";
                        readonly examples: readonly ["ME220021P41BR"];
                    };
                    readonly self_tracking: {
                        readonly type: "string";
                        readonly examples: readonly ["ME220021P41BR"];
                    };
                    readonly delivery_receipt: {};
                    readonly additional_info: {};
                    readonly cte_key: {};
                    readonly paid_at: {
                        readonly type: "string";
                        readonly examples: readonly ["2022-03-29 21:17:26"];
                    };
                    readonly generated_at: {
                        readonly type: "string";
                        readonly examples: readonly ["2022-03-29 21:38:30"];
                    };
                    readonly posted_at: {};
                    readonly delivered_at: {};
                    readonly canceled_at: {};
                    readonly suspended_at: {};
                    readonly expired_at: {};
                    readonly created_at: {
                        readonly type: "string";
                        readonly examples: readonly ["2022-03-29 20:24:17"];
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly examples: readonly ["2022-03-29 21:38:30"];
                    };
                    readonly details: {
                        readonly type: "object";
                        readonly properties: {
                            readonly balance: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly gateway: {
                                readonly type: "string";
                                readonly examples: readonly ["25.35"];
                            };
                            readonly discount: {
                                readonly type: "string";
                                readonly examples: readonly ["0.00"];
                            };
                            readonly subtotal: {
                                readonly type: "string";
                                readonly examples: readonly ["25.35"];
                            };
                            readonly total: {
                                readonly type: "string";
                                readonly examples: readonly ["25.35"];
                            };
                        };
                    };
                    readonly receipt_code: {};
                    readonly from: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Teste ME"];
                            };
                            readonly phone: {
                                readonly type: "string";
                                readonly examples: readonly ["5598105050"];
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly examples: readonly ["melhorenvio@teste.com"];
                            };
                            readonly document: {
                                readonly type: "string";
                                readonly examples: readonly ["16571478358"];
                            };
                            readonly company_document: {
                                readonly type: "string";
                                readonly examples: readonly ["04517623000197"];
                            };
                            readonly state_register: {
                                readonly type: "string";
                                readonly examples: readonly ["563025255115"];
                            };
                            readonly postal_code: {
                                readonly type: "string";
                                readonly examples: readonly ["7110000"];
                            };
                            readonly address: {
                                readonly type: "string";
                                readonly examples: readonly ["Rua Teste"];
                            };
                            readonly location_number: {
                                readonly type: "string";
                                readonly examples: readonly ["100"];
                            };
                            readonly complement: {
                                readonly type: "string";
                                readonly examples: readonly ["CASA"];
                            };
                            readonly district: {
                                readonly type: "string";
                                readonly examples: readonly ["Bairro Teste"];
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly examples: readonly ["Guarulhos"];
                            };
                            readonly state_abbr: {
                                readonly type: "string";
                                readonly examples: readonly ["SP"];
                            };
                            readonly country_id: {
                                readonly type: "string";
                                readonly examples: readonly ["BR"];
                            };
                            readonly latitude: {};
                            readonly longitude: {};
                            readonly note: {
                                readonly type: "string";
                                readonly examples: readonly ["observação"];
                            };
                        };
                    };
                    readonly to: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Melhor Envio Teste"];
                            };
                            readonly phone: {
                                readonly type: "string";
                                readonly examples: readonly ["1999999999"];
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly examples: readonly ["melhorenvio@teste.com"];
                            };
                            readonly document: {
                                readonly type: "string";
                                readonly examples: readonly ["73646548010"];
                            };
                            readonly company_document: {
                                readonly type: "string";
                                readonly examples: readonly ["89794131000100"];
                            };
                            readonly state_register: {
                                readonly type: "string";
                                readonly examples: readonly ["123456"];
                            };
                            readonly postal_code: {
                                readonly type: "string";
                                readonly examples: readonly ["26210000"];
                            };
                            readonly address: {
                                readonly type: "string";
                                readonly examples: readonly ["Avenida Marechal Floriano Peixoto"];
                            };
                            readonly location_number: {
                                readonly type: "string";
                                readonly examples: readonly ["123"];
                            };
                            readonly complement: {
                                readonly type: "string";
                                readonly examples: readonly ["Ap 2"];
                            };
                            readonly district: {
                                readonly type: "string";
                                readonly examples: readonly ["Centro"];
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly examples: readonly ["Nova Iguacu"];
                            };
                            readonly state_abbr: {
                                readonly type: "string";
                                readonly examples: readonly ["RJ"];
                            };
                            readonly country_id: {
                                readonly type: "string";
                                readonly examples: readonly ["BR"];
                            };
                            readonly latitude: {};
                            readonly longitude: {};
                            readonly note: {
                                readonly type: "string";
                                readonly examples: readonly ["observação"];
                            };
                        };
                    };
                    readonly service: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [3];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly [".Package"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["normal"];
                            };
                            readonly range: {
                                readonly type: "string";
                                readonly examples: readonly ["interstate"];
                            };
                            readonly company: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [2];
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Jadlog"];
                                    };
                                    readonly picture: {
                                        readonly type: "string";
                                        readonly examples: readonly ["/images/shipping-companies/jadlog.png"];
                                    };
                                };
                            };
                        };
                    };
                    readonly agency: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [24];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["CO SANTO ANDRE 01"];
                            };
                            readonly initials: {
                                readonly type: "string";
                                readonly examples: readonly ["CO-QSE-01"];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly examples: readonly ["1008367"];
                            };
                            readonly company_name: {
                                readonly type: "string";
                                readonly examples: readonly ["ABC SPEEDY WAY TURISMO E TRANSPORTES LTDA"];
                            };
                            readonly address: {};
                            readonly phone: {};
                            readonly contact: {};
                        };
                    };
                    readonly invoice: {
                        readonly type: "object";
                        readonly properties: {
                            readonly model: {
                                readonly type: "string";
                                readonly examples: readonly ["55"];
                            };
                            readonly number: {
                                readonly type: "string";
                                readonly examples: readonly ["9248"];
                            };
                            readonly serie: {
                                readonly type: "string";
                                readonly examples: readonly ["1"];
                            };
                            readonly key: {
                                readonly type: "string";
                                readonly examples: readonly ["31190307586261000184550010000092481404848162"];
                            };
                            readonly value: {};
                            readonly cfop: {};
                            readonly issued_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2019-03-01 00:00:00"];
                            };
                            readonly uploaded_at: {};
                            readonly to_document: {};
                        };
                    };
                    readonly tags: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {};
                        };
                    };
                    readonly products: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Papel adesivo para etiquetas 1"];
                                };
                                readonly quantity: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [3];
                                };
                                readonly unitary_value: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [100];
                                };
                                readonly weight: {};
                            };
                        };
                    };
                    readonly generated_key: {};
                    readonly conciliation: {};
                    readonly volumes: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [99763];
                                };
                                readonly height: {
                                    readonly type: "string";
                                    readonly examples: readonly ["10.00"];
                                };
                                readonly width: {
                                    readonly type: "string";
                                    readonly examples: readonly ["15.00"];
                                };
                                readonly length: {
                                    readonly type: "string";
                                    readonly examples: readonly ["20.00"];
                                };
                                readonly diameter: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0.00"];
                                };
                                readonly weight: {
                                    readonly type: "string";
                                    readonly examples: readonly ["3.50"];
                                };
                                readonly format: {
                                    readonly type: "string";
                                    readonly examples: readonly ["box"];
                                };
                                readonly created_at: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2022-03-29 20:24:17"];
                                };
                                readonly updated_at: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2022-03-29 20:24:17"];
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Not Found"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const PreVisualizacaoDeEtiquetas: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["orders"];
        readonly properties: {
            readonly orders: {
                readonly type: "array";
                readonly description: "Pedidos";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Content-Type", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://sandbox.melhorenvio.com.br/pre-impressao/Xvi2N2ImijM6"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Não é possível imprimir etiquetas com o pagamento ainda não processado. Favor aguarde."];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const RastreioDeEnvios: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["orders"];
        readonly properties: {
            readonly orders: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "Content-type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Aplicação (email para contato técnico)  É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Content-type", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly "164ad792-66db-4ea2-b234-75e632465b53": {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["164ad792-66db-4ea2-b234-75e632465b53"];
                        };
                        readonly protocol: {
                            readonly type: "string";
                            readonly examples: readonly ["ORD-202304125603"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["posted"];
                        };
                        readonly tracking: {
                            readonly type: "string";
                            readonly examples: readonly ["ME23002OWZ7BR"];
                        };
                        readonly melhorenvio_tracking: {
                            readonly type: "string";
                            readonly examples: readonly ["ME23002OWZ7BR"];
                        };
                        readonly created_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2023-04-14 20:32:15"];
                        };
                        readonly paid_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2023-04-17 13:36:53"];
                        };
                        readonly generated_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2023-04-17 13:38:20"];
                        };
                        readonly posted_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2023-04-17 13:55:05"];
                        };
                        readonly delivered_at: {};
                        readonly canceled_at: {};
                        readonly expired_at: {};
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["The given data was invalid."];
                };
                readonly errors: {
                    readonly type: "object";
                    readonly properties: {
                        readonly "orders.0": {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["O campo orders.0 deve ter pelo menos 36 caracteres."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const RemocaoDeItensDoCarrinho: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: "id";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "ID do Pedido";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "application/json";
                };
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obritatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Authorization", "Accept", "Content-Type", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["No query results for model [App\\Order]."];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const SaldoDoUsuario: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly balance: {
                    readonly type: "number";
                    readonly default: 0;
                    readonly examples: readonly [1624.9];
                };
                readonly reserved: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly debts: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [87];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthenticated."];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const SolicitacaoDoToken: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["grant_type", "client_id", "client_secret", "redirect_uri", "code", "refresh_token"];
        readonly properties: {
            readonly grant_type: {
                readonly type: "string";
                readonly description: "Tipo do modo de solicitação de token";
            };
            readonly client_id: {
                readonly type: "integer";
                readonly description: "Obtido após a criação do aplicativo no painel do Melhor Envio";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly client_secret: {
                readonly type: "string";
                readonly description: "O mesmo do aplicativo gerado no painel Melhor Envio";
            };
            readonly redirect_uri: {
                readonly type: "string";
                readonly description: "Deve ser estática e conforme configurada no app dentro do painel Melhor Envio";
            };
            readonly code: {
                readonly type: "string";
                readonly description: "Resposta da autenticação";
            };
            readonly refresh_token: {
                readonly type: "string";
                readonly description: "Obtido da resposta junto à solicitação de token";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Content-Type", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly token_type: {
                    readonly type: "string";
                    readonly examples: readonly ["Bearer"];
                };
                readonly expires_in: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [2592000];
                };
                readonly access_token: {
                    readonly type: "string";
                    readonly examples: readonly ["eyJ0eXAiOiJKV...9FNA"];
                };
                readonly refresh_token: {
                    readonly type: "string";
                    readonly examples: readonly ["def502004257...b5ff"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["invalid_client"];
                };
                readonly error_description: {
                    readonly type: "string";
                    readonly examples: readonly ["Client authentication failed"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Client authentication failed"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const VerificarSeEtiquetaPodeSerCancelada: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["orders"];
        readonly properties: {
            readonly orders: {
                readonly type: "array";
                readonly description: "Id do pedido correspondente a etiqueta de envio";
                readonly default: readonly ["id"];
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Content-Type", "Accept", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly "04c13ada-68e6-41df-a2c6-ff5f3e7560f8": {
                    readonly type: "object";
                    readonly properties: {
                        readonly cancellable: {
                            readonly type: "boolean";
                            readonly default: true;
                            readonly examples: readonly [true];
                        };
                        readonly time: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [0];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["The given data was invalid."];
                };
                readonly errors: {
                    readonly type: "object";
                    readonly properties: {
                        readonly "orders.0": {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["O campo orders.0 selecionado é inválido."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const VisualizarLoja: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly storeId: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "ID da loja";
                };
            };
            readonly required: readonly ["storeId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly default: "application/json";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Bearer token";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "User-Agent": {
                    readonly type: "string";
                    readonly default: "Aplicação (email para contato técnico)";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "É obrigatório que seja adicionado o cabeçalho HTTP User-Agent com o nome da sua aplicação junto a um email de contato/suporte.";
                };
            };
            readonly required: readonly ["Accept", "Authorization", "User-Agent"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["781f86be-c3be-47e7-9bef-70b8675a55c3"];
                };
                readonly protocol: {
                    readonly type: "string";
                    readonly examples: readonly ["COM-2022035242"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Melhor Loja"];
                };
                readonly email: {
                    readonly type: "string";
                    readonly examples: readonly ["contato@melhorloja.me"];
                };
                readonly website: {};
                readonly picture: {};
                readonly thumbnail: {};
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["Descrição da loja"];
                };
                readonly company_name: {
                    readonly type: "string";
                    readonly examples: readonly ["Nome da Loja"];
                };
                readonly document: {
                    readonly type: "string";
                    readonly examples: readonly ["89157108000104"];
                };
                readonly state_register: {
                    readonly type: "string";
                    readonly examples: readonly ["476210979481"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-03-30 16:53:56"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-03-30 16:53:56"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["No query results for model [App\\Company]."];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
export { CadastrarEnderecoDeUmaLoja, CadastrarLoja, CadastrarTelefonesDeUmaLoja, CalculoDeFretesPorProdutos, CancelamentoDeEtiquetas, CompraDeFretes1, ExibirInformacoesDeItemDoCarrinho, GeracaoDeEtiquetas, ImpressaoDace, ImpressaoDeEtiquetas, ImpressaoDeEtiquetasEmArquivo, InserirFretesNoCarrinho, InserirLogisticaReversaNoCarrinho, InserirSaldoNaCarteiraDoUsuario, ListarAgenciasEOpcoesDeFiltro, ListarEnderecosDeUmaLoja, ListarEnderecosDoUsuario, ListarEtiquetas, ListarInformacoesDeAplicativo, ListarInformacoesDeUmServico, ListarInformacoesDeUmaAgencia, ListarInformacoesDeUmaEtiqueta, ListarInformacoesDeUmaTransportadora, ListarInformacoesDoUsuario, ListarItensDoCarrinho, ListarLojasDoUsuario, ListarServicos, ListarTelefonesDeUmaLoja, ListarTransportadoras, PesquisarEtiqueta, PreVisualizacaoDeEtiquetas, RastreioDeEnvios, RemocaoDeItensDoCarrinho, SaldoDoUsuario, SolicitacaoDoToken, VerificarSeEtiquetaPodeSerCancelada, VisualizarLoja };
