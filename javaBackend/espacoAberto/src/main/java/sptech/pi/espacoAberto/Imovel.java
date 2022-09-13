package sptech.pi.espacoAberto;

public class Imovel {
    private Integer id;
    private String nome;
    private String endereco;
    private String comprovanteImovel;
    private String descricao;
    private Integer qtdQuartos;
    private Boolean piscina;
    private Double precoDiaria;
    private Integer avaliacao;

    //constructor

    public Imovel(Integer id, String nome, String endereco, String comprovanteImovel,
                  String descricao, Integer qtdQuartos, Boolean piscina, Double precoDiaria, Integer avaliacao) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.comprovanteImovel = comprovanteImovel;
        this.descricao = descricao;
        this.qtdQuartos = qtdQuartos;
        this.piscina = piscina;
        this.precoDiaria = precoDiaria;
        this.avaliacao = avaliacao;
    }
    //get and set

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getComprovanteImovel() {
        return comprovanteImovel;
    }

    public void setComprovanteImovel(String comprovanteImovel) {
        this.comprovanteImovel = comprovanteImovel;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Integer getQtdQuartos() {
        return qtdQuartos;
    }

    public void setQtdQuartos(Integer qtdQuartos) {
        this.qtdQuartos = qtdQuartos;
    }

    public Boolean getPiscina() {
        return piscina;
    }

    public void setPiscina(Boolean piscina) {
        this.piscina = piscina;
    }

    public Double getPrecoDiaria() {
        return precoDiaria;
    }

    public void setPrecoDiaria(Double precoDiaria) {
        this.precoDiaria = precoDiaria;
    }

    public Integer getAvaliacao() {
        return avaliacao;
    }

    public void setAvaliacao(Integer avaliacao) {
        this.avaliacao = avaliacao;
    }

    //toString()

    @Override
    public String toString() {
        return "Imovel{" +
                "nome='" + nome + '\'' +
                ", endereco='" + endereco + '\'' +
                ", comprovanteImovel='" + comprovanteImovel + '\'' +
                ", descricao='" + descricao + '\'' +
                ", qtdQuartos=" + qtdQuartos +
                ", piscina=" + piscina +
                ", precoDiaria=" + precoDiaria +
                ", avaliacao=" + avaliacao +
                '}';
    }
}
