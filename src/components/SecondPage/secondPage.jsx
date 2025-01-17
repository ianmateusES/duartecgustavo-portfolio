import React from "react";

// Importação componente
import ProjetoComponent from './projetoComponent';

// Importação imagens
import bg2 from "../../assets/SecondPage/bg-2Page.svg";


const SecondPage = () => {
  return (
    <>
      <div className="d-flex row" >
        <div className="sidebardown" id="desktop"></div>
        <div className="py-3 workspaceSP" id="projetos" >
          <img className="img-fluid imgbg" id="desktop" src={bg2} alt="" />

          <div className="d-flex justify-content-center pt-2" data-aos="fade-up">
            <h3 className="titulo1Proj1 tituloAnima text-center">Projetos</h3>
          </div>

          <div className="container-fluid d-flex mt-3"  data-aos="fade-up">
            <div className="row">
              <ProjetoComponent t1={"FULLSTACK"} t2={"ELETRO"} link="" img="./imgs/FullStackEletro.png" />
              <ProjetoComponent t1={"RE"} t2={"PARA"} link="" img="./imgs/FullStackEletro.png" />
              <ProjetoComponent t1={"EDU"} t2={"IMPULSO"} link="https://eduimpulso.herokuapp.com/" img="./imgs/EduImpulso.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
