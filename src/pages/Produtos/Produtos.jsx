import { useState, useEffect } from "react";
import Produto from "./../../components/Produto/Produto";
import Loading from "../../components/Loading/Loading";

import styles from "./Produtos.module.css";

import arrow from "./../../assets/images/up-arrow.svg";
import Divisor from "../../components/Divisor/Divisor";

export default function Produtos(props) {
  const [pagina, trocarPagina] = useState(0);
  const [produtos, atualizarProdutos] = useState({
    products: "",
    loading: true,
  });

  function gerarProdutos(acao) {
    trocarPagina(acao === "proximo" ? pagina + 1 : pagina - 1);
    atualizarProdutos({ products: produtos.products, loading: true });
    fetch(
      `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${pagina}`
    )
      .then((res) => res.json())
      .then((res) => atualizarProdutos(res));
  }

  useEffect(() => {
    gerarProdutos("proximo");
  }, []);

  const handleNavClick = (e) => {
    gerarProdutos(e.target.name);
  };

  return (
    <div ref={props.refs}>
      <span style={{ display: produtos.loading ? "block" : "none" }}>
        <Loading />
      </span>

      <Divisor texto="Sua seleção especial" />

      <section className={styles.produtosWrapper}>
        {produtos.products.length > 1
          ? produtos.products.map((item, index) => (
              <Produto
                name={produtos.products[index].name}
                descricao={produtos.products[index].description}
                preco={[
                  produtos.products[index].oldPrice,
                  produtos.products[index].price,
                  produtos.products[index].installments.count,
                  produtos.products[index].installments.value,
                ]}
                imagem={`https:${produtos.products[index].image}`}
              />
            ))
          : ""}
      </section>

      <nav className={styles.Nav}>
        <img
          name="anterior"
          onClick={pagina > 1 ? handleNavClick : null}
          style={{ opacity: pagina === 1 ? 0.4 : 1 }}
          src={arrow}
        />
        Página {pagina}
        <img name="proximo" onClick={handleNavClick} src={arrow} />
      </nav>
    </div>
  );
}
