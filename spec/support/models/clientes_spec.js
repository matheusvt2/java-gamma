const Cliente = require('../../../models/cliente')
 
describe('Clientes', ()=> {
    beforeEach(async ()=> {
    })
    
    it('Retorna todos', async () => {
        let clientes = Cliente.todos()
        expect(clientes.length).toEqual(10)
    });
})