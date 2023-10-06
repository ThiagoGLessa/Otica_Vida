import SecaoBanner from "./SecaoBanner";
import SecaoContatos from "./SecaoContatos";
import SecaoProdutos from "./SecaoProdutos";
import SecaoSobre from "./SecaoSobre";

export default function Main(){
    return(
        <main>
            <SecaoBanner/>
            <SecaoProdutos/>
            <SecaoSobre/>
            <SecaoContatos/>
        </main>
    )
}