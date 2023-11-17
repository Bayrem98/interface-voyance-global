import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const ViewBlog8 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="" style={{ backgroundColor: "transparent" }}>
        <FontAwesomeIcon
          icon={faCircleLeft}
          beat
          size="2xl"
          style={{
            color: "rgba(147, 147, 203, 0.866",
            cursor: "pointer",
            marginTop: 10,
            marginLeft: 10,
          }}
          onClick={() => navigate(-1)}
        />
        <Card
          style={{
            marginTop: 20,
            marginLeft: 50,
            marginRight: 50,
            marginBottom: 20,
          }}
        >
          <h2 style={{ textAlign: "center" }}>
            Interprétation et signification de la lame XXII : Le Mât
          </h2>
          <CardBody>
            <p style={{ textAlign: "justify" }}>
              Le Mât est la 22e carte du tarot de Marseille et représente la
              dernière lame majeure. Elle revêt une signification profonde pour
              le consultant qui la tire lors d’un tirage de cartes. Voici son
              interprétation dans différents contextes de consultation de
              voyance.
            </p>
            <h6>*Description de la carte numéro 22 du tarot de Marseille</h6>
            <p style={{ textAlign: "justify" }}>
              Le Mât met en scène un homme marchant vers la droite de la carte,
              portant un baluchon sur l’épaule. Il avance avec détermination,
              appuyé sur un bâton, tandis qu’un chien le suit de près. L’homme
              est vêtu comme un « fou » de cour royale, ajoutant une touche
              d’originalité à l’image. Il occupe une grande partie de la carte,
              laissant peu de place au paysage environnant.
            </p>
            <h6>*Interprétation de la carte lors d’un tirage</h6>
            <p style={{ textAlign: "justify" }}>
              La lame du Mât annonce que le consultant avance sur la bonne voie,
              ayant choisi la bonne direction dans sa vie. Il est encouragé à
              continuer sur cette voie pour embrasser son avenir avec confiance.
              Bien qu’il puisse rencontrer des obstacles, son chemin est dégagé
              et clair. Cette carte symbolise également la liberté et la
              libération des contraintes. Le consultant est incité à se détacher
              des obligations et des pressions sociales. Cependant, cela ne
              signifie pas qu’il doive s’isoler du monde. Le Mât indique plutôt
              que le consultant a la capacité de prendre des risques et est prêt
              à explorer des territoires inconnus. Il incarne l’esprit d’un
              voyageur, d’un aventurier. Le chien qui suit l’homme peut
              représenter la loyauté et la protection, suggérant que le
              consultant est accompagné et soutenu dans ses démarches
              audacieuses. En somme, la carte du Mât encourage le consultant à
              embrasser le changement, à oser prendre des décisions audacieuses
              et à se libérer des contraintes qui entravent son évolution. C’est
              une carte porteuse d’énergie positive et d’optimisme pour un futur
              prometteur.
            </p>
            <h6>*L’interprétation du mât tiré à l’envers</h6>
            <p style={{ textAlign: "justify" }}>
              Lorsque la lame XXII est tirée à l’envers, elle indique
              généralement que le consultant est sur une voie erronée, qu’il a
              pris de mauvaises décisions récemment ou qu’il est désorienté dans
              sa vie. Le Mât inversé peut se présenter aux personnes qui se
              sentent perdues, sans direction claire dans leur parcours. Cette
              carte peut être un signal d’alerte pour un consultant qui vient de
              prendre une décision importante, comme lancer une entreprise,
              quitter son travail, se marier ou se séparer. Quelle que soit la
              décision, le Mât inversé met en évidence la nécessité de remettre
              en cause les décisions prises. L’interprétation de la lame change
              en fonction de la question que le consultant aura posé. Il est
              donc important de bien formuler votre interrogation dans une
              premier temps. Le voyant que vous consulter sera aussi très
              important, un voyant médium sérieux est toujours à privilégier
              lorsque vous vous intéressez à votre avenir.
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default ViewBlog8;
