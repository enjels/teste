import "./Container.css"
import Header from "../header/Header";
import Sobremim from "../Sobremim/Sobremim";
import Projetos from "../projetos/Projetos";
import Hardskills from "../hard_skills/Hardskills";
import Softskills from "../Soft_skills/Softskills";
// import Mockup from "../mockup/mockup";


const Container = () => {
    return (
      <div id="main-container">
        <Header />
        <Sobremim />
        {/* <Mockup /> */}
        <Hardskills />
        <Softskills />
        <Projetos />
      </div>
    );
    
};

export default Container