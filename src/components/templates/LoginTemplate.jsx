import { styled } from "styled-components";
import { Title, InputText2, Btnsave, Linea } from "../../index.js";
import { v } from "../../styles/variables";
import { Device } from "../../styles/breakpoints";
export const LoginTemplate = () => {
  return (
    <Container>
      <div className="card">
        <Title>Ingresar</Title>
        <form action="">
          <InputText2>
            <input className="form__field" placeholder="email" type="text" />
          </InputText2>
          <InputText2>
            <input
              className="form__field"
              placeholder="contraseña"
              type="password"
            />
          </InputText2>
          <Btnsave
            titulo="Ingresar"
            bgcolor="#1cb0f6"
            color={"255,255,255"}
            width={"100%"}
          />
        </form>
        <Linea>
          <span>0</span>
        </Linea>
        <Btnsave titulo="Google" bgcolor="#fff" icono={<v.iconogoogle />} />
      </div>
    </Container>
  );
};
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  @media ${Device.tablet} {
    width: 400px;
  }
`;
