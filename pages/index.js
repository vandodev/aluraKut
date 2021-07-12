import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { AlurakutMenu } from "../src/lib/AlurakutCommons";

function ProfileSideBar(props) {
  return (
    <Box as="aside">
      <img
        src={`https://github.com/${props.githubUser}.png`}
        alt="Foto de perfil do usuário"
        style={{ borderRadius: "10px" }}
      />
      <hr />

      <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
        @{props.githubUser}
      </a>
      <hr />
    </Box>
  );
}

export default function Home() {
  const githubUser = "vandodev";
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>Bem vindo</Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <Box>Comunidade</Box>
          <Box>Pessoas da Comunidade</Box>
        </div>
      </MainGrid>
    </>
  );
}
