import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  snackbarLogin: false,
  snackbarEnvia: false,
  dialogLogin: true,

  username: "",
  password: "",
  area: "",
  avaliador: "",

  listaFuncionarios: [],
  nomeFuncs: [],
  avaliacao: [
    {li1: "", li2: "", li3: "", li4: "", li5: ""},
    {ne1: "", ne2: "", ne3: "", ne4: "", ne5: ""},
    {vs1: "", vs2: "", vs3: "", vs4: "", vs5: ""},
    {re1: "", re2: "", re3: "", re4: "", re5: ""},
    {ic1: "", ic2: "", ic3: "", ic4: "", ic5: ""},
    {te1: "", te2: "", te3: "", te4: "", te5: ""},
  ],

  selecionadoFuncs: {
    "nome": "",
    "email": "",
    "senha": "",
    "area": "",
    "nasc": "",
    "user": "",
    "pot": "",
    "notas": [
      { "Joao" : [
          {
            "categoria": "li",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "li_mg" : ""
          },
          {
            "categoria": "ne",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ne_mg" : ""
          },
          {
            "categoria": "vs",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "vs_mg" : ""
          },
          {
            "categoria": "re",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "re_mg" : ""
          },
          {
            "categoria": "ic",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ic_mg" : ""
          },
          {
            "categoria": "te",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "te_mg" : ""
          }
        ]
      },
      { "Maria" : [
          {
            "categoria": "li",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "li_mg" : ""
          },
          {
            "categoria": "ne",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "" ,
            "ne_mg" : ""
          },
          {
            "categoria": "vs",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "vs_mg" : ""
          },
          {
            "categoria": "re",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "re_mg" : ""
          },
          {
            "categoria": "ic",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ic_mg" : ""
          },
          {
            "categoria": "te",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "te_mg" : ""
          }
        ]
      },
      { "Lucas" : [
          {
            "categoria": "li",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "li_mg" : ""
          },
          {
            "categoria": "ne",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ne_mg" : ""
          },
          {
            "categoria": "vs",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "vs_mg" : ""
          },
          {
            "categoria": "re",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "re_mg" : ""
          },
          {
            "categoria": "ic",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ic_mg" : ""
          },
          {
            "categoria": "te",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "te_mg" : ""
          }
        ]
      },
      { "Fatima" : [
          {
            "categoria": "li",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "li_mg" : ""
          },
          {
            "categoria": "ne",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ne_mg" : ""
          },
          {
            "categoria": "vs",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "vs_mg" : ""
          },
          {
            "categoria": "re",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "re_mg" : ""
          },
          {
            "categoria": "ic",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ic_mg" : ""
          },
          {
            "categoria": "te",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "te_mg" : ""
          }
        ]
      }
    ]
  },
  selecionadoAvaliacao: {
    "nome": "",
    "email": "",
    "senha": "",
    "area": "",
    "nasc": "",
    "user": "",
    "pot": "",
    "notas": [
      { "Joao" : [
          {
            "categoria": "li",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "li_mg" : ""
          },
          {
            "categoria": "ne",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ne_mg" : ""
          },
          {
            "categoria": "vs",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "vs_mg" : ""
          },
          {
            "categoria": "re",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "re_mg" : ""
          },
          {
            "categoria": "ic",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ic_mg" : ""
          },
          {
            "categoria": "te",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "te_mg" : ""
          }
        ]
      },
      { "Maria" : [
          {
            "categoria": "li",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "li_mg" : ""
          },
          {
            "categoria": "ne",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "" ,
            "ne_mg" : ""
          },
          {
            "categoria": "vs",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "vs_mg" : ""
          },
          {
            "categoria": "re",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "re_mg" : ""
          },
          {
            "categoria": "ic",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ic_mg" : ""
          },
          {
            "categoria": "te",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "te_mg" : ""
          }
        ]
      },
      { "Lucas" : [
          {
            "categoria": "li",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "li_mg" : ""
          },
          {
            "categoria": "ne",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ne_mg" : ""
          },
          {
            "categoria": "vs",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "vs_mg" : ""
          },
          {
            "categoria": "re",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "re_mg" : ""
          },
          {
            "categoria": "ic",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ic_mg" : ""
          },
          {
            "categoria": "te",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "te_mg" : ""
          }
        ]
      },
      { "Fatima" : [
          {
            "categoria": "li",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "li_mg" : ""
          },
          {
            "categoria": "ne",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ne_mg" : ""
          },
          {
            "categoria": "vs",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "vs_mg" : ""
          },
          {
            "categoria": "re",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "re_mg" : ""
          },
          {
            "categoria": "ic",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ic_mg" : ""
          },
          {
            "categoria": "te",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "te_mg" : ""
          }
        ]
      }
    ]
  },
  selecionadoGraficos: {
    "nome": "",
    "email": "",
    "senha": "",
    "area": "",
    "nasc": "",
    "user": "",
    "pot": "",
    "notas": [
      { "Joao" : [
          {
            "categoria": "li",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "li_mg" : ""
          },
          {
            "categoria": "ne",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ne_mg" : ""
          },
          {
            "categoria": "vs",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "vs_mg" : ""
          },
          {
            "categoria": "re",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "re_mg" : ""
          },
          {
            "categoria": "ic",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ic_mg" : ""
          },
          {
            "categoria": "te",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "te_mg" : ""
          }
        ]
      },
      { "Maria" : [
          {
            "categoria": "li",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "li_mg" : ""
          },
          {
            "categoria": "ne",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "" ,
            "ne_mg" : ""
          },
          {
            "categoria": "vs",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "vs_mg" : ""
          },
          {
            "categoria": "re",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "re_mg" : ""
          },
          {
            "categoria": "ic",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ic_mg" : ""
          },
          {
            "categoria": "te",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "te_mg" : ""
          }
        ]
      },
      { "Lucas" : [
          {
            "categoria": "li",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "li_mg" : ""
          },
          {
            "categoria": "ne",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ne_mg" : ""
          },
          {
            "categoria": "vs",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "vs_mg" : ""
          },
          {
            "categoria": "re",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "re_mg" : ""
          },
          {
            "categoria": "ic",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ic_mg" : ""
          },
          {
            "categoria": "te",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "te_mg" : ""
          }
        ]
      },
      { "Fatima" : [
          {
            "categoria": "li",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "li_mg" : ""
          },
          {
            "categoria": "ne",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ne_mg" : ""
          },
          {
            "categoria": "vs",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "vs_mg" : ""
          },
          {
            "categoria": "re",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "re_mg" : ""
          },
          {
            "categoria": "ic",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ic_mg" : ""
          },
          {
            "categoria": "te",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "te_mg" : ""
          }
        ]
      }
    ]
  },
  selecionadoNumericos: {
    "nome": "",
    "email": "",
    "senha": "",
    "area": "",
    "nasc": "",
    "user": "",
    "pot": "",
    "notas": [
      { "Joao" : [
          {
            "categoria": "li",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "li_mg" : ""
          },
          {
            "categoria": "ne",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ne_mg" : ""
          },
          {
            "categoria": "vs",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "vs_mg" : ""
          },
          {
            "categoria": "re",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "re_mg" : ""
          },
          {
            "categoria": "ic",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ic_mg" : ""
          },
          {
            "categoria": "te",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "te_mg" : ""
          }
        ]
      },
      { "Maria" : [
          {
            "categoria": "li",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "li_mg" : ""
          },
          {
            "categoria": "ne",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "" ,
            "ne_mg" : ""
          },
          {
            "categoria": "vs",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "vs_mg" : ""
          },
          {
            "categoria": "re",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "re_mg" : ""
          },
          {
            "categoria": "ic",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ic_mg" : ""
          },
          {
            "categoria": "te",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "te_mg" : ""
          }
        ]
      },
      { "Lucas" : [
          {
            "categoria": "li",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "li_mg" : ""
          },
          {
            "categoria": "ne",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ne_mg" : ""
          },
          {
            "categoria": "vs",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "vs_mg" : ""
          },
          {
            "categoria": "re",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "re_mg" : ""
          },
          {
            "categoria": "ic",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ic_mg" : ""
          },
          {
            "categoria": "te",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "te_mg" : ""
          }
        ]
      },
      { "Fatima" : [
          {
            "categoria": "li",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "li_mg" : ""
          },
          {
            "categoria": "ne",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ne_mg" : ""
          },
          {
            "categoria": "vs",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "vs_mg" : ""
          },
          {
            "categoria": "re",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "re_mg" : ""
          },
          {
            "categoria": "ic",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "ic_mg" : ""
          },
          {
            "categoria": "te",
            "p1" : "",
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "p5" : "",
            "te_mg" : ""
          }
        ]
      }
    ]
  }
}

