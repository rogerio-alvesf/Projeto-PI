package sptech.pi.espacoAberto;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/espacoAberto")
public class UsuarioController {

    private List<Cliente> clientes = new ArrayList<>();
    private List<Anunciante> anunciantes = new ArrayList<>();
    private List<Imovel> imoveis = new ArrayList<>();


    // EndPoints do Cliente --------------------------------------------------------------------
    @GetMapping("/listarClientes")
    public List<Cliente> listarClientes(){ return clientes;}

    @GetMapping("/listarImoveis")
    public List<Imovel> listariomveis(){ return imoveis;}

    @PostMapping("/cadastrarCliente")
    public Cliente cadastrarCliente(@RequestBody Cliente cliente){
        cliente.setId(clientes.size() + 1);
        clientes.add(cliente);
        return cliente;
    }

    @PostMapping("/cliente/tornarPremium/{email}/{senha}")
    public Cliente tornarClientePremium(@PathVariable String email, @PathVariable String senha) {
        for (Cliente cliente: clientes ) {
            if (cliente.getEmail().equals(email) && cliente.getSenha().equals(senha)){
                cliente.setPremium(true);
                return cliente;
            }
        }
        return null;
    }

    @PostMapping("/alugar/{nome}/{dataInicio}/{dataFim}/{imovel}")
    public String alugar( @PathVariable String nome, @PathVariable Integer dataInicio,
                          @PathVariable Integer dataFim, @PathVariable String imovel){
        for (Cliente cliente : clientes) {
            if (cliente.getNome().equals(nome)){
                return String.format("Imovel %s, alugado de %d até %d", imovel, dataInicio, dataFim);
            }
        }
        return "Usuario não encontrado";
    }

    @PostMapping("/comentar")
    public String comentar(){//@RequestBody Comentario c){
        return "HI";
    }

    @PostMapping("{nome}/favoritar/{nomeImovel}")
    public String favoritar( @PathVariable String nome,@PathVariable String nomeImovel ){
        for (Cliente cliente: clientes) {
            if (cliente.getNome().equals(nome)){
                for (Imovel imovel: imoveis) {
                    if (imovel.getNome().equals(nomeImovel)){
                        cliente.addFavoritos(imovel);
                        return String.format("O Imovel %s foi para lista de favoritos", imovel.getNome());
                    }
                }
            }
        }
        return "Impossivel favoritar";
    }

    @GetMapping("{nomeCliente}/favoritos")
    public String listarFavoritos(@PathVariable Cliente nomeCliente){
        for (Cliente cliente: clientes) {
            if (cliente.getNome().equals(nomeCliente)){
                return cliente.getFavoritos().toString();
            }
        }
        return "Impossivel efeturar requisição";
    }

    // EndPoints do Anunciante --------------------------------------------

    @PostMapping("/cadastrarAnunciante")
    public Anunciante cadastrarAnunciante(@RequestBody Anunciante anunciante){
        anunciante.setId(anunciantes.size() + 1);
        anunciantes.add(anunciante);
        return anunciante;
    }

    @GetMapping("/listarAnunciantes")
    public List<Anunciante> listarAnunciantes(){ return anunciantes;}

    @PostMapping("/anunciante/tornarPremium/{email}/{senha}")
    public Anunciante tornarAnunciantePremium(@PathVariable String email, @PathVariable String senha) {
        for (Anunciante anunciante: anunciantes ) {
            if (anunciante.getEmail().equals(email) && anunciante.getSenha().equals(senha)){
                anunciante.setPremium(true);
                return anunciante;
            }
        }
        return null;
    }

    @PostMapping("/usuario/{id}/cadastrarImovel")
    public String cadastrarImovel( @PathVariable Integer id,@RequestBody Imovel imovel){
        for (Anunciante anum: anunciantes) {
            if(anum.getId() == id){
                imovel.setId(imoveis.size() + 1);
                anum.(imovel);
                imoveis.add(imovel);
                return "Imovel " + imovel.getNome() + " cadastrado com sucesso.";
            }
        }
        return "impossivel cadastrar imovel";
    }
}
