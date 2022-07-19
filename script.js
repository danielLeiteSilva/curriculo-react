db.people.insertOne({
    nome: 'Daniel Leite da Silva',
    personal: {
        nascimento: '09/12/1994',
        nacionalidade: 'Brasileiro',
        estado_civil: 'Solteiro'
    },
    contato: {
        telefone: '(11) 5933-6620',
        celular: '(11) 94366-6624',
        email: 'daniel199257@gmail.com',
        endereco: {
            rua: 'Universal',
            numero: '333',
            bairro: 'cantinho do céu',
            cidade: 'São Paulo',
            estado: 'São Paulo'
        }
    },
    redes: {

    },
    perfil: {
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in lorem tortor. Etiam luctus leo non sapien tristique aliquet. Nulla vel elementum massa, vel hendrerit nunc. Nam elementum quam mauris, sit amet dictum ligula dignissim a. Praesent finibus, lectus et dignissim auctor, ex est ornare augue, vel tristique ex metus non nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id eleifend ante, nec pretium erat. Integer dictum dignissim enim, ut fringilla dolor varius ac.',
        tecnologia: [{
                tech: 'java',
                proficiente: 60
            },
            {
                tech: 'python',
                proficiente: 70
            },
            {
                tech: 'javascript',
                proficiente: 90
            },
        ],
    },
    experiencia: [
        {
            ano: 2021,
            cargo: 'Desenvolvedor Junior',
            empresa: 'Indra Company',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu quam ex. Duis efficitur accumsan diam. Nulla pellentesque pulvinar risus rhoncus mattis. Pellentesque a augue leo. Phasellus vel nunc blandit, aliquet ipsum sit amet, molestie dui.'
        },
        {
            ano: 2019,
            cargo: 'Trainee em Sistemas na indra',
            empresa: 'Indra Company',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu quam ex. Duis efficitur accumsan diam. Nulla pellentesque pulvinar risus rhoncus mattis. Pellentesque a augue leo. Phasellus vel nunc blandit, aliquet ipsum sit amet, molestie dui.'
        },
        {
            ano: 2015,
            cargo: 'Analista de Frota',
            empresa: 'ATC Telecomunicações',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu quam ex. Duis efficitur accumsan diam. Nulla pellentesque pulvinar risus rhoncus mattis. Pellentesque a augue leo. Phasellus vel nunc blandit, aliquet ipsum sit amet, molestie dui.'
        }
    ],
    formacao: [
        {
            ano: 2022,
            cargo: 'Bot Chatbot & Inteligência Artificial',
            empresa: 'Impacta',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            ano: 2021,
            cargo: 'Análise e Desenvolvimento de Sistemas',
            empresa: 'Senac',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            ano: 2015,
            cargo: 'Administração',
            empresa: 'ETEC',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            ano: 2014,
            cargo: 'Manutenção e suporte em informática',
            empresa: 'Sumaré',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ]
})