const getters = {
  snackbarLogin: state => state.snackbarLogin,
  snackbarEnvia: state => state.snackbarEnvia,
  dialogLogin: state => state.dialogLogin,

  username: state => state.username,
  password: state => state.password,
  area: state => state.area,
  avaliador: state => state.avaliador,

  listaFuncionarios: state => state.listaFuncionarios,
  nomeFuncs: state => state.nomeFuncs,
  avaliacao: state => state.avaliacao,

  selecionadoAvaliacao: state => state.selecionadoAvaliacao,
  selecionadoFuncs: state => state.selecionadoFuncs,
  selecionadoGraficos: state => state.selecionadoGraficos,
  selecionadoNumericos: state => state.selecionadoNumericos
}

const mutations = {
  setSnackbarLogin: (state, snackbarLogin) => { state.snackbarLogin = snackbarLogin },
  setSnackbarEnvia: (state, snackbarEnvia) => { state.snackbarEnvia = snackbarEnvia },
  setDialogLogin: (state, dialogLogin) => { state.dialogLogin = dialogLogin },

  setUsername: (state, username) => { state.username = username },
  setPassword: (state, password) => { state.password = password },
  setArea: (state, area) => { state.area = area },
  setAvaliador: (state, avaliador) => { state.avaliador = avaliador },

  setListaFuncionarios: (state, listaFuncionarios) => { state.listaFuncionarios = listaFuncionarios },
  setNomeFuncs: (state, nomeFuncs) => { state.nomeFuncs = nomeFuncs },
  setAvaliacao: (state, avaliacao) => { state.avaliacao = avaliacao },

  selecionadoAvaliacao: (state, selecionadoAvaliacao) => { state.selecionadoAvaliacao = selecionadoAvaliacao },
  selecionadoFuncs: (state, selecionadoFuncs) => { state.selecionadoFuncs = selecionadoFuncs },
  selecionadoGraficos: (state, selecionadoGraficos) => { state.selecionadoGraficos = selecionadoGraficos },
  selecionadoNumericos: (state, selecionadoNumericos) => { state.selecionadoNumericos = selecionadoNumericos },
}

