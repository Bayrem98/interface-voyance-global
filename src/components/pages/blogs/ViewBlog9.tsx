import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const ViewBlog9 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <FontAwesomeIcon
        className="blog-icon-retour"
        icon={faCircleLeft}
        beat
        size="2xl"
        onClick={() => navigate(-1)}
      />
      <Card className="blog-card">
        <h2 className="blog-title">
          Interprétation et signification de la lame XXI : le monde
        </h2>
        <CardBody>
          <p className="blog-para">
            Avant-dernière carte du tarot de Marseille, et pourtant l’une des
            lames les plus puissantes lors d’une consultation en cartomancie.
            Cette lame porte le numéro 21 parmi les 22 arcanes majeures du
            tarot. Considérée comme la lame de l’accomplissement, elle annonce
            une réussite pour le consultant. C’est une lame bénéfique.
          </p>
          <h6 className="blog-title2-3">
            *Description de la lame N°21 : Le Monde
          </h6>
          <p className="blog-para">
            Le Monde représente une femme au centre d’une couronne de lauriers.
            La femme tient un sceptre dans sa main gauche et est simplement
            vêtue d’une étole qui descend en diagonale depuis son épaule jusqu’à
            sa hanche. Aux quatre coins de la carte, on remarque différents
            personnages (en partant du coin en haut à gauche et en tournant dans
            le sens horaire) :
          </p>
          <ul className="blog-ul">
            <li className="blog-li">
              <span className="blog-span">L’ange</span>
            </li>
            <li className="blog-li">
              <span className="blog-span">L’aigle</span>
            </li>
            <li className="blog-li">
              <span className="blog-span">Le lion</span>
            </li>
            <li className="blog-li">
              <span className="blog-span">Le cheval</span>
            </li>
          </ul>
          <h6 className="blog-title2-3">
            *Interprétation et signification de la lame 21
          </h6>
          <p className="blog-para">
            Cette lame promet l’épanouissement, la réussite et l’accomplissement
            des projets ou des objectifs du consultant. Quel que soit le domaine
            de consultation, le consultant est destiné à réaliser ce qu’il
            souhaite dans le cadre d’un projet ou d’une réalisation. Cette
            réussite est personnelle et dépend des actions entreprises par le
            consultant. Cette arcane se présente pour les personnes ouvertes aux
            autres et au monde. C’est une personne dotée d’un esprit synthétique
            capable d’expliquer et de gérer de nombreuses situations. Du côté
            des émotions, on peut dire que le consultant est heureux, épanoui
            dans sa vie et qu’il se sent équilibré. Il semble trouver le bonheur
            dans la réalisation de ses projets. Le monde est un très fort
            symbole de maternité et de grossesse dans le cadre d’une relation
            amoureuse épanouie. Le monde prédit une relation durable et
            constructive.
          </p>
          <h6 className="blog-title2-3">
            *Interprétation dans de la lame 20 dans sa face sombre
          </h6>
          <p className="blog-para">
            Lorsque la carte est tirée à l’envers, cela peut signaler un
            objectif trop lointain ou trop complexe pour le consultant. Il est
            fort probable qu’il ne puisse réussir s’il continue sur ce chemin.
            Cela peut être considéré comme un avertissement. Concernant la
            personnalité du consultant, la lame 21 tirée à l’envers annonce une
            personne renfermée, qui reste dans sa bulle et se protège du monde
            extérieur. La place de la carte dans le tirage est également très
            importante, indiquant parfois que la réussite est derrière lui ou
            qu’elle est illusoire et impossible à atteindre. Le Monde,
            représente l’aboutissement, la réussite et l’épanouissement dans les
            projets et objectifs du consultant. Elle symbolise la réalisation
            personnelle et la connexion harmonieuse avec le monde qui nous
            entoure. C’est une carte porteuse d’espoir et de satisfaction.
            N’hésitez pas à faire appel à un voyant médium sérieux pour
            effectuer une consultation en tarologie.
          </p>
        </CardBody>
      </Card>
    </div>
  );
};
export default ViewBlog9;
