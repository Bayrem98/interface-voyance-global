import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const ViewBlog10 = () => {
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
            Interprétation et signification de la lame XX : le Jugement
          </h2>
          <CardBody>
            <p style={{ textAlign: "justify" }}>
              Nous arrivons aux dernières arcanes de notre jeu de tarot. Le
              Jugement, représenté par la lame 20, est une lame majeure lors
              d’un tirage de tarot. Découvrez sa définition, sa signification et
              dans quel tirage elle aura le plus de pertinence.
            </p>
            <h6>*Description de la lame majeure n°20</h6>
            <p style={{ textAlign: "justify" }}>
              Nous découvrons une lame avec de nombreux personnages, ce qui est
              inhabituel. En haut et sur les 2/3 de la carte, un ange fait face
              et souffle dans une trompette. L’ange est au centre d’une couronne
              de nuages et les rayons du soleil passent sous lui. Au bas de la
              carte, on peut voir trois personnes nues en train de prier. Deux
              d’entre elles nous font face, tandis que la dernière, au centre,
              est de dos. Les deux personnages de face sont un homme (à droite)
              et une femme (à gauche). Inspirée du Jugement dernier et de ses
              représentations, cette arcane est très importante en tarologie.
            </p>
            <h5>
              Il est intéressant de signaler que plusieurs représentations de la
              lame n°20 existent dans le tarot de Marseille, avec notamment des
              variations de couleurs sur les personnages. Ces changements
              modifient la symbolique de la lame, laissant place à de multiples
              interprétations.
            </h5>
            <h6>*Signification de la lame « Le Jugement » n°20</h6>
            <p style={{ textAlign: "justify" }}>
              Le Jugement est souvent perçu comme une renaissance, un appel, une
              métamorphose. C’est l’annonce d’un changement ou d’une nouveauté.
              Si vous tirez cette carte lors d’une consultation concernant
              l’amour ou le travail, il y a de fortes chances qu’une nouvelle
              positive soit sur le point d’arriver. Le Jugement peut aussi être
              interprété comme l’illumination, la capacité à voir de nouveaux
              éléments et donc à s’améliorer dans le travail ou dans ses
              relations avec les autres, par exemple sa famille. Le Jugement est
              une arcane puissante de la conscience et de la connaissance, une
              forme de transcendance spirituelle.
            </p>
            <h6>*Face sombre du Jugement lors d’un tirage</h6>
            <p style={{ textAlign: "justify" }}>
              Sans grande surprise, dans sa version sombre, la lame du Jugement
              avertit le consultant d’une mauvaise nouvelle, d’une tendance à se
              sentir jugé ou à juger les autres sévèrement. Le Jugement est
              aussi associé à ceux qui ont du mal à pardonner, que l’on
              qualifierait de « rancuniers ». Il est également possible que le
              Jugement se montre pour une personne qui ne se sent pas reconnue
              pour ce qu’elle est ou pour son travail. Elle est invitée à
              reprendre le contrôle et la confiance en elle pour réussir.
            </p>
            <h6>*Dans quel tirage retrouve-t-on souvent le Jugement ?</h6>
            <p style={{ textAlign: "justify" }}>
              Il serait plus cohérent que la carte du Jugement se montre dans le
              cadre d’un tirage amoureux ou professionnel. Pour ces types de
              tirages, nous recommandons d’effectuer des tirages tels que le
              tirage en ligne ou le tirage en croix. Sa présence dans un tirage
              sur le domaine du travail peut prévenir d’une promotion à venir.
              Dans le domaine amoureux ou familiale, il annonce un changement
              permanent et fort, par exemple une naissance ou l’arrivée d’une
              personne dans votre vie. Il y a beaucoup de symbolique derrière
              cette arcane numéro 20 du Tarot de Marseille. La trompette,
              l’ange, le tombeau et les personnages présents ont tous une raison
              d’être représentés et une symbolique propre. Cet article propose
              une analyse approfondie de cette carte majeure du Tarot.
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default ViewBlog10;