const actions = {
  fazLogin(context) {
    let json = require('./../assets/jsons/users.json')

    for (var i = 0; i < json.length; i++) {
      if (state.username == json[i].email && state.password == json[i].senha) {
        context.commit('setUsername', json[i].email)
        context.commit('setPassword', json[i].senha)
        context.commit('setArea', json[i].area)
        context.commit('setAvaliador', json[i].nome)
        context.commit('setDialogLogin', false)
      } else {
        context.commit('setSnackbarLogin', true)
      }
    }

    var full = []
    var f = []
    for (var i = 1; i < json.length; i ++) {
      full.push(json[i])
      f.push(json[i].nome)
    }
    
    context.commit('setListaFuncionarios', full)
    context.commit('setNomeFuncs', f)
  }, 

  fazLogout(context) {
    context.commit('setUsername', "")
    context.commit('setPassword', "")
    context.commit('setArea', "")
    context.commit('setAvaliador', "")
    context.commit('setDialogLogin', true)
  },

  abreSnackEnvia(context) {
    context.commit('setSnackbarEnvia', true)
  },

  fechaSnackEnvia(context) {
    context.commit('setSnackbarEnvia', false)
  },

  pesquisarFunc(context, input) {
    let json = require('./../assets/jsons/users.json')

    for(var i = 1; i < json.length; i ++) {
      if (input === json[i].nome) {
        context.commit('selecionadoFuncs', json[i])
      }
    }
  },

  pesquisarFuncGrafico(context, input) {
    let json = require('./../assets/jsons/users.json')

    for(var i = 1; i < json.length; i ++) {
      if (input === json[i].nome) {
        context.commit('selecionadoGraficos', json[i])
      }
    }
  },

  pesquisarFuncNumerico(context, input) {
    let json = require('./../assets/jsons/users.json')

    for(var i = 1; i < json.length; i ++) {
      if (input === json[i].nome) {
        context.commit('selecionadoNumericos', json[i])
      }
    }
  },


  enviarAvaliacao() {
    let json = require('./../assets/jsons/users.json')

    for(var i = 1; i < json.length; i ++) {
      
    }
  },

}


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
