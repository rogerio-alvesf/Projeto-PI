package sptech.pi.espacoAberto;

import java.util.ArrayList;
import java.util.List;

public class Cliente extends Usuario {
    private List<Imovel> favoritos;

    //constructor


    public Cliente(Integer id, String nome, String dataNascimento, String cpf,
                   Boolean isPremium, String email, String senha, List<Imovel> favoritos) {
        super(id, nome, dataNascimento, cpf, isPremium, email, senha);
        this.favoritos = favoritos;
    }

    //methods
    @Override
    public void tornarPremium() {
        setPremium(true);
    }


    public void addFavoritos(Imovel i){
        favoritos.add(i);
    }

    //get and set
    public List<Imovel> getFavoritos() {
        return favoritos;
    } 

    public void setFavoritos(List<Imovel> favoritos) {
        this.favoritos = favoritos;
    }

    //toString
    @Override
    public String toString() {
        return "Cliente{" +
                "favoritos=" + favoritos +
                '}';
    }
}
