import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const Viewblog5 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="">
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
            Numérologie du couple, comment ça fonctionne ?
          </h2>
          <CardBody>
            <p style={{ textAlign: "justify" }}>
              Vous voulez savoir si vous êtes compatible avec votre partenaire
              et où peut vous mener votre relation sur le long terme ? Avec la
              numérologie de couple, vous pouvez rapidement en apprendre plus
              sur votre compatibilité amoureuse astrologique ou numérologique.
              Compatibilité des prénoms, dates de naissance, ... La vie peut
              parfois prendre des allures de conte de fée mais les chiffres eux,
              ne mentent pas.
            </p>
            <h6>*Qu'est-ce que la numérologie ?</h6>
            <p style={{ textAlign: "justify" }}>
              La numérologie regroupe un ensemble de pratiques et de croyances
              qui se basent sur l'étude des nombres et des chiffres. En
              transformant les lettres d'un prénom ou une date de naissance en
              un nombre bien particulier, on peut ainsi en apprendre plus sur
              une personne, une compatibilité amoureuse, une destinée, ... Dans
              le même esprit que l'astrologie, la numérologie n'est pas une
              pratique de voyance à proprement parler. Elle permet aux personnes
              qui la pratique de mieux se connaître, mieux se comprendre et de
              mieux vivre avec les autres. Une opportunité d'être plus heureux,
              plus épanouie et d'aborder la vie différemment.
            </p>
            <h6>*Numérologie des prénoms du couple</h6>
            <p style={{ textAlign: "justify" }}>
              En couple, il n'est pas toujours évident de savoir si la relation
              est faite pour durer. Avec la numérologie de couple, vous pouvez
              étudier la compatibilité des prénoms, pour savoir si les bases sur
              lesquelles reposent votre histoire sont solides et quels sont les
              éventuels points de vigilance à observer.
            </p>
            <h6>
              *Calculer son chiffre de compatibilité numérologique des prénoms
            </h6>
            <p>
              <span>
                Pour pouvoir connaître votre compatibilité amoureuse grâce à la
                numérologie de couple, vous devez trouver votre nombre de
                couple. Voici comment faire :
              </span>
              <br />
              <span>
                1°-Transformez d'abord les lettres de votre prénom et de celui
                de votre partenaire en chiffre. Pour cela, suivez le tableau
                suivant :
              </span>
              <ul>
                <li>A/J/S = 1</li>
                <li>B/K/T = 2</li>
                <li>C/L/U = 3</li>
                <li>D/M/V = 4</li>
                <li>E/N/W = 5</li>
                <li>F/O/X = 6</li>
                <li>G/P/Y = 7</li>
                <li>H/Q/Z = 8</li>
                <li>I/R = 9</li>
              </ul>
              <span>
                2°-Additionnez les chiffres de chaque prénom pour trouver un
                nombre. Puis additionner chaque chiffre du nombre pour trouver
                un chiffre.
              </span>
              <br />
              <span>
                3°-Vous avez alors 1 chiffre par prénom que vous pouvez
                additionner ensemble. Cela vous donne votre numéro de couple.
              </span>
              <br />
              <br />
              <h6>*La signification des résultats</h6>
              <span>
                Une fois votre numérologie de couple faite, vous devez analyser
                les résultats. Chaque chiffre correspond à une indication
                particulière de compatibilité amoureuse :
              </span>
              <ul>
                <li>
                  1 : une rencontre coup de foudre très intense et pleine
                  d'amour. Attention toutefois à ne pas brûler les étapes pour
                  tenir dans la durée.
                </li>
                <li>
                  2 : le chiffre du couple par excellence. Compatibilité,
                  bonheur et durabilité sont au programme.
                </li>
                <li>
                  3 : complicité et aventures au programme. Attention à ne pas
                  oublier l'intimité et la tendresse, pour ne pas tomber dans
                  une relation amicale.
                </li>
                <li>
                  4 : des difficultés d'équilibre sont à prévoir, vous allez
                  devoir vous apprivoiser pour espérer durer dans le temps.
                </li>
                <li>
                  5 : une passion parfois dévastatrice avec une attirance qui ne
                  fait aucun doute. Les montagnes russes ne sont pas de tout
                  repos.
                </li>
                <li>
                  6 : une relation équilibrée et harmonieuse qui devrait vous
                  permettre de vous épanouir sur la durée.
                </li>
                <li>
                  7 : la relation va nécessiter du temps pour se créer et
                  s'installer mais tout vient à point à qui sait attendre.
                </li>
                <li>
                  8 : une relation passionnelle et émotionnelle qui n'apprécie
                  pas la routine et a besoin que les choses bougent.
                </li>
                <li>
                  9 : une relation conflictuelle, néanmois ils sont tolérants et
                  feront des efforts pour s'accepter car en fait ils ne
                  s'ennuieront jamais ensemble.
                </li>
              </ul>
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default Viewblog5;
