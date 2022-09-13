package sptech.pi.espacoAberto;

public class Comentario {
    private Cliente cliente;
    private String comentario;

    //constructor
    public Comentario(Cliente cliente, String comentario) {
        this.cliente = cliente;
        this.comentario = comentario;
    }

    //get and set

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    // toString()
    @Override
    public String toString() {
        return "Comentario{" +
                "cliente=" + cliente +
                ", comentario='" + comentario + '\'' +
                '}';
    }
}
