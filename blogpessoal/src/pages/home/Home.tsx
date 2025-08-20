function Home() {
  return (
    <>
      <div style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center"
      }}>
        <div style={{
          width: "80vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <h2>Seja bem-vindo!!!</h2>
          <p>Expresse aqui seus pensamentos e opiniões</p>

          <div style={{
            width: "80vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            {/* Conteúdo adicional pode ser inserido aqui futuramente */}
          </div>

          <img src="../../../palmeiras.png" alt="Imagem da página home" width="400px" />
        </div>
      </div>
    </>
  );
}

export default Home;